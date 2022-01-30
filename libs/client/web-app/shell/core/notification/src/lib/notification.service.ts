import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Notification } from './notification.types';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _notifications: ReplaySubject<Notification[]> = new ReplaySubject<
    Notification[]
  >(1);

  /**
   * Constructor
   */
  constructor(private _httpClient: HttpClient) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for notifications
   */
  get notifications$(): Observable<Notification[]> {
    return this._notifications.asObservable();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Get all notifications
   */
  getAll(): Observable<Notification[]> {
    return this._httpClient
      .get<Notification[]>('assets/api/notifications.json')
      .pipe(
        tap((notifications) => {
          this._notifications.next(notifications);
        })
      );
  }

  /**
   * Update the notification
   *
   * @param id
   * @param notification
   */
  update(id: string, notification: Notification): Observable<Notification> {
    return this.notifications$.pipe(
      take(1),
      switchMap((notifications) =>
        this._httpClient
          .patch<Notification>('assets/api/notifications', {
            id,
            notification,
          })
          .pipe(
            map((updatedNotification: Notification) => {
              // Find the index of the updated notification
              const index = notifications.findIndex((item) => item.id === id);

              // Update the notification
              notifications[index] = updatedNotification;

              // Update the notifications
              this._notifications.next(notifications);

              // Return the updated notification
              return updatedNotification;
            })
          )
      )
    );
  }

  /**
   * Delete the notification
   *
   * @param id
   */
  delete(id: string): Observable<boolean> {
    return this.notifications$.pipe(
      take(1),
      switchMap((notifications) =>
        this._httpClient
          .delete<boolean>('assets/api/notifications', { params: { id } })
          .pipe(
            map((isDeleted: boolean) => {
              // Find the index of the deleted notification
              const index = notifications.findIndex((item) => item.id === id);

              // Delete the notification
              notifications.splice(index, 1);

              // Update the notifications
              this._notifications.next(notifications);

              // Return the deleted status
              return isDeleted;
            })
          )
      )
    );
  }

  /**
   * Mark all notifications as read
   */
  markAllAsRead(): Observable<boolean> {
    return this.notifications$.pipe(
      take(1),
      switchMap((notifications) =>
        this._httpClient
          .get<boolean>('assets/api/notifications/mark-all-as-read')
          .pipe(
            map((isUpdated: boolean) => {
              // Go through all notifications and set them as read
              notifications.forEach((notification, index) => {
                notifications[index].read = true;
              });

              // Update the notifications
              this._notifications.next(notifications);

              // Return the updated status
              return isUpdated;
            })
          )
      )
    );
  }
}
