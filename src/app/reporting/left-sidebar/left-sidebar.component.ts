import { Component, OnInit } from '@angular/core';
import {TreenodeserviceService } from '../treenodeservice.service';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
    
    files2: TreeNode[];
    
    constructor(private nodeService: TreenodeserviceService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.files2 = files);
        this.expandAll();
    }
    
    expandAll(){
        this.files2.forEach( node => {
            this.expandRecursive(node, true);
        } );
    }

    collapseAll(){
        this.files2.forEach( node => {
            this.expandRecursive(node, false);
        } );
    }
    
    private expandRecursive(node:TreeNode, isExpand:boolean){
        node.expanded = isExpand;
        if (node.children){
            node.children.forEach( childNode => {
                this.expandRecursive(childNode, isExpand);
            } );
        }
    }
}
