import {
  Component,
  DestroyRef,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, Observable, combineLatest, map, tap } from 'rxjs';
import { IconsService } from './icons.service';
import { Icon } from './icons.types';

@Component({
  selector: 'msk-docs-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconsComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  icons$!: Observable<Icon>;
  filteredIcons$!: Observable<Icon>;
  filterValue$: BehaviorSubject<string> = new BehaviorSubject('');

  iconType!: string;
  iconSize = 'icon-size-6';
  selectedNamespace!: string;
  selectedIcon!: string;

  /**
   * Constructor
   */
  constructor(
    private _iconsService: IconsService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Get the icons
    this.icons$ = this._iconsService.icons.pipe(
      tap((res) => {
        this.iconType = res.type;
        this.selectedIcon = res.list[0];
        this.selectedNamespace = res.namespace;
      }),
    );

    // Create filtered icons
    this.filteredIcons$ = combineLatest([this.icons$, this.filterValue$]).pipe(
      takeUntilDestroyed(this.destroyRef),
      map(([icons, filterValue]) => {
        // Filter the icons
        const filteredIcons = icons.list.filter((icon) =>
          icon.toLowerCase().includes(filterValue.toLowerCase()),
        );

        // Update the list with the filtered icons
        return {
          ...icons,
          list: filteredIcons,
        };
      }),
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Select type icon
   *
   * @param event
   */
  selectType(event: MatSelectChange): void {
    this._router.navigate([`../${event.value}`], { relativeTo: this._route });
  }

  /**
   * Filter icons
   *
   * @param event
   */
  filterIcons(event: any): void {
    // Push the value to the observable
    this.filterValue$.next(event.target.value);
  }

  /**
   * Select an icon
   *
   * @param namespace
   * @param icon
   */
  selectIcon(namespace: string, icon: string): void {
    this.selectedNamespace = namespace;
    this.selectedIcon = icon;
  }

  /**
   * Returns the selected icon's svgIcon
   * to use in mat-icon component
   */
  calcSvgIconAttr(): string {
    if (!this.selectedIcon) {
      return '';
    }

    if (this.selectedNamespace === '') {
      return this.selectedIcon;
    }

    return `${this.selectedNamespace}:${this.selectedIcon}`;
  }
}
