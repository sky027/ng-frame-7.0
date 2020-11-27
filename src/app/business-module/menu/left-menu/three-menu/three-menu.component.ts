import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-three-menu',
  templateUrl: './three-menu.component.html',
  styleUrls: ['./three-menu.component.scss']
})
export class ThreeMenuComponent implements OnInit, OnChanges {

  @Input() threeMenuList = [];
  @Input() title = '';

  // 判断菜单是否展开
  isShow = true;
  menuName = '';

  constructor(private $router: Router) {
  }

  ngOnInit() {
    this.checkMenuName();
    this.$router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkMenuName();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 修改三级菜单高亮方式
    if (changes.threeMenuList.currentValue) {
      const list = changes.threeMenuList.currentValue.filter(item => this.$router.url.split('?')[0] === item.menuHref);
      if (list && list.length > 0) {
        this.menuName = list[0].menuName;
      }
    }
  }

  /**
   * 路由跳转
   * param item
   */
  itemClick(item) {
    this.menuName = item.menuName;
    this.$router.navigate([item.menuHref]).then();
  }

  /**
   * 展开事件
   * param item
   */
  expandItem(item) {
    const nodes = JSON.parse(JSON.stringify(this.threeMenuList));
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].menuId === item.menuId) {
        if (nodes[i].expand) {
          nodes[i].expand = false;
        } else {
          nodes[i].expand = true;
        }
      }
    }
    this.threeMenuList = nodes;
  }

  /**
   * 检查三级菜单高亮
   */
  checkMenuName() {
    const list = this.threeMenuList.filter(item => this.$router.url.split('?')[0] === item.menuHref);
    if (list && list.length > 0) {
      this.menuName = list[0].menuName;
    }
  }
}
