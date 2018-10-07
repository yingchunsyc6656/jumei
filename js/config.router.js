'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
    ]
  )
.factory("httpInterceptor", [ "$q","$rootScope", function($q,$rootScope) {
    if(isEmpty(sessionStorage.getItem("session"))){
        window.location.href="#/access/signin";
    }
    /**-拦截器处理session-**/
    return {
        request: function(config){
            config.headers = config.headers || {};
            if (sessionStorage && sessionStorage.getItem("session")) {
                config.headers.session = sessionStorage.getItem("session");
                if(sessionStorage && sessionStorage.getItem("department") && sessionStorage.getItem("station")){
                    config.headers.department = sessionStorage.getItem("department");
                    config.headers.station = sessionStorage.getItem("station");
                }
            };
            return config;
        }
    };
}])
    .config(
    [          '$stateProvider', '$urlRouterProvider','$httpProvider',
      function ($stateProvider,   $urlRouterProvider,$httpProvider) {
          $httpProvider.interceptors.push('httpInterceptor');
        //   $urlRouterProvider
        //       .otherwise('/app/home');
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'tpl/app.html'
              })
            //   设计师工作台
              .state('app.designer', {
                url: '/designer',
                templateUrl: 'tpl/app_designer.html',
            })
            // 财务工作台
            .state('app.financial', {
                url: '/financial',
                templateUrl: 'tpl/app_financial.html',
            })
            //  护士工作台
              .state('app.nurse', {
                  url: '/nurse',
                  templateUrl: 'tpl/app_nurse.html',
              })
              //客服工作台
              .state('app.service', {
                  url: '/service',
                  templateUrl: 'tpl/app_service.html',
              })
              //前台工作台
              .state('app.home', {
                  url: '/home',
                  templateUrl: 'tpl/app_home.html',
              })      
              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>'
              })
              .state('app.table.roll', {
                  url: '/roll',
                  templateUrl: 'tpl/table_roll.html'
              })
              .state('app.table.added', {
                  url: '/added',
                  templateUrl: 'tpl/table_added.html'
              })
                //  设计师项目管理导航
                .state('app.stylist', {
                    url: '/stylist',
                    template: '<div ui-view></div>'
                })
                //   设计师添加项目
                .state('app.stylist.addpro', {
                    url: '/addpro',
                    templateUrl: 'tpl/stylist_addpro.html'
                })
                  //   设计师我的项目
                  .state('app.stylist.mypro', {
                    url: '/mypro',
                    templateUrl: 'tpl/stylist_mypro.html'
                })
                //  我的客户导航
                .state('app.mycustom', {
                    url: '/mycustom',
                    template: '<div ui-view></div>'
                })
                //  我的客户
                .state('app.mycustom.consumer', {
                    url: '/consumer',
                    templateUrl: 'tpl/mycustom_consumer.html'
                })
                // 财务管理导航
                .state('app.financical', {
                    url: '/financical',
                    template: '<div ui-view></div>'
                })
                //  工作台收款
                .state('app.financical.gather', {
                    url: '/gather',
                    templateUrl: 'tpl/financical_gather.html'
                })
                //财务查看订单
                .state('app.financical.checkorder', {
                    url: '/checkorder',
                    templateUrl: 'tpl/financical_checkorder.html',
                })
                //护士查看订单
                .state('app.nursepres.checkorder', {
                    url: '/nursecheckorder',
                    templateUrl: 'tpl/nurse_checkorder.html',
                })
                //护士开始手术
                .state('app.nursestart.surgery', {
                    url: '/surgery',
                    templateUrl: 'tpl/nursestart_surgery.html',
                })
                .state('app.nursestart', {
                    url: '/nursestart',
                    template: '<div ui-view></div>'
                })
                .state('app.nursepres', {
                    url: '/nursepres',
                    template: '<div ui-view></div>'
                })
                //护士待处理订单详情页
                .state('app.nursepres.fdetail', {
                    url: '/fdetail',
                    templateUrl: 'tpl/nursepre_fdetail.html',
                })
                // 仓库管理
                .state('app.room', {
                    url: '/room',
                    template: '<div ui-view></div>'
                })
                // 新增入库
                .state('app.room.export', {
                    url: '/export',
                    templateUrl: 'tpl/ager_export.html'
                })
                //出入库管理
                .state('app.room.plug', {
                    url: '/plug',
                    templateUrl: 'tpl/manager_export.html'
                })
                //仓库库存
              .state('app.room.warehouse', {
                  url: '/warehouse',
                  templateUrl: 'tpl/warehouse_stock.html'
              })
                // 出入记录
                .state('app.room.records', {
                    url: '/records',
                    templateUrl: 'tpl/records_export.html'
                })
                // 商家管理
                .state('app.business', {
                    url: '/business',
                    template: '<div ui-view></div>'
                })
                // 店铺转账列表
              .state('app.business.translist', {
                  url: '/translist',
                  templateUrl: 'tpl/transfer_list.html',
              })
              // 店铺转账详情
              .state('app.business.transfer', {
                  url: '/transfer',
                  templateUrl: 'tpl/shop_transfer.html',
                  resolve: {
                    deps: ['$ocLazyLoad',
                    function( $ocLazyLoad){
                        return $ocLazyLoad.load('angularFileUpload').then(
                            function(){
                                return $ocLazyLoad.load('js/controllers/file-upload.js');
                            }
                        );
                    }]
                }
              })
              // 店铺转账照片查看
              .state('app.business.transferImg', {
                  url: '/transferImg',
                  templateUrl: 'tpl/transfer_img.html',
              })
                // 店铺名单
                .state('app.serviceshop.list', {
                    url: '/list',
                    templateUrl: 'tpl/shop_list.html'
                })
                // 添加店家
                .state('app.serviceshop.shopman', {
                    url: '/shopman',
                    templateUrl: 'tpl/add_shopman.html'
                })
                // 财务管理个人设置
                .state('app.moneyperson', {
                    url: '/moneyperson',
                    template: '<div ui-view></div>'
                })
                // 对账确认
                .state('app.moneyperson.confirm', {
                    url: '/confirm',
                    templateUrl: 'tpl/bill_confirm.html'
                })
                // 收款记录
                //历史对账
              .state('app.moneyperson.reconciliation', {
                  url: '/reconciliation',
                  templateUrl: 'tpl/reconciliation.html'
              })
              // 收款记录
                .state('app.moneyperson.record', {
                    url: '/record',
                    templateUrl: 'tpl/moneyperson_record.html'
                })
                // 退回订单
                .state('app.designerset.backorder', {
                    url: '/backorder',
                    cache:'false',
                    templateUrl: 'tpl/moneyperson_backorder.html'
                })
                // 资料修改
                .state('app.moneyperson.editor', {
                    url: '/moneyeditor',
                    templateUrl: 'tpl/moneyperson_editor.html'
                })
              // form
              .state('app.form', {
                  url: '/form',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: {
                      deps: ['uiLoad',
                        function( uiLoad){
                          return uiLoad.load('js/controllers/form.js');
                      }]
                  }
              })
              /*客服客户管理完善信息上传照片*/
           .state('app.form.historyorder', {
            url: '/historyorder',
            templateUrl: 'tpl/form_historyorder.html',
            resolve: {
                deps: ['$ocLazyLoad',
                    function( $ocLazyLoad){
                        return $ocLazyLoad.load('angularFileUpload').then(
                            function(){
                                return $ocLazyLoad.load('js/controllers/servicefile-upload.js');
                            }
                        );
                    }]
                }
            })

              .state('app.form.personal', {
                url: '/personal_data',
                templateUrl: 'tpl/personal_data.html'
            })
              .state('app.form.user', {
                url: '/user_manager',
                templateUrl: 'tpl/user_manager.html'
            })
            .state('app.form.adduser', {
                url: '/user_add',
                templateUrl: 'tpl/user_add.html'
            })
              .state('app.form.elements', {
                  url: '/elements',
                  templateUrl: 'tpl/form_elements.html'
              })
              .state('app.form.validation', {
                  url: '/validation',
                  templateUrl: 'tpl/form_validation.html'
              })
            /*护士预约管理start*/
              .state('app.nursepre', {
                url: '/nursepre',
                template: '<div ui-view></div>'
                })
            /*护士预约管理end*/
            /*预约管理今日预约名单导航*/
            .state('app.nursepre.todaypre', {
                url: '/todaypre',
                templateUrl: 'tpl/nursepre_todaypre.html'
            })
            /*预约管理未来订单*/
            .state('app.nursepre.futurelist', {
                url: '/futurelist',
                templateUrl: 'tpl/nursepre_futurelist.html'
            })
           /*客服客户管理完善客户信息*/
           .state('app.servicemanager.pmsg', {
                url: '/pmsg',
                templateUrl: 'tpl/servicemanager_provemsg.html'
            })
            /*客服客户管理完善信息上传照片*/
           .state('app.servicemanager.uploadphoto', {
            url: '/uploadphoto',
            templateUrl: 'tpl/servicemanager_uploadphoto.html',
            resolve: {
                deps: ['$ocLazyLoad',
                    function( $ocLazyLoad){
                        return $ocLazyLoad.load('angularFileUpload').then(
                            function(){
                                return $ocLazyLoad.load('js/controllers/servicefile-upload.js');
                            }
                        );
                    }]
                }
            })
           /*客服客户管理完善信息照片展示*/
           .state('app.servicemanager.imageabout', {
            url: '/imageabout',
            templateUrl: 'tpl/uploadphoto_about.html',
            })
              //   客服工作台个人设置
              .state('app.serviceset', {
                  url: '/serviceset',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              //个人资料修改
              .state('app.serviceset.editservice', {
                url: '/editservice',
                templateUrl: 'tpl/serviceset_editservice.html'
            })
              //个人设置操作记录
              .state('app.serviceset.handle', {
                  url: '/handle',
                  templateUrl: 'tpl/serviceset_handle.html'
              })
              // pages
              .state('app.page', {
                  url: '/page',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              // nurseset
              .state('app.nurseset', {
                url: '/nurseset',
                template: '<div ui-view class="fade-in-down"></div>'
            })
              // designer
              .state('app.designerset', {
                url: '/designerset',
                template: '<div ui-view class="fade-in-down"></div>'
            })
            // 客服商家管理
            .state('app.serviceshop', {
                url: '/serviceshop',
                template: '<div ui-view></div>'
            })
            // 客户管理完善信息
            .state('app.servicemanager', {
                url: '/servicemanager',
                template: '<div ui-view class="fade-in-down"></div>'
            })
            // 接待记录
              .state('app.page.personal', {
                  url: '/personal',
                  templateUrl: 'tpl/personal_data.html'
              })
            //   资料修改
              .state('app.page.editor', {
                url: '/editor',
                templateUrl: 'tpl/personal_editor.html'
            })
            //  仓库管理资料修改
                .state('app.depot.update', {
                    url: '/update',
                    templateUrl: 'tpl/depot_update.html'
                })
            //   客服资料修改
            .state('app.nurseset.seteditor', {
                url: '/seteditor',
                templateUrl: 'tpl/nurseset_seteditor.html'
            })
            // 设计师接待记录
            .state('app.designerset.desreceive', {
                url: '/desreceive',
                templateUrl: 'tpl/page_desreceive.html'
            })
            //设计师资料修改
            .state('app.designerset.deseditor', {
                url: '/deseditor',
                templateUrl: 'tpl/page_deseditor.html'
            })
            .state('access', {
                url: '/access',
                template: '<div ui-view class="fade-in-right-big smooth"></div>'
            })
            .state('access.signin', {
                url: '/signin',
                templateUrl: 'tpl/page_signin.html',
                resolve: {
                    deps: ['uiLoad',
                    function( uiLoad ){
                        return uiLoad.load( ['js/controllers/signin.js'] );
                    }]
                }
            })
            .state('access.signup', {
                url: '/signup',
                templateUrl: 'tpl/page_signup.html',
                resolve: {
                    deps: ['uiLoad',
                    function( uiLoad ){
                        return uiLoad.load( ['js/controllers/signup.js'] );
                    }]
                }
            })
            .state('access.forgotpwd', {
                url: '/forgotpwd',
                templateUrl: 'tpl/page_forgotpwd.html',
                resolve: {
                    deps: ['uiLoad',
                        function( uiLoad ){
                            return uiLoad.load( ['js/controllers/forgotpwd.js'] );
                        }]
                }
            })
      }
    ]
  );