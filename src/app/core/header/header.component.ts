import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [TieredMenuModule, CommonModule]
})
export class HeaderComponent {
    items: MenuItem[] | undefined;

      constructor(){ }
      
      ngOnInit(): void {
        this.items = [
          {
              label: 'Campeonatos',
              icon: 'pi pi-file',
              items: [
                  {
                      label: 'Campeonatos',
                      icon: 'pi pi-plus',
                      items: [
                          {
                              label: '2024',
                              icon: 'pi pi-file'
                          },
                          {
                              label: '2025',
                              icon: 'pi pi-image'
                          },
                          {
                              label: '2026',
                              icon: 'pi pi-video'
                          }
                      ]
                  },
                  {
                      label: 'Open',
                      icon: 'pi pi-folder-open'
                  },
                  {
                      label: 'Print',
                      icon: 'pi pi-print'
                  }
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-file-edit',
              items: [
                  {
                      label: 'Copy',
                      icon: 'pi pi-copy'
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-times'
                  }
              ]
          },
          {
              label: 'Search',
              icon: 'pi pi-search'
          },
          {
              separator: true
          },
          {
              label: 'Login / Cadastro',
              icon: 'pi pi-share-alt',
              items: [
                  {
                      label: 'Login',
                      icon: 'pi pi-slack'
                  },
                  {
                      label: 'Cadastro',
                      icon: 'pi pi-whatsapp'
                  }
              ]
          }
      ]
      }


}
