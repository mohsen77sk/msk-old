"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[8525],{8337:(K,I,c)=>{c.d(I,{Ov:()=>D,Z9:()=>x,o2:()=>p});var E=c(3168),S=c(8645);c(5879);class p{}function x(y){return y&&"function"==typeof y.connect&&!(y instanceof E.c)}class D{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(n=!1,a,o=!0,u){this._multiple=n,this._emitChanges=o,this.compareWith=u,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new S.x,a&&a.length&&(n?a.forEach(h=>this._markSelected(h)):this._markSelected(a[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(o=>this._markSelected(o));const a=this._hasQueuedChanges();return this._emitChangeEvent(),a}deselect(...n){this._verifyValueAssignment(n),n.forEach(o=>this._unmarkSelected(o));const a=this._hasQueuedChanges();return this._emitChangeEvent(),a}setSelection(...n){this._verifyValueAssignment(n);const a=this.selected,o=new Set(n);n.forEach(h=>this._markSelected(h)),a.filter(h=>!o.has(h)).forEach(h=>this._unmarkSelected(h));const u=this._hasQueuedChanges();return this._emitChangeEvent(),u}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();const a=this._hasQueuedChanges();return n&&this._emitChangeEvent(),a}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(n){if(this.compareWith){for(let a of this._selection)if(this.compareWith(n,a))return a;return n}return n}}},8525:(K,I,c)=>{c.d(I,{LD:()=>ne,gD:()=>se});var E=c(9594),S=c(6814),t=c(5879),p=c(3680),x=c(4170),P=c(5407),k=c(4300),B=c(9388),D=c(2495),V=c(8337),f=c(6028),A=c(6223),y=c(8645),n=c(4911),a=c(3019),o=c(7921),u=c(4664),h=c(8180),m=c(2181),C=c(7398),b=c(3997),g=c(9773),d=c(6825);const w=["trigger"],U=["panel"];function H(l,O){if(1&l&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Oqu(e.placeholder)}}function Y(l,O){if(1&l&&(t.TgZ(0,"span",14),t._uU(1),t.qZA()),2&l){const e=t.oxw(2);t.xp6(1),t.Oqu(e.triggerValue)}}function G(l,O){1&l&&t.Hsn(0,0,["*ngSwitchCase","true"])}function z(l,O){if(1&l&&(t.TgZ(0,"span",11),t.YNc(1,Y,2,1,"span",12),t.YNc(2,G,1,0,"ng-content",13),t.qZA()),2&l){const e=t.oxw();t.Q6J("ngSwitch",!!e.customTrigger),t.xp6(2),t.Q6J("ngSwitchCase",!0)}}function Z(l,O){if(1&l){const e=t.EpF();t.O4$(),t.kcU(),t.TgZ(0,"div",15,16),t.NdJ("@transformPanel.done",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r._panelDoneAnimatingStream.next(s.toState))})("keydown",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r._handleKeydown(s))}),t.Hsn(2,1),t.qZA()}if(2&l){const e=t.oxw();t.Gre("mat-mdc-select-panel mdc-menu-surface mdc-menu-surface--open ",e._getPanelTheme(),""),t.Q6J("ngClass",e.panelClass)("@transformPanel","showing"),t.uIk("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}const j=[[["mat-select-trigger"]],"*"],N=["mat-select-trigger","*"],Q={transformPanelWrap:(0,d.X$)("transformPanelWrap",[(0,d.eR)("* => void",(0,d.IO)("@transformPanel",[(0,d.pV)()],{optional:!0}))]),transformPanel:(0,d.X$)("transformPanel",[(0,d.SB)("void",(0,d.oB)({opacity:0,transform:"scale(1, 0.8)"})),(0,d.eR)("void => showing",(0,d.jt)("120ms cubic-bezier(0, 0, 0.2, 1)",(0,d.oB)({opacity:1,transform:"scale(1, 1)"}))),(0,d.eR)("* => void",(0,d.jt)("100ms linear",(0,d.oB)({opacity:0})))])};let W=0;const F=new t.OlP("mat-select-scroll-strategy"),$=new t.OlP("MAT_SELECT_CONFIG"),X={provide:F,deps:[E.aV],useFactory:function J(l){return()=>l.scrollStrategies.reposition()}},q=new t.OlP("MatSelectTrigger");class ee{constructor(O,e){this.source=O,this.value=e}}const te=(0,p.Kr)((0,p.sb)((0,p.Id)((0,p.FD)(class{constructor(l,O,e,i,s){this._elementRef=l,this._defaultErrorStateMatcher=O,this._parentForm=e,this._parentFormGroup=i,this.ngControl=s,this.stateChanges=new y.x}}))));let ie=(()=>{class l extends te{get focused(){return this._focused||this._panelOpen}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get required(){return this._required??this.ngControl?.control?.hasValidator(A.kI.required)??!1}set required(e){this._required=(0,D.Ig)(e),this.stateChanges.next()}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,D.Ig)(e)}get disableOptionCentering(){return this._disableOptionCentering}set disableOptionCentering(e){this._disableOptionCentering=(0,D.Ig)(e)}get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}get typeaheadDebounceInterval(){return this._typeaheadDebounceInterval}set typeaheadDebounceInterval(e){this._typeaheadDebounceInterval=(0,D.su)(e)}get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}constructor(e,i,s,r,_,T,v,ae,le,re,oe,ce,he,R){super(_,r,v,ae,re),this._viewportRuler=e,this._changeDetectorRef=i,this._ngZone=s,this._dir=T,this._parentFormField=le,this._liveAnnouncer=he,this._defaultOptions=R,this._panelOpen=!1,this._compareWith=(M,L)=>M===L,this._uid="mat-select-"+W++,this._triggerAriaLabelledBy=null,this._destroy=new y.x,this._onChange=()=>{},this._onTouched=()=>{},this._valueId="mat-select-value-"+W++,this._panelDoneAnimatingStream=new y.x,this._overlayPanelClass=this._defaultOptions?.overlayPanelClass||"",this._focused=!1,this.controlType="mat-select",this._multiple=!1,this._disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1,this.ariaLabel="",this.optionSelectionChanges=(0,n.P)(()=>{const M=this.options;return M?M.changes.pipe((0,o.O)(M),(0,u.w)(()=>(0,a.T)(...M.map(L=>L.onSelectionChange)))):this._ngZone.onStable.pipe((0,h.q)(1),(0,u.w)(()=>this.optionSelectionChanges))}),this.openedChange=new t.vpe,this._openedStream=this.openedChange.pipe((0,m.h)(M=>M),(0,C.U)(()=>{})),this._closedStream=this.openedChange.pipe((0,m.h)(M=>!M),(0,C.U)(()=>{})),this.selectionChange=new t.vpe,this.valueChange=new t.vpe,this._trackedModal=null,this.ngControl&&(this.ngControl.valueAccessor=this),null!=R?.typeaheadDebounceInterval&&(this._typeaheadDebounceInterval=R.typeaheadDebounceInterval),this._scrollStrategyFactory=ce,this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=parseInt(oe)||0,this.id=this.id}ngOnInit(){this._selectionModel=new V.Ov(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe((0,b.x)(),(0,g.R)(this._destroy)).subscribe(()=>this._panelDoneAnimating(this.panelOpen))}ngAfterContentInit(){this._initKeyManager(),this._selectionModel.changed.pipe((0,g.R)(this._destroy)).subscribe(e=>{e.added.forEach(i=>i.select()),e.removed.forEach(i=>i.deselect())}),this.options.changes.pipe((0,o.O)(null),(0,g.R)(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){const e=this._getTriggerAriaLabelledby(),i=this.ngControl;if(e!==this._triggerAriaLabelledBy){const s=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?s.setAttribute("aria-labelledby",e):s.removeAttribute("aria-labelledby")}i&&(this._previousControl!==i.control&&(void 0!==this._previousControl&&null!==i.disabled&&i.disabled!==this.disabled&&(this.disabled=i.disabled),this._previousControl=i.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}ngOnDestroy(){this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._applyModalPanelOwnership(),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck())}_applyModalPanelOwnership(){const e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;const i=`${this.id}-panel`;this._trackedModal&&(0,k.iD)(this._trackedModal,"aria-owns",i),(0,k.Zf)(e,"aria-owns",i),this._trackedModal=e}_clearFromModal(){this._trackedModal&&((0,k.iD)(this._trackedModal,"aria-owns",`${this.id}-panel`),this._trackedModal=null)}close(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){const e=this._selectionModel.selected.map(i=>i.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}_isRtl(){return!!this._dir&&"rtl"===this._dir.value}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){const i=e.keyCode,s=i===f.JH||i===f.LH||i===f.oh||i===f.SV,r=i===f.K5||i===f.L_,_=this._keyManager;if(!_.isTyping()&&r&&!(0,f.Vb)(e)||(this.multiple||e.altKey)&&s)e.preventDefault(),this.open();else if(!this.multiple){const T=this.selected;_.onKeydown(e);const v=this.selected;v&&T!==v&&this._liveAnnouncer.announce(v.viewValue,1e4)}}_handleOpenKeydown(e){const i=this._keyManager,s=e.keyCode,r=s===f.JH||s===f.LH,_=i.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(_||s!==f.K5&&s!==f.L_||!i.activeItem||(0,f.Vb)(e))if(!_&&this._multiple&&s===f.A&&e.ctrlKey){e.preventDefault();const T=this.options.some(v=>!v.disabled&&!v.selected);this.options.forEach(v=>{v.disabled||(T?v.select():v.deselect())})}else{const T=i.activeItemIndex;i.onKeydown(e),this._multiple&&r&&e.shiftKey&&i.activeItem&&i.activeItemIndex!==T&&i.activeItem._selectViaInteraction()}else e.preventDefault(),i.activeItem._selectViaInteraction()}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}_onAttached(){this._overlayDir.positionChange.pipe((0,h.q)(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()})}_getPanelTheme(){return this._parentFormField?`mat-${this._parentFormField.color}`:""}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(i=>i.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(i=>this._selectOptionByValue(i)),this._sortValues();else{const i=this._selectOptionByValue(e);i?this._keyManager.updateActiveItem(i):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){const i=this.options.find(s=>{if(this._selectionModel.isSelected(s))return!1;try{return null!=s.value&&this._compareWith(s.value,e)}catch{return!1}});return i&&this._selectionModel.select(i),i}_assignValue(e){return!!(e!==this._value||this._multiple&&Array.isArray(e))&&(this.options&&this._setSelectionByValue(e),this._value=e,!0)}_skipPredicate(e){return e.disabled}_initKeyManager(){this._keyManager=new k.s1(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){const e=(0,a.T)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe((0,g.R)(e)).subscribe(i=>{this._onSelect(i.source,i.isUserInput),i.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),(0,a.T)(...this.options.map(i=>i._stateChanges)).pipe((0,g.R)(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,i){const s=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(s!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),i&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),i&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),s!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){const e=this.options.toArray();this._selectionModel.sort((i,s)=>this.sortComparator?this.sortComparator(i,s,e):e.indexOf(i)-e.indexOf(s)),this.stateChanges.next()}}_propagateChanges(e){let i=null;i=this.multiple?this.selected.map(s=>s.value):this.selected?this.selected.value:e,this._value=i,this.valueChange.emit(i),this._onChange(i),this.selectionChange.emit(this._getChangeEvent(i)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let i=0;i<this.options.length;i++)if(!this.options.get(i).disabled){e=i;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();return this.ariaLabelledby?(e?e+" ":"")+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;const e=this._parentFormField?.getLabelId();let i=(e?e+" ":"")+this._valueId;return this.ariaLabelledby&&(i+=" "+this.ariaLabelledby),i}_panelDoneAnimating(e){this.openedChange.emit(e)}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focus(),this.open()}get shouldLabelFloat(){return this._panelOpen||!this.empty||this._focused&&!!this._placeholder}static#e=this.\u0275fac=function(i){return new(i||l)(t.Y36(P.rL),t.Y36(t.sBO),t.Y36(t.R0b),t.Y36(p.rD),t.Y36(t.SBq),t.Y36(B.Is,8),t.Y36(A.F,8),t.Y36(A.sg,8),t.Y36(x.G_,8),t.Y36(A.a5,10),t.$8M("tabindex"),t.Y36(F),t.Y36(k.Kd),t.Y36($,8))};static#t=this.\u0275dir=t.lG2({type:l,viewQuery:function(i,s){if(1&i&&(t.Gf(w,5),t.Gf(U,5),t.Gf(E.pI,5)),2&i){let r;t.iGM(r=t.CRH())&&(s.trigger=r.first),t.iGM(r=t.CRH())&&(s.panel=r.first),t.iGM(r=t.CRH())&&(s._overlayDir=r.first)}},inputs:{userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",placeholder:"placeholder",required:"required",multiple:"multiple",disableOptionCentering:"disableOptionCentering",compareWith:"compareWith",value:"value",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:"typeaheadDebounceInterval",sortComparator:"sortComparator",id:"id"},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},features:[t.qOj,t.TTD]})}return l})(),se=(()=>{class l extends ie{constructor(){super(...arguments),this.panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto",this._positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}],this._hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1,this._skipPredicate=e=>!this.panelOpen&&e.disabled}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}ngOnInit(){super.ngOnInit(),this._viewportRuler.change().pipe((0,g.R)(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}open(){this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),super.open(),this.stateChanges.next()}close(){super.close(),this.stateChanges.next()}_scrollOptionIntoView(e){const i=this.options.toArray()[e];if(i){const s=this.panel.nativeElement,r=(0,p.CB)(e,this.options,this.optionGroups),_=i._getHostElement();s.scrollTop=0===e&&1===r?0:(0,p.jH)(_.offsetTop,_.offsetHeight,s.scrollTop,s.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new ee(this,e)}_getOverlayWidth(e){return"auto"===this.panelWidth?(e instanceof E.xu?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:null===this.panelWidth?"":this.panelWidth}get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=(0,D.Ig)(e),this._syncParentProperties()}_syncParentProperties(){if(this.options)for(const e of this.options)e._changeDetectorRef.markForCheck()}static#e=this.\u0275fac=function(){let e;return function(s){return(e||(e=t.n5z(l)))(s||l)}}();static#t=this.\u0275cmp=t.Xpm({type:l,selectors:[["mat-select"]],contentQueries:function(i,s,r){if(1&i&&(t.Suo(r,q,5),t.Suo(r,p.ey,5),t.Suo(r,p.K7,5)),2&i){let _;t.iGM(_=t.CRH())&&(s.customTrigger=_.first),t.iGM(_=t.CRH())&&(s.options=_),t.iGM(_=t.CRH())&&(s.optionGroups=_)}},hostAttrs:["role","combobox","aria-autocomplete","none","aria-haspopup","listbox","ngSkipHydration","",1,"mat-mdc-select"],hostVars:19,hostBindings:function(i,s){1&i&&t.NdJ("keydown",function(_){return s._handleKeydown(_)})("focus",function(){return s._onFocus()})("blur",function(){return s._onBlur()}),2&i&&(t.uIk("id",s.id)("tabindex",s.tabIndex)("aria-controls",s.panelOpen?s.id+"-panel":null)("aria-expanded",s.panelOpen)("aria-label",s.ariaLabel||null)("aria-required",s.required.toString())("aria-disabled",s.disabled.toString())("aria-invalid",s.errorState)("aria-activedescendant",s._getAriaActiveDescendant()),t.ekj("mat-mdc-select-disabled",s.disabled)("mat-mdc-select-invalid",s.errorState)("mat-mdc-select-required",s.required)("mat-mdc-select-empty",s.empty)("mat-mdc-select-multiple",s.multiple))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex",panelWidth:"panelWidth",hideSingleSelectionIndicator:"hideSingleSelectionIndicator"},exportAs:["matSelect"],features:[t._Bn([{provide:x.Eo,useExisting:l},{provide:p.HF,useExisting:l}]),t.qOj],ngContentSelectors:N,decls:11,vars:10,consts:[["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],[1,"mat-mdc-select-value",3,"ngSwitch"],["class","mat-mdc-select-placeholder mat-mdc-select-min-line",4,"ngSwitchCase"],["class","mat-mdc-select-value-text",3,"ngSwitch",4,"ngSwitchCase"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayLockPosition","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","backdropClick","attach","detach"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text",3,"ngSwitch"],["class","mat-mdc-select-min-line",4,"ngSwitchDefault"],[4,"ngSwitchCase"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",3,"ngClass","keydown"],["panel",""]],template:function(i,s){if(1&i&&(t.F$t(j),t.TgZ(0,"div",0,1),t.NdJ("click",function(){return s.toggle()}),t.TgZ(3,"div",2),t.YNc(4,H,2,1,"span",3),t.YNc(5,z,3,2,"span",4),t.qZA(),t.TgZ(6,"div",5)(7,"div",6),t.O4$(),t.TgZ(8,"svg",7),t._UZ(9,"path",8),t.qZA()()()(),t.YNc(10,Z,3,9,"ng-template",9),t.NdJ("backdropClick",function(){return s.close()})("attach",function(){return s._onAttached()})("detach",function(){return s.close()})),2&i){const r=t.MAs(1);t.xp6(3),t.Q6J("ngSwitch",s.empty),t.uIk("id",s._valueId),t.xp6(1),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1),t.xp6(5),t.Q6J("cdkConnectedOverlayPanelClass",s._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",s._scrollStrategy)("cdkConnectedOverlayOrigin",s._preferredOverlayOrigin||r)("cdkConnectedOverlayOpen",s.panelOpen)("cdkConnectedOverlayPositions",s._positions)("cdkConnectedOverlayWidth",s._overlayWidth)}},dependencies:[S.mk,S.RF,S.n9,S.ED,E.pI,E.xu],styles:['.mat-mdc-select{display:inline-block;width:100%;outline:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-select-enabled-trigger-text-color);font-family:var(--mat-select-trigger-text-font);line-height:var(--mat-select-trigger-text-line-height);font-size:var(--mat-select-trigger-text-size);font-weight:var(--mat-select-trigger-text-weight);letter-spacing:var(--mat-select-trigger-text-tracking)}.mat-mdc-select-disabled{color:var(--mat-select-disabled-trigger-text-color)}.mat-mdc-select-trigger{display:inline-flex;align-items:center;cursor:pointer;position:relative;box-sizing:border-box;width:100%}.mat-mdc-select-disabled .mat-mdc-select-trigger{-webkit-user-select:none;user-select:none;cursor:default}.mat-mdc-select-value{width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-mdc-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-mdc-select-arrow-wrapper{height:24px;flex-shrink:0;display:inline-flex;align-items:center}.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper{transform:translateY(-8px)}.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper{transform:none}.mat-mdc-select-arrow{width:10px;height:5px;position:relative;color:var(--mat-select-enabled-arrow-color)}.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow{color:var(--mat-select-focused-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow{color:var(--mat-select-invalid-arrow-color)}.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow{color:var(--mat-select-disabled-arrow-color)}.mat-mdc-select-arrow svg{fill:currentColor;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:CanvasText}.mat-mdc-select-disabled .cdk-high-contrast-active .mat-mdc-select-arrow svg{fill:GrayText}div.mat-mdc-select-panel{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);width:100%;max-height:275px;outline:0;overflow:auto;padding:8px 0;border-radius:4px;box-sizing:border-box;position:static;background-color:var(--mat-select-panel-background-color)}.cdk-high-contrast-active div.mat-mdc-select-panel{outline:solid 1px}.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel{border-top-left-radius:0;border-top-right-radius:0;transform-origin:top center}.mat-mdc-select-panel-above div.mat-mdc-select-panel{border-bottom-left-radius:0;border-bottom-right-radius:0;transform-origin:bottom center}.mat-mdc-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);color:var(--mat-select-placeholder-text-color)}._mat-animation-noopable .mat-mdc-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-mdc-select-placeholder{color:rgba(0,0,0,0);-webkit-text-fill-color:rgba(0,0,0,0);transition:none;display:block}.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper{cursor:pointer}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label{max-width:calc(100% - 18px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 24px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch{max-width:calc(100% - 24px)}.mat-mdc-select-min-line:empty::before{content:" ";white-space:pre;width:1px;display:inline-block;visibility:hidden}'],encapsulation:2,data:{animation:[Q.transformPanel]},changeDetection:0})}return l})(),ne=(()=>{class l{static#e=this.\u0275fac=function(i){return new(i||l)};static#t=this.\u0275mod=t.oAB({type:l});static#i=this.\u0275inj=t.cJS({providers:[X],imports:[S.ez,E.U8,p.Ng,p.BQ,P.ZD,x.lN,p.Ng,p.BQ]})}return l})()}}]);