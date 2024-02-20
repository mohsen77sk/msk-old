/* eslint-disable @angular-eslint/component-selector */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatButton } from '@angular/material/button';
import { Direction } from '@angular/cdk/bidi';

import { Message } from '@msk/client/web-app/shell/core/message';
import { MessageService } from '@msk/client/web-app/shell/core/message';
import { MskConfigService } from '@msk/client/shared/services/config';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'messages',
})
export class MessagesComponent implements OnInit, OnDestroy {
  @ViewChild('messagesOrigin') private _messagesOrigin!: MatButton;
  @ViewChild('messagesPanel') private _messagesPanel!: TemplateRef<any>;
  destroyRef = inject(DestroyRef);

  layoutDirection!: Direction;
  messages!: Message[];
  unreadCount = 0;

  private _overlayRef!: OverlayRef;

  /**
   * Constructor
   */
  constructor(
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
    private _changeDetectorRef: ChangeDetectorRef,
    private _messageService: MessageService,
    private _mskConfigService: MskConfigService,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._mskConfigService.config$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((config: any) => {
        // Store the layoutDirection
        this.layoutDirection = config.direction;
      });

    // Subscribe to message changes
    this._messageService.messages$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((messages: Message[]) => {
        // Load the messages
        this.messages = messages;

        // Calculate the unread count
        this._calculateUnreadCount();

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Dispose the overlay
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Open the messages panel
   */
  openPanel(): void {
    // Return if the messages panel or its origin is not defined
    if (!this._messagesPanel || !this._messagesOrigin) {
      return;
    }

    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }

    // Update direction the overlay
    this._overlayRef.setDirection(this.layoutDirection);

    // Attach the portal to the overlay
    this._overlayRef.attach(
      new TemplatePortal(this._messagesPanel, this._viewContainerRef),
    );
  }

  /**
   * Close the messages panel
   */
  closePanel(): void {
    this._overlayRef.detach();
  }

  /**
   * Mark all messages as read
   */
  markAllAsRead(): void {
    // Mark all as read
    this._messageService.markAllAsRead().subscribe();
  }

  /**
   * Toggle read status of the given message
   */
  toggleRead(message: Message): void {
    // Toggle the read status
    message.read = !message.read;

    // Update the message
    this._messageService.update(message.id, message).subscribe();
  }

  /**
   * Delete the given message
   */
  delete(message: Message): void {
    // Delete the message
    this._messageService.delete(message.id).subscribe();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create the overlay
   */
  private _createOverlay(): void {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: 'msk-backdrop-on-mobile',
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay
        .position()
        .flexibleConnectedTo(this._messagesOrigin._elementRef.nativeElement)
        .withLockedPosition(true)
        .withPush(true)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
          },
        ]),
    });

    // Detach the overlay from the portal on backdrop click
    this._overlayRef.backdropClick().subscribe(() => {
      this._overlayRef.detach();
    });
  }

  /**
   * Calculate the unread count
   *
   * @private
   */
  private _calculateUnreadCount(): void {
    let count = 0;

    if (this.messages && this.messages.length) {
      count = this.messages.filter((message) => !message.read).length;
    }

    this.unreadCount = count;
  }
}
