<webpdf>
    <div class="fv__ui-mobile-header" name="fv--mobile-header">
        <div class="fv__ui-mobile-header-left" name="fv--mobile-header-left">
            <mobile:sidebar-toggler-button name="fv--mobile-sidebar-tottler-button"></mobile:sidebar-toggler-button>
        </div>
        <div class="fv__ui-mobile-header-main" name="fv--mobile-header-main">
            <dropdown name="tabs" class="fv__ui-mobile-tabs-dropdown" @controller="mobile:MobileDropdownTabController as mtab" @on.click="mtab.toggleTab()">
                <li @on.click="mtab.switchTab($component)" name="comment-tab-li">
                    <gtab name="comment-tab" active group="mobile-tab" body="comment-tab-body" text="toolbar.tabs.comment.title"></gtab>
                </li>
                <li @on.click="mtab.switchTab($component)" name="protect-tab-li" @hide-on-sr @collab-unsupported>
                    <gtab name="protect-tab" group="mobile-tab" body="protect-tab-body" text="toolbar.tabs.protect.title"></gtab>
                </li>
            </dropdown>
        </div>
        <div class="fv__ui-mobile-header-right" name="fv--mobile-header-right">
            <hand-button icon-class="fv__icon-mobile-topbar-hand"></hand-button>
            <change-color-dropdown @hide-on-sr></change-color-dropdown>
            <mobile:pageview-dropdown name="fv--mobile-pageview-dropdown" @selectable-dropdown="1">
                <single-page-button></single-page-button>
                <continuous-page-button></continuous-page-button>
                <!-- <facing-page-button></facing-page-button>
                <continuous-facing-page-button></continuous-facing-page-button> -->
                <h-continuous:h-continuous-button></h-continuous:h-continuous-button>
                <!--<h-single:h-single-button></h-single:h-single-button>-->
                <!--<h-facing:h-facing-button></h-facing:h-facing-button>-->
            </mobile:pageview-dropdown>
            <xbutton name="fv--mobile-topbar-search-button" icon-class="fv__icon-mobile-topbar-search" @controller="mobile:SearchToggleButtonController"></xbutton>
            <dropdown class="fv__ui-mobile-topbar-tools-dropdown fv__ui-dropdown-hide-text" name="fv--mobile-topbar-tools-dropdown" @cannotBeDisabled>
                <open-localfile-button @cannotBeDisabled></open-localfile-button>
                <open-fromurl-button @cannotBeDisabled></open-fromurl-button>
                <print:print-button></print:print-button>
                <download-file-button></download-file-button>
                <full-screen:toggle-full-screen-button name="fv--toggle-full-screen-button" @hide-on-device="ios"></full-screen:toggle-full-screen-button>
                <fpmodule:file-property-button name="fv--file-property-button"></fpmodule:file-property-button>
            </dropdown>
        </div>
    </div>
    <toolbar>
        <div class="fv__ui-mobile-tab-bodies" name="fv--mobile-toolbar-tabs">
            <div class="fv__ui-mobile-tab-body" name="comment-tab-body">
                <group-list shrink-size="-1">
                    <group>
                        <dropdown @selectable-dropdown="first" class="fv__ui-dropdown-hide-text">
                            <create-text-highlight-button></create-text-highlight-button>
                            <create-area-highlight-button></create-area-highlight-button>
                            <create-strikeout-button></create-strikeout-button>
                            <create-underline-button></create-underline-button>
                            <create-squiggly-button></create-squiggly-button>
                            <create-replace-button></create-replace-button>
                            <create-caret-button></create-caret-button>
                        </dropdown>
                        <dropdown @selectable-dropdown="first" class="fv__ui-dropdown-hide-text">
                            <create-textbox-button></create-textbox-button>
                            <create-typewriter-button></create-typewriter-button>
                            <create-callout-button></create-callout-button>
                        </dropdown>
                        <create-drawings-dropdown></create-drawings-dropdown>
                    </group>
                    <group>
                        <dropdown @selectable-dropdown="first" class="fv__ui-dropdown-hide-text">
                            <create-pencil-button></create-pencil-button>
                            <eraser-button></eraser-button>
                        </dropdown>
                        <stamp-dropdown align="client-center"></stamp-dropdown>
                        <dropdown name="fv-mobile-attachment-dropdown" @selectable-dropdown="first" class="fv__ui-dropdown-hide-text">
                            <create-note-button></create-note-button>
                            <create-attachment-button></create-attachment-button>
                            <create-image-button @hide-on-sr @collab-unsupported></create-image-button>
                            <create-link-button @hide-on-sr @collab-unsupported></create-link-button>
                        </dropdown>
                    </group>
                    <group name="fv--mobile-media-group" @hide-on-sr @collab-unsupported>
                        <multi-media:multi-media-button></multi-media:multi-media-button>
                    </group>
                    <group name="home-tab-group-form" @hide-on-sr class="fv__ui-form-group" @collab-unsupported>
                        <form-to-sheet-module:form-to-sheet-dropdown><form-to-sheet-module:form-to-sheet-dropdown/>
                        <import-form-module:import-form-button></import-form-module:import-form-button>
                        <export-form-module:export-form-dropdown></export-form-module:export-form-dropdown>
                    </group>
                </group-list>
            </div>
            <div class="fv__ui-mobile-tab-body" @hide-on-sr name="protect-tab-body">
                <group-list shrink-size="-1" name="protect-toolbar-group-list">
                    <group name="protect-tab-group-sign">
                        <ink-sign-dropdown name="fv--ink-sign-dropdown"></ink-sign-dropdown>
                    </group>
                    <group name="password-protect-group">
                        <password-protect:password-protect-button></password-protect:password-protect-button>
                        <password-protect:remove-protect-button></password-protect:remove-protect-button>
                    </group>
                    <group name="redaction" functional-module="redaction" @license-validation>
                        <redaction:create-redactions-dropdown></redaction:create-redactions-dropdown>
                        <redaction:apply-redactions-button></redaction:apply-redactions-button>
                        <redaction:redaction-search-button></redaction:redaction-search-button>
                    </group>
                </group-list>
            </div>
        </div>
    </toolbar>
    <div class="fv__ui-body">
        <sidebar name="sidebar" @controller="sidebar:SidebarController" width="0.64" @mobile:sidebar-toggler>
            <bookmark-sidebar-panel></bookmark-sidebar-panel>
            <commentlist-sidebar-panel>
                <slot for="header">
                    <comment-list:toggle-commentlist-group-button></comment-list:toggle-commentlist-group-button>
                    <dropdown separate="false" class="comment-list-dropdown" icon-class="fv__icon-toolbar-more">
                        <!-- <comment-list:expand-pages-button></comment-list:expand-pages-button>
                        <comment-list:collapse-pages-button></comment-list:collapse-pages-button> -->
                        <comment-list:show-comment-button></comment-list:show-comment-button>
                        <comment-list:hide-comment-button></comment-list:hide-comment-button>
                        <comment-list:import-comment-button></comment-list:import-comment-button>
                        <dropdown-item class="fv__ui-dropdown-container-item">
                            <comment-list:export-comment-dropdown></comment-list:export-comment-dropdown>
                        </dropdown-item>
                        <dropdown-item class="fv__ui-dropdown-container-item">
                            <comment-list:sort-comments-dropdown></comment-list:sort-comments-dropdown>
                        </dropdown-item>
                    </dropdown>
                </slot>
            </commentlist-sidebar-panel>
            <thumbnail-sidebar-panel @require-modules="thumbnail"></thumbnail-sidebar-panel>
            <layer-sidebar-panel @hide-on-sr></layer-sidebar-panel>
            <search-sidebar-panel></search-sidebar-panel>
            <!-- <field-sidebar-panel>
                <slot for="header">
                    <dropdown class="field-order-dropdown" icon-class="fv__icon-order" separate="false" @controller="field:FieldSidebarMenuController as fsmc">
                        <option-group>
                            <option-group-item @on.click="fsmc.setOrder('row')">sidebar.field.order.row</option-group-item>
                            <option-group-item @on.click="fsmc.setOrder('column')">sidebar.field.order.column</option-group-item>
                            <option-group-item @on.click="fsmc.setOrder('structure')">sidebar.field.order.structure</option-group-item>
                        </option-group>
                    </dropdown>
                    <dropdown class="field-orderaz-dropdown" icon-class="fv__icon-orderaz" separate="false" @controller="field:FieldSidebarMenuController as fsmc">
                        <option-group>
                            <option-group-item @on.click="fsmc.setOrder('alphabetic')">sidebar.field.order.alphabetic</option-group-item>
                            <option-group-item selected @on.click="fsmc.setOrder('tab')">sidebar.field.order.tab</option-group-item>
                        </option-group>
                    </dropdown>
                </slot>
            </field-sidebar-panel> -->
            <attachment-sidebar-panel></attachment-sidebar-panel>
        </sidebar>
        <viewer @zoom-on-pinch @zoom-on-doubletap @touch-to-scroll></viewer>
        <page-nav-button></page-nav-button>
    </div>
    <template name="template-container">
        <create-stamp-dialog></create-stamp-dialog>
        <print:print-dialog></print:print-dialog>
        <loupe-tool-dialog></loupe-tool-dialog>
        <create-ink-sign-dialog></create-ink-sign-dialog>
        <measurement-popup></measurement-popup>
        <fpmodule:file-property-dialog></fpmodule:file-property-dialog>
        <redaction:redaction-page-dialog @hide-on-sr></redaction:redaction-page-dialog>
        <!-- contextmenus -->
        <page-contextmenu></page-contextmenu>
        <measurement-contextmenu></measurement-contextmenu>
        <default-annot-contextmenu></default-annot-contextmenu>
        <markup-contextmenu name="fv--line-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--linearrow-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--linedimension-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polylinedimention-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polygondimension-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--circle-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--square-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polyline-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polygon-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--polygoncloud-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--ink-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--stamp-contextmenu"></markup-contextmenu>
        <markup-contextmenu name="fv--text-contextmenu"></markup-contextmenu>
        <caret-contextmenu name="fv--areahighlight-contextmenu"></caret-contextmenu>
        <caret-contextmenu name="fv--replace-contextmenu"></caret-contextmenu>
        <markup-contextmenu></markup-contextmenu>
        <caret-contextmenu name="fv--caret-contextmenu"></caret-contextmenu>
        <textmarkup-contextmenu name="fv--highlight-contextmenu"></textmarkup-contextmenu>
        <textmarkup-contextmenu name="fv--strikeout-contextmenu"></textmarkup-contextmenu>
        <textmarkup-contextmenu name="fv--underline-contextmenu"></textmarkup-contextmenu>
        <textmarkup-contextmenu name="fv--squiggly-contextmenu"></textmarkup-contextmenu>
        <freetext-contextmenu name="fv--typewriter-contextmenu"></freetext-contextmenu>
        <freetext-contextmenu name="fv--callout-contextmenu"></freetext-contextmenu>
        <freetext-contextmenu name="fv--textbox-contextmenu"></freetext-contextmenu>
        <action-annot-contextmenu name="fv--image-contextmenu"></action-annot-contextmenu>
        <action-annot-contextmenu name="fv--link-contextmenu"></action-annot-contextmenu>
        <comment-card-contextmenu></comment-card-contextmenu>
        <fileattachment-contextmenu></fileattachment-contextmenu>
        <media-contextmenu @hide-on-sr></media-contextmenu>
        <sound-contextmenu @hide-on-sr></sound-contextmenu>
        <redact-contextmenu></redact-contextmenu>
        <edit-graphics:image-contextmenu></edit-graphics:image-contextmenu>
        <edit-pageobjects:path-contextmenu></edit-pageobjects:path-contextmenu>
        <text-sel:text-selection-tooltip></text-sel:text-selection-tooltip>
        <freetext:freetext-tooltip></freetext:freetext-tooltip>
        <annottext name="fv--annottext-tooltip"></annottext>
        <!-- Field panel contentmenu -->
        <contextmenu name="fv--field-contextmenu" @controller="field:FieldSidebarMenuController">
            <contextmenu-item name="fv--contextmenu-item-properties">contextmenu.fieldPanel.properties</contextmenu-item>
            <contextmenu-item name="fv--contextmenu-item-rename">contextmenu.fieldPanel.rename</contextmenu-item>
            <contextmenu-item name="fv--contextmenu-item-delete">contextmenu.fieldPanel.delete</contextmenu-item>
        </contextmenu>
        <comment-list:filter-dialog name="fv--commentlist-filter-comment-dialog"></comment-list:filter-dialog>
        <signature:signed-property-dialog></signature:signed-property-dialog>
    </template>
</webpdf>