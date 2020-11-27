import {MenuModel} from './menu.model';

export class MenuTemplateModel {
  /**
   * 菜单明细id(UUID)
   */
  public menuTemplateId: string;

  /**
   * 模板名称
   */
  public templateName: string;

  /**
   * 模板的状态（状态为启用/禁用）
   */
  public templateStatus: string;

  /**
   * 备注
   */
  public remark: string;

  /**
   * 版本
   */
  public version: number;

  /**
   * 是否删除  0 未删除 1 删除
   */
  public isDeleted: string;

  /**
   * 创建人
   */
  public createUser: string;

  /**
   * 创建时间
   */
  public createTime: string;

  /**
   * 更新人
   */
  public updateUser: string;

  /**
   * 更新时间
   */
  public updateTime: string;
  /**
   * 创建时间时间戳
   */
  public createTimeTimestamp: string;
  /**
   * 更新时间时间戳
   */
  public updateTimeTimestamp: string;

  /**
   * 租户id
   */
  public tenantId: string;
  /**
   * 菜单树
   */
  public menuInfoTrees?: MenuModel[];
}
