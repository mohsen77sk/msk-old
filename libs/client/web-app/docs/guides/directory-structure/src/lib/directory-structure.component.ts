import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface DirNode {
  name: string;
  expandable?: boolean;
  level?: number;
  last?: boolean;
  children?: DirNode[];
}

interface FlatDirNode {
  name: string;
  expandable: boolean;
  level: number;
  last?: boolean;
}

interface TreeDir {
  dataSource: MatTreeFlatDataSource<DirNode, FlatDirNode, FlatDirNode>;
  treeControl: FlatTreeControl<FlatDirNode, FlatDirNode>;
}

@Component({
  selector: 'msk-docs-directory-structure',
  templateUrl: './directory-structure.component.html',
  styleUrls: ['./directory-structure.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DirectoryStructureComponent implements OnInit {
  generalDir: DirNode[];
  generalTree!: TreeDir;

  /**
   * Constructor
   */
  constructor() {
    // General dir
    this.generalDir = [
      {
        name: 'src/',
        children: [
          {
            name: 'apps/',
            children: [
              {
                name: 'web-api',
                children: [],
              },
              {
                name: 'web-app',
                children: [],
              },
            ],
          },
          {
            name: 'libs/',
            children: [
              {
                name: 'api/',
                children: [
                  {
                    name: 'web-api',
                  },
                ],
              },
              {
                name: 'client/',
                children: [
                  {
                    name: 'shared/',
                    children: [
                      { name: 'animations' },
                      { name: 'app-config' },
                      { name: 'assets' },
                      { name: 'directives' },
                      { name: 'pipes' },
                      { name: 'services' },
                      { name: 'styles' },
                      { name: 'tailwind-preset' },
                      { name: 'ui' },
                      { name: 'utils' },
                      { name: 'validators' },
                    ],
                  },
                  {
                    name: 'web-app/',
                    children: [
                      { name: 'admin' },
                      { name: 'assets' },
                      { name: 'auth' },
                      { name: 'docs' },
                      { name: 'error' },
                      { name: 'landing' },
                      { name: 'shell' },
                    ],
                  },
                ],
              },
              {
                name: 'shared/',
                children: [
                  {
                    name: 'utils (optional dir, usually validation logic or shared utilities)',
                  },
                ],
              },
            ],
          },
        ],
      },
    ];
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.generalTree = this.createTree(this.generalDir);

    // Add 'last:true' to the last child
    this.generalTree.treeControl.dataNodes.forEach(
      (node: FlatDirNode, index, nodes) => {
        nodes[index].last = false;
        if (nodes[index + 1]) {
          nodes[index].last = nodes[index + 1].level === node.level - 1;
        } else {
          nodes[index].last = true;
        }
      },
    );

    // Expand the first item
    this.generalTree.treeControl.expand(
      this.generalTree.treeControl.dataNodes[0],
    );
    this.generalTree.treeControl.expand(
      this.generalTree.treeControl.dataNodes[1],
    );
    this.generalTree.treeControl.expand(
      this.generalTree.treeControl.dataNodes[4],
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Has child
   *
   * @param _
   * @param node
   */
  hasChild(_: number, node: DirNode): boolean | undefined {
    return node.expandable;
  }

  /**
   * Create a new tree
   */
  createTree(data: DirNode[]): TreeDir {
    // Create tree control and data source
    const treeControl = new FlatTreeControl<FlatDirNode>(
      (node) => node.level,
      (node) => node.expandable,
    );
    const dataSource = new MatTreeFlatDataSource(
      treeControl,
      new MatTreeFlattener(
        (node: DirNode, level: number) => ({
          expandable: !!node.children && node.children.length > 0,
          name: node.name,
          level: level,
        }),
        (node) => node.level,
        (node) => node.expandable,
        (node) => node.children,
      ),
    );

    // Set the data
    dataSource.data = data;

    return {
      treeControl,
      dataSource,
    };
  }
}
