import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StimulsoftDesignerModule } from 'stimulsoft-designer-angular';
import { StimulsoftViewerModule } from 'stimulsoft-viewer-angular';

@Component({
    selector: 'lib-stimulsoft',
    standalone: true,
    imports: [CommonModule, StimulsoftViewerModule, StimulsoftDesignerModule],
    templateUrl: './stimulsoft.component.html',
    styles: ``,
})
export class StimulsoftComponent {
    @Input() viewerUrl: string;
    @Input() designerUrl: string;
    
    showViewer = false;
    isReady = false;
    private fileName: any;
    properties: any;
    
    @ViewChild('designer') designer: ElementRef;
    
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.queryParamMap.subscribe((params) => {
            this.fileName = params.get('filename');
            if (this.fileName) {
                this.properties = { reportName: this.fileName };
                this.showViewer = true;
                this.isReady = true;
            }
        });

        if (!this.showViewer) {
            this.isReady = true;
        }
    }
}
