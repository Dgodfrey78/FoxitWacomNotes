<webpdf>
    <toolbar name="toolbar" class="fv__ui-toolbar-scrollable">
        <div class="fv__ui-tab-nav" name="toolbar-tabs">
            <gtab name="home-tab" group="toolbar-tab" body="fv--home-tab-paddle" text="toolbar.tabs.home.title" active @portfolio.deactive></gtab>
            <gtab name="comment-tab" group="toolbar-tab" body="fv--comment-tab-paddle" text="toolbar.tabs.comment.title" @portfolio.unsupport></gtab>
            <gtab name="view-tab" group="toolbar-tab" body="fv--view-tab-paddle" text="toolbar.tabs.view.title"></gtab>
            <gtab name="edit-tab" group="toolbar-tab" body="fv--edit-tab-paddle" text="toolbar.tabs.edit.title" @hide-on-sr @device="desktop" @collab-unsupported @portfolio.unsupport></gtab>
            <gtab name="form-tab" group="toolbar-tab" body="fv--form-tab-paddle" text="toolbar.tabs.form.title" @hide-on-sr @device="desktop" @collab-unsupported @portfolio.unsupport></gtab>
            <gtab name="protect-tab" group="toolbar-tab" body="fv--protect-tab-paddle" text="toolbar.tabs.protect.title" @hide-on-sr @collab-unsupported @portfolio.unsupport></gtab>
            <gtab name="portfolio-tab" group="toolbar-tab" body="fv--portfolio-tab-body" text="toolbar.tabs.portfolio.title" @collab-unsupported @hide-on-sr @portfolio.show @portfolio.active></gtab>
        </div>
        <div class="fv__ui-toolbar-tab-bodies" name="toolbar-tab-bodies">
            <paddle name="fv--view-tab-paddle" @portfolio.unsupport>
                <group-list name="view-toolbar-group-list">
                    <group name="home-tab-group-hand" retain-count="3">
                        <hand-button></hand-button>
                        <selection-dropdown></selection-dropdown>
                        <zoom-dropdown></zoom-dropdown>
                    </group>
                    <group name="view-tab-group-assistants" @hide-on-sr>
                        <marquee-tool-button></marquee-tool-button>
                        <loupe-tool-button></loupe-tool-button>
                    </group>
                    <group name="view-tab-group-read-aloud" @hide-on-sr @require-modules="read-aloud" retain-count="4">
                        <read-aloud:read-aloud-dropdown></read-aloud:read-aloud-dropdown>
                        <read-aloud:rate-regulator></read-aloud:rate-regulator>
                        <read-aloud:volume-regulator></read-aloud:volume-regulator>
                        <read-aloud:pause-resume-read-aloud></read-aloud:pause-resume-read-aloud>
                    </group>
                </group-list>
            </paddle>
            <paddle exclude-devices="tablet" name="fv--home-tab-paddle" @portfolio.unsupport>
                <group-list name="home-toolbar-group-list">
                    <group name="home-tab-group-hand" retain-count="3">
                        <hand-button></hand-button>
                        <selection-dropdown></selection-dropdown>
                        <snapshot-button @hide-on-sr></snapshot-button>
                    </group>
                    <group name="home-tab-group-change-color" @hide-on-sr>
                        <change-color-dropdown></change-color-dropdown>
                    </group>
                    <group name="home-tab-group-io" retain-count="1" shrink-title="toolbar.more.document.title">
                        <open-file-dropdown></open-file-dropdown>
                        <download-file-button></download-file-button>
                        <print:print-button></print:print-button>
                    </group>
                    <group name="home-tab-group-nav" retain-count="3">
                        <goto-first-page-button></goto-first-page-button>
                        <goto-prev-page-button></goto-prev-page-button>
                        <goto-page-input></goto-page-input>
                        <goto-next-page-button></goto-next-page-button>
                        <goto-last-page-button></goto-last-page-button>
                    </group>
                    <group name="home-tab-group-zoom">
                        <zoom-out-button></zoom-out-button>
                        <zoom-in-button></zoom-in-button>
                        <editable-zoom-dropdown></editable-zoom-dropdown>
                    </group>
                    <group name="home-tab-group-page" retain-count="1">
                        <single-page-button></single-page-button>
                        <continuous-page-button></continuous-page-button>
                        <facing-page-button></facing-page-button>
                        <continuous-facing-page-button></continuous-facing-page-button>
                        <h-continuous:h-continuous-button></h-continuous:h-continuous-button>
                        <!--<h-single:h-single-button></h-single:h-single-button>-->
                        <!--<h-facing:h-facing-button></h-facing:h-facing-button>-->
                    </group>
                    <group name="file-property" @require-modules="fpmodule">
                        <fpmodule:file-property-button></fpmodule:file-property-button>
                    </group>
                </group-list>
            </paddle>
            <paddle exclude-devices="tablet" name="fv--comment-tab-paddle" @portfolio.unsupport>
                <group-list name="comment-toolbar-group-list">
                    <group name="comment-tab-group-hand" retain-count="3">
                        <hand-button></hand-button>
                        <selection-dropdown></selection-dropdown>
                        <zoom-dropdown></zoom-dropdown>
                    </group>
                    <group name="comment-tab-group-note" retain-count="3">
                        <create-note-button></create-note-button>                        
                    </group>
                    <group name="comment-tab-group-mark">
                        <create-text-highlight-button></create-text-highlight-button>
                        <create-strikeout-button></create-strikeout-button>
                        <create-underline-button></create-underline-button>
                        <create-squiggly-button></create-squiggly-button>
                        <create-replace-button></create-replace-button>
                        <create-caret-button></create-caret-button>
                    </group>
                    <group name="comment-tab-group-text">                      
                        <create-typewriter-button></create-typewriter-button>
                        <create-callout-button></create-callout-button>
                        <create-textbox-button></create-textbox-button>
                    </group>
                    <group name="comment-tab-group-drawing" retain-count="2">
                        <create-drawings-dropdown></create-drawings-dropdown>                       
                        <create-area-highlight-button></create-area-highlight-button>
                    </group>
                    <group name="comment-tab-group-pencil" retain-count="2">
                        <create-pencil-button></create-pencil-button>
                        <eraser-button></eraser-button>
                    </group>
                    <group name="comment-tab-group-stamp">
                        <stamp-dropdown></stamp-dropdown>
                    </group>
                    <group name="comment-tab-group-measurement">
                        <create-measure-dropdown></create-measure-dropdown>
                    </group>
                    <group name="comment-tab-group-media" @grp-more-hide-on-sr>
                        <create-attachment-button></create-attachment-button>
                        <create-image-button @hide-on-sr  @collab-unsupported></create-image-button>
                        <create-link-button @hide-on-sr  @collab-unsupported></create-link-button>
                        <multi-media:multi-media-button @async @hide-on-sr  @collab-unsupported></multi-media:multi-media-button>
                    </group>
                    <group name="comment-tab-group-inksign" visible='false'></group>                    
                    <group name="comment-tab-group-snap" @display-snap>
                        <snap-end-point-btn tooltip-title="toolbar.snap.end-point" name="fv--snap-end-point-btn">toolbar.snap.end-point</snap-end-point-btn>
                        <snap-mid-point-btn tooltip-title="toolbar.snap.mid-point" name="fv--snap-mid-point-btn">toolbar.snap.mid-point</snap-mid-point-btn>
                        <snap-nearest-point-btn tooltip-title="toolbar.snap.nearest-point" name="fv--snap-nearest-point-btn">toolbar.snap.nearest-point</snap-nearest-point-btn>
                        <snap-intersection-point-btn tooltip-title="toolbar.snap.intersection-point" name="fv--snap-intersection-point-btn">toolbar.snap.intesection-point</snap-intersection-point-btn>
                    </group>
                    <group name="comment-tab-group-other" visible='false'></group>
                </group-list>
            </paddle>
            <paddle exclude-devices="tablet" name="fv--edit-tab-paddle" @device="desktop" @portfolio.unsupport>
                <group-list name="edit-toolbar-group-list">
                    <group name="edit-tab-group-hand" retain-count="3">
                        <hand-button></hand-button>
                        <selection-dropdown></selection-dropdown>
                        <zoom-dropdown></zoom-dropdown>
                    </group>
                    <group name="edit-tab-group-mode" retain-count="3">
                        <edit-pageobjects:edit-all-objects-button @async></edit-pageobjects:edit-all-objects-button>
                        <add-image-button></add-image-button>
                        <edit-pageobjects:path-objects-dropdown @async></edit-pageobjects:path-objects-dropdown>
                        <!--<edit-image-button></edit-image-button>-->
                        <edit-text-object:add-text-button  @async></edit-text-object:add-text-button>
                    </group>
                    <group name="edit-tab-group-font" retain-count="5" @require-modules="edit-text-object">
                        <edit-text-object:text-bold-style-button></edit-text-object:text-bold-style-button>
                        <edit-text-object:text-italic-style-button></edit-text-object:text-italic-style-button>
                        <edit-text-object:font-color-picker></edit-text-object:font-color-picker>
                        <edit-text-object:font-style-dropdown></edit-text-object:font-style-dropdown>
                    </group>
                    <group name="edit-tab-group-layer" visible="false"></group>
                    <group name="edit-tab-group-redact" visible="false"></group>
                </group-list>
            </paddle>
            <paddle exclude-devices="tablet" name="fv--form-tab-paddle" @device="desktop" @portfolio.unsupport>
                <group-list name="form-toolbar-group-list">
                    <group name="form-tab-group-hand" retain-count="3">
                        <hand-button></hand-button>
                        <selection-dropdown></selection-dropdown>
                        <zoom-dropdown></zoom-dropdown>
                    </group>
                    <group name="form-tab-group-assistants" @require-modules.oneOf="recognition-form,form-designer">
                        <recognition-form:recognition-form-button></recognition-form:recognition-form-button>
                        <form-designer:assistant-button name="fv--form-designer-assistant"></form-designer:assistant-button>
                    </group>
                    <group name="form-tab-group-fields" retain-count="2" @require-modules="form-designer">
                        <form-designer:create-push-button></form-designer:create-push-button>
                        <form-designer:create-check-box></form-designer:create-check-box>
                        <form-designer:create-radio-button></form-designer:create-radio-button>
                        <form-designer:create-combo-box></form-designer:create-combo-box>
                        <form-designer:create-list-box></form-designer:create-list-box>            
                        <form-designer:create-text></form-designer:create-text>
                        <form-designer:create-sign></form-designer:create-sign>
                        <form-designer:create-image></form-designer:create-image>
                        <form-designer:create-date></form-designer:create-date>
                    </group>
                    <group name="form-tab-group-fields" retain-count="2" @require-modules.oneOf="form-designer,xfa-form-module,page-template">
                        <page-template:page-template-button @async></page-template:page-template-button>
                        <xfa-form-module:xfa-form-button @async></xfa-form-module:xfa-form-button>
                        <form-designer:showCO @async></form-designer:showCO>
                        <form-designer:add-tooltip @async></form-designer:add-tooltip>
                        <form-designer:highlight-fields-checkbox @async></form-designer:highlight-fields-checkbox>
                    </group>
                    <group name="form-tab-group-import-export" retain-count="3" @require-modules.oneOf="form-designer,import-form-module,export-form-module,form-to-sheet-module">
                        <form-designer:reset-form @async></form-designer:reset-form>
                        <form-to-sheet-module:form-to-sheet-dropdown name="form-to-sheet" @async></form-to-sheet-module:form-to-sheet-dropdown>
                        <import-form-module:import-form-button @async></import-form-module:import-form-button>
                        <export-form-module:export-form-dropdown @async name="fv--export-form-dropdown"></export-form-module:export-form-dropdown>
                        <form-designer:keep-tool-selected-checkbox @async></form-designer:keep-tool-selected-checkbox>
                    </group>
                </group-list>
            </paddle>
            <paddle exclude-devices="tablet" name="fv--protect-tab-paddle" @portfolio.unsupport>
                <group-list name="protect-toolbar-group-list">
                    <group name="protect-tab-group-hand" retain-count="4">
                        <hand-button></hand-button>
                        <selection-dropdown></selection-dropdown>
                        <zoom-dropdown></zoom-dropdown>
                    </group>
                    <group name="protect-tab-group-sign" retain-count="4">
                        <ink-sign-dropdown name="fv--ink-sign-dropdown"></ink-sign-dropdown>
                    </group>
                    <group name="password-protect-group" retain-count="2" @require-modules="password-protect">
                        <password-protect:password-protect-button></password-protect:password-protect-button>
                        <password-protect:remove-protect-button></password-protect:remove-protect-button>
                    </group>
                    <group name="redaction" functional-module="redaction" @license-validation @require-modules="redaction">
                        <redaction:create-redactions-dropdown></redaction:create-redactions-dropdown>
                        <redaction:apply-redactions-button></redaction:apply-redactions-button>
                        <redaction:redaction-search-button></redaction:redaction-search-button>
                    </group>
                </group-list>
            </paddle>
            <paddle name="fv--portfolio-tab-body" @portfolio.support>
                <group-list name="portfolio-toolbar-group-list" >
                    <group name="portfolio-tab-group-layout-buttons" retain-count="5">
                        <portfolio-block-layout-button></portfolio-block-layout-button>
                        <portfolio-details-layout-button></portfolio-details-layout-button>
                        <portfolio-cover-sheet-layout-button></portfolio-cover-sheet-layout-button>
                        <portfolio-preview-side-dropdown name="fv--portfolio-preview-side-dropdown" >
                            <portfolio-preview-right-side-button></portfolio-preview-right-side-button>
                            <portfolio-preview-bottom-side-button></portfolio-preview-bottom-side-button>
                            <portfolio-preview-off-button></portfolio-preview-off-button>
                        </portfolio-preview-side-dropdown>
                        <portfolio-default-layout-dropdown>
                            <portfolio-default-original-layout-button></portfolio-default-original-layout-button>
                            <portfolio-default-block-layout-button></portfolio-default-block-layout-button>
                            <portfolio-default-details-layout-button></portfolio-default-details-layout-button>
                            <portfolio-default-cover-sheet-layout-button></portfolio-default-cover-sheet-layout-button>
                        </portfolio-default-layout-dropdown>
                    </group>
                </group-list>
            </paddle>
        </div>
    </toolbar>
    <div class="fv__ui-body">
        <sidebar name="sidebar" @controller="sidebar:SidebarController" @portfolio-layout="cover">
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
            <thumbnail-sidebar-panel></thumbnail-sidebar-panel>
            <layer-sidebar-panel @hide-on-sr></layer-sidebar-panel>
            <search-sidebar-panel></search-sidebar-panel>
            <field-sidebar-panel @require-modules="form-designer" @display-on-device="desktop" @collab-unsupported></field-sidebar-panel>
            <attachment-sidebar-panel></attachment-sidebar-panel>
        </sidebar>
        <portfolio-container>
            <portfolio-sidebar @portfolio-layout="portfolio,details">
                <portfolio-sidebar-header>
                    <portfolio-path></portfolio-path>
                    <portfolio-toolbar>
                        <portfolio-extract-selected-item-button></portfolio-extract-selected-item-button>
                        <portfolio-show-node-properties-button></portfolio-show-node-properties-button>
                    </portfolio-toolbar>
                </portfolio-sidebar-header>
                <portfolio-node-container>
                    <div class="fv__ui-portfolio-node-tree" @controller="PortfolioNodeTreeController as tree">
                        <portfolio-details-header @portfolio-layout="details" @sync.columns="tree.columns"></portfolio-details-header>
                        <portfolio-node-list>
                            <portfolio-node 
                                @foreach.cached = "fileNode in tree.fileNodes track by handle"
                                @sync.display = "tree.display"
                                @sync.data = "fileNode"
                                @sync.columns="tree.columns"
                                @contextmenu="fv--portfolio-file-item-contextmenu"
                            ></portfolio-node>
                        </portfolio-node-list>
                    </div>
                </portfolio-node-container>
            </portfolio-sidebar>
            <div name="fv--portfolio-previewer-container" class="fv__ui-portfolio-previewer-container">
                <!-- previewers -->
                <distance:ruler-container name="pdf-viewer-container-with-ruler" @portfolio-cover-sheet>
                    <slot>
                        <viewer @zoom-on-pinch @zoom-on-doubletap @zoom-on-wheel @touch-to-scroll></viewer>
                    </slot>
                </distance:ruler-container>
                <portfolio-previewer-group @portfolio-layout="portfolio,details">
                    <portfolio-unsupported-previewer></portfolio-unsupported-previewer>
                    <portfolio-pdf-previewer></portfolio-pdf-previewer>
                    <portfolio-video-previewer></portfolio-video-previewer>
                    <portfolio-audio-previewer></portfolio-audio-previewer>
                    <portfolio-image-previewer></portfolio-image-previewer>
                    <portfolio-plain-text-previewer></portfolio-plain-text-previewer>
                </portfolio-previewer-group>
                <portfolio-loading-layer></portfolio-loading-layer>
            </div>
        </portfolio-container>
    </div>
    <template name="template-container">
        <create-stamp-dialog></create-stamp-dialog>
        <print:print-dialog></print:print-dialog>
        <page-template:page-template-dialog></page-template:page-template-dialog>
        <loupe-tool-dialog></loupe-tool-dialog>
        <create-ink-sign-dialog></create-ink-sign-dialog>
        <distance:measurement-popup></distance:measurement-popup>
        <fpmodule:file-property-dialog @async></fpmodule:file-property-dialog>
        <redaction:redaction-page-dialog @hide-on-sr @async></redaction:redaction-page-dialog>
        <!-- contextmenus -->
        <page-contextmenu></page-contextmenu>
        <default-annot-contextmenu></default-annot-contextmenu>
        <markup-contextmenu></markup-contextmenu>
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
        <measurement-contextmenu></measurement-contextmenu>
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
        <media-contextmenu></media-contextmenu>
        <sound-contextmenu></sound-contextmenu>
        <redact-contextmenu></redact-contextmenu>
        <edit-graphics:image-contextmenu @async></edit-graphics:image-contextmenu>
        <edit-pageobjects:path-contextmenu @async></edit-pageobjects:path-contextmenu>
        <field-signature-contextmenu name="fv--field-signature-contextmenu"></field-signature-contextmenu>
        <text-sel:text-selection-tooltip></text-sel:text-selection-tooltip>
        <freetext:freetext-tooltip></freetext:freetext-tooltip>
        <annottext name="fv--annottext-tooltip"></annottext>
        <!-- Field panel contentmenu -->
        <field-contextmenu></field-contextmenu>
        <comment-list:filter-dialog name="fv--commentlist-filter-comment-dialog"></comment-list:filter-dialog>
        <portfolio-node-properties-dialog></portfolio-node-properties-dialog>
        <portfolio-node-contextmenu name="fv--portfolio-file-item-contextmenu">
            <portfolio-extract-node-contextmenu-item name="fv--portfolio-extract-node-contextmenu-item"></portfolio-extract-node-contextmenu-item>
            <portfolio-show-selected-node-information-contextmenu-item name="fv--portfolio-show-selected-node-information-contextmenu-item"></portfolio-show-selected-node-information-contextmenu-item>
        </portfolio-node-contextmenu>
        <bookmark-contextmenu></bookmark-contextmenu>
        <signature:signed-property-dialog></signature:signed-property-dialog>
    </template>
</webpdf>
