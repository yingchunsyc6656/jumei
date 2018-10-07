'use strict';

/* Controllers */

  // bootstrap controller
  app.controller('AccordionDemoCtrl', ['$scope', function($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Accordion group header - #1',
        content: 'Dynamic group body - #1'
      },
      {
        title: 'Accordion group header - #2',
        content: 'Dynamic group body - #2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  }])
  ; 
  app.controller('AlertDemoCtrl', ['$scope', function($scope) {
    $scope.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it is not super important.' },
      { type: 'warning', msg: 'Warning! Best check yo self, you are not looking too good...' }
    ];

    $scope.addAlert = function() {
      $scope.alerts.push({type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
  }])
  ; 
  app.controller('ButtonsDemoCtrl', ['$scope', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };
  }])
  ; 
  app.controller('CarouselDemoCtrl', ['$scope', function($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function() {
      slides.push({
        image: 'img/c' + slides.length + '.jpg',
        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
      });
    };
    for (var i=0; i<4; i++) {
      $scope.addSlide();
    }
  }])
  ; 
  app.controller('DropdownDemoCtrl', ['$scope', function($scope) {
    $scope.items = [
      'The first choice!',
      'And another choice for you.',
      'but wait! A third!'
    ];

    $scope.status = {
      isopen: false
    };

    $scope.toggled = function(open) {
      //console.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;
    };
  }])
  ; 
  /*app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {*/
app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance',function($scope, $modalInstance) {
/*    $scope.items = items;
    $scope.selected = {
      item: $scope.items[0]
    };*/
    $scope.ok = function () {
     /* $modalInstance.close($scope.selected.item);*/
        $modalInstance.close($scope.items);
    };

    $scope.cancel = function () {
      /*$modalInstance.dismiss('cancel');*/
        $modalInstance.dismiss('cancel');
    };
  }])
  ; 
  app.controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {
      // 设计师客户信息
      $scope.openUserMsg = function (size) {
        var modalInstance = $modal.open({
          templateUrl: 'modalUserMsg.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          /*resolve: {
              items: function () {
                  return $scope.items;
              }
          }*/
        });
        modalInstance.result.then(function (selectedItem) {
        /*$scope.selected = selectedItem;*/
        }, function () {
        /* $log.info('Modal dismissed at: ' + new Date());*/
        });
      };
      // 设计师添加项目
      $scope.openAddItem = function (size) {
        var modalInstance = $modal.open({
          templateUrl: 'modalAddItem.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          /*resolve: {
              items: function () {
                  return $scope.items;
              }
          }*/
        });
        modalInstance.result.then(function (selectedItem) {
        /*$scope.selected = selectedItem;*/
        }, function () {
        /* $log.info('Modal dismissed at: ' + new Date());*/
        });
      };
      // 设计师编辑信息
      $scope.openEditMsg = function (size) {
        var modalInstance = $modal.open({
          templateUrl: 'modalEditMsg.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          /*resolve: {
              items: function () {
                  return $scope.items;
              }
          }*/
        });
        modalInstance.result.then(function (selectedItem) {
        /*$scope.selected = selectedItem;*/
        }, function () {
        /* $log.info('Modal dismissed at: ' + new Date());*/
        });
      };
      // 财务工作台确认收款
      $scope.openConfirmGather = function (size) {
        var modalInstance = $modal.open({
          templateUrl: 'modalConfirmGather.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          /*resolve: {
              items: function () {
                  return $scope.items;
              }
          }*/
        });
        modalInstance.result.then(function (selectedItem) {
        /*$scope.selected = selectedItem;*/
        }, function () {
        /* $log.info('Modal dismissed at: ' + new Date());*/
        });
      };

      $scope.open = function (size) {
          var modalInstance = $modal.open({
              templateUrl: 'myModalContent.html',
              controller: 'ModalInstanceCtrl',
              size: size,
              /*resolve: {
                  items: function () {
                      return $scope.items;
                  }
              }*/
          });
      modalInstance.result.then(function (selectedItem) {
        /*$scope.selected = selectedItem;*/
      }, function () {
       /* $log.info('Modal dismissed at: ' + new Date());*/
      });
    };
  }])
  ; 
  app.controller('PaginationDemoCtrl', ['$scope', '$log', function($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.info('Page changed to: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
  }])
  ; 
  app.controller('PopoverDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicPopover = 'Hello, World!';
    $scope.dynamicPopoverTitle = 'Title';
  }])
  ; 
  app.controller('ProgressDemoCtrl', ['$scope', function($scope) {
    $scope.max = 200;

    $scope.random = function() {
      var value = Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
          var index = Math.floor((Math.random() * 4));
          $scope.stacked.push({
            value: Math.floor((Math.random() * 30) + 1),
            type: types[index]
          });
      }
    };
    $scope.randomStacked();
  }])
  ; 
  app.controller('TabsDemoCtrl', ['$scope', function($scope) {
    $scope.tabs = [
      { title:'Dynamic Title 1', content:'Dynamic content 1' },
      { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];
  }])
  ; 
  app.controller('RatingDemoCtrl', ['$scope', function($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };
  }])
  ; 
  app.controller('TooltipDemoCtrl', ['$scope', function($scope) {
    $scope.dynamicTooltip = 'Hello, World!';
    $scope.dynamicTooltipText = 'dynamic';
    $scope.htmlTooltip = 'I\'ve been made <b>bold</b>!';
  }])
  ; 
  app.controller('TypeaheadDemoCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously
    $scope.getLocation = function(val) {
      return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: val,
          sensor: false
        }
      }).then(function(res){
        var addresses = [];
        angular.forEach(res.data.results, function(item){
          addresses.push(item.formatted_address);
        });
        return addresses;
      });
    };
  }])
  ;
/**appHome-前台工作台**/
// appHome controller
app.controller('HomesController', ['$scope', '$http','$q','$state','$interval','$filter', function($scope, $http,$q, $state,$interval,$filter) {
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
    }
    $scope.spread=true;    //展开列表
    $scope.retract=false;  //收起列表
    $(".refresh").click(function () {
        $("#re-img").toggleClass("resh");
        $scope.customerStatus();
    });
    /*初始化刷新页面*/ 
    $scope.customerStatus=function(){
        $scope.noRecords=false;//暂无数据初始化
        $scope.isRecords=false;//列表数据初始化
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            /**客户状态信息**/
            $http.post($scope.app.host+'workbenchQuery',{
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.consultingRoom=response.data.consultRoom;//咨询室
                        $scope.totalNumber=response.data.totalNumber;//今日预约人数
                        if(response.data.page.list.length==0){
                            $scope.noRecords=true;//暂无数据初始化
                            $scope.isRecords=false;//列表数据初始化
                        }else{
                            $scope.noRecords=false;//暂无数据初始化
                            $scope.isRecords=true;//列表数据初始化
                            $scope.workList=response.data.page.list;
                            $scope.detailPages=response.data.page.totalPages;//总共多少页
                            $scope.detailPager= {
                                totalElements: response.data.page.totalRecords,
                                pageSize:10,
                                pageNo:response.data.page.pageNo
                            }
                        }
                    }
                }else{
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    $scope.customerStatus();//初始化执行的函数
    $scope.workPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'workbenchQuery',
            {
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
                if(response.data.list=="0"){
                    $scope.noRecords=true;//暂无数据初始化
                    $scope.isRecords=false;//列表数据初始化
                }else{
                    $scope.noRecords=false;//暂无数据初始化
                    $scope.isRecords=true;//列表数据初始化
                    $scope.workList=response.data.page.list;
                }
        });
    }
    /**客户状态详情**/
    $scope.modalDrop=false;
    $scope.modalDialog=false;//详情
    $scope.shopDialog=false;//到店
    $scope.openRecordsId = function (size) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            $http.post($scope.app.host+'detailAppoint',
                {
                    orderno:$scope.workList[size].orderNo,
                    token:tokenSession,
                }).success(function(response) {
                $scope.modalDrop=true;
                $scope.modalDialog=true;
                $scope.aboutList=response.data;//预约详情
            });
            $http.post($scope.app.host+'detailCustomer',
                {
                    customerid:$scope.workList[size].customerId,
                    token:tokenSession,
                }).success(function(response) {
                $scope.modalDrop=true;
                $scope.modalDialog=true;
                $scope.clientDetails=response.data;//客户详情
            });
        }
    };
    /**到店**/
    $scope.shopStore = function ($ind) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            $scope.orderno = $scope.workList[$ind].orderNo;//到店id
            $http.post($scope.app.host+'arriveStoreQuery',
                {
                    orderno:$scope.workList[$ind].orderNo,
                    token:tokenSession,
                }).success(function(response) {
                $scope.modalDrop=true;
                $scope.shopDialog=true;//到店
                $scope.customerName=response.data.customerName//到店默认姓名
                $scope.appointmentDate=response.data.appointmentDate//到店预约时间
            });
        }
    }
    /**到店服务人员默认初始化**/
    $scope.pleaseSelect=true;//服务人员初始化值
    $scope.dgner=false;//选中值
    $scope.chosenDrop=false;
    //显示搜索框
    $scope.chosenSingle=function(){
        $scope.chosenDrop=!$scope.chosenDrop;
        $scope.pleaseSelect=true;
        $(".chosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        //role"1"//定义前台
        $scope.designame="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'roleQuery',{role:"1",token:tokenSession,designername:$scope.designame}).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.roleQueryList=response.roleQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //模糊查询
    $scope.designerChange=function () {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            //请求热搜数据
            $http.post($scope.app.host+'roleQuery',{role:"1",token:tokenSession,designername:$scope.desName}).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.roleQueryList=response.roleQueryList;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    //选中咨询医生
    $scope.roleClick=function ($index) {
        $scope.pleaseSelect=false;//咨询医生初始化值
        $scope.dgner=true;//选中值
        $scope.chosenDrop=false;
        $scope.designame=$scope.roleQueryList[$index].rolename;
        $scope.desName="";
        $scope.authError="";
    }
    /**预约详情返回事件处理**/
    $scope.goBack=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /**客户详情返回事件处理**/
    $scope.cancel=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /**到店返回事件处理**/
    $scope.storeCancel=function () {
        $scope.modalDrop=false;
        $scope.shopDialog=false;
        $scope.authError="";
    }
    /**确认到店事件处理**/
    $scope.ackOk=function () {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            //请求热搜数据
            $http.post($scope.app.host+'arriveStoreCreate',{orderno:$scope.orderno,token:tokenSession,receptionname:$scope.designame}).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.modalDrop=false;
                        $scope.shopDialog=false;
                        $scope.customerStatus();
                    }
                }else if(response.status=="800"){
                    $scope.authError=response.msg;
                }else{
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    /**分诊初始化**/
    $scope.triageWrapper=false;//分诊信息和列表数据
    $scope.rowMessage=true;//客户状态信息列表
    $scope.triage=function ($t) {
        $scope.rowMessage=false;//客户状态信息列表
        $scope.triageWrapper=true;//分诊信息和列表数据
        $scope.noTable=false;
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            //请求select数据
            $http.post($scope.app.host+'roleQuery',{role:"2",token:tokenSession,designername:""}).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.roleQueryList=response.roleQueryList;
                    }
                }else{
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
            //请求分诊数据
            $http.post($scope.app.host+'triageQuery',{
                orderNo:$scope.workList[$t].orderNo,
                token:tokenSession,
                pageSize:5,
                pageNo:1
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.triagelist=response.data;//分诊表信息
                        $scope.triagerName=response.data.designerName;//默认预约设计师
                    }
                }else{
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    /*展开列表*/ 
    $scope.openTableList=function($that,$ids){
        //预约记录
        $http.post($scope.app.host+'appointmentQuery',{
            orderNo:$ids,
            customerId:$that,
            token:tokenSession,
            pageSize:5,
            pageNo:1
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.noTable=true;
                        $scope.tabList=false;
                        $scope.spread=false;
                        $scope.retract=true;
                    }else{
                        $scope.spread=false;
                        $scope.retract=true;
                        $scope.tabList=true;
                        $scope.noTable=false;
                        $scope.triageRecords=response.data.list;//预约记录
                        $scope.detailPages=response.data.totalPages;//总共多少页
                        $scope.detailPager= {
                            totalElements: response.data.totalRecords,
                            pageSize:5,
                            pageNo:response.data.pageNo
                        }
                    }
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    /*收起列表*/
    $scope.retractlist=function(){
        $scope.spread=true;
        $scope.retract=false;
        $scope.tabList=false;
        $scope.noTable=false;
    }
   
    $scope.triagePage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'appointmentQuery',
            {
                customerId:$scope.triagelist.customerId,
                token:tokenSession,
                pageSize:5,
                pageNo:ss.pi
            }).success(function(response) {
                $scope.triageRecords=response.data.list;//预约记录
        });
    }
    /**分诊医生select选择框**/
    //请求select数据
    $scope.triageId=true;
    $scope.triList=false;
    $scope.triageClick = function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            $scope.triageId=!$scope.triageId;
            $scope.triList=!$scope.triList;
        }
    }
    //选择的预约设计师
    $scope.triagerfun = function(t){
        $scope.triagerName=$scope.roleQueryList[t].rolename;
    }
    /**分诊**/
    $scope.submitReceive = function () {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'triageCreate',
            {
                orderno:$scope.triagelist.orderNo,
                designername:$scope.triagerName,
                token:tokenSession
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.triageWrapper=false;
                        $scope.rowMessage=true;
                        $scope.customerStatus();
                    }
                }else{
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
        });
    }
}]);
/**TableRoll-预约名单查询**/
// TableRoll controller
app.controller('TableRollController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;
    /**预约名单start**/
    /**咨询医生默认初始化**/
    $scope.pleaseSelect=true;//咨询医生初始化值
    $scope.dgner=false;//选中值
    $scope.chosenDrop=false;
    //显示搜索框
    $scope.chosenSingle=function(){
        $scope.chosenDrop=!$scope.chosenDrop;
        $scope.pleaseSelect=true;
        $(".chosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.role="2";//定义哪一个类别
        $scope.user.designame="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'roleQuery',{role:$scope.user.role,token:tokenSession,designername:$scope.user.designame}).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.roleQueryList=response.roleQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //模糊查询
    $scope.designerChange=function () {
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.role="2";//定义为空
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            //请求热搜数据
            $http.post($scope.app.host+'roleQuery',{role:$scope.user.role,token:tokenSession,designername:$scope.user.desName}).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.roleQueryList=response.roleQueryList;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    //选中咨询医生
    $scope.roleClick=function ($index) {
        $scope.pleaseSelect=false;//咨询医生初始化值
        $scope.dgner=true;//选中值
        $scope.chosenDrop=false;
        $scope.user.designame=$scope.roleQueryList[$index].rolename;
        $scope.user.desName="";
    }
    /**预约名单end**/

    /**渠道start**/
    /**渠道默认初始化**/
    $scope.channelSelect=true;//渠道初始化值
    $scope.canel=false;//选中值
    $scope.channelDrop=false;
    //显示搜索框
    $scope.channelSingle=function(){
        $scope.channelDrop=!$scope.channelDrop;
        $scope.channelSelect=true;
        $(".channel").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.sourcename="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'sourceQuery',{token:tokenSession,sourcename:$scope.user.sourcename}).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.sourceQueries=response.sourceQueries;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //模糊查询
    $scope.channelChange=function () {
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.sourcename="";//定义为空
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            //请求热搜数据
            $http.post($scope.app.host+'sourceQuery',{token:tokenSession,sourcename:$scope.user.chaName}).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.sourceQueries=response.sourceQueries;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    //选中咨询医生
    $scope.channelClick=function ($index) {
        $scope.channelSelect=false;//咨询医生初始化值
        $scope.canel=true;//选中值
        $scope.channelDrop=false;
        $scope.user.ordersource=$scope.sourceQueries[$index].sourcename;
        $scope.user.chaName="";
    }
    /**渠道end**/
    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
       /* var dt = new Date();
        //开始时间
        $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
        $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/

    /**客户资料查询-start**/
    $scope.noTable=false;//暂无数据初始化
    $scope.tableRolls=false;//列表数据初始化
    $scope.filtrate = function () {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.name)){
            $scope.user.name="";
        }
        if(isEmpty($scope.user.phone)){
            $scope.user.phone="";
        }
        if(isEmpty($scope.user.designame)){
            $scope.user.designame="";
        }
        if(isEmpty($scope.user.ordersource)){
            $scope.user.ordersource="";
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        if(isEmpty($scope.dts)){
            $scope.dts="";
        }
        $http.post($scope.app.host+'orderQuery',
            {
                name:$scope.user.name,
                phone:$scope.user.phone,
                designername:$scope.user.designame,
                ordersource:$scope.user.ordersource,
                appointbegindate:$scope.dt,
                appointenddate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
               if(response.status=="200"){
                   if(response.data.list.length=="0"){
                       $scope.noTable=true;//暂无数据初始化
                       $scope.tableRolls=false;//列表数据初始化
                   }else if(response.data.list.length>0){
                       $scope.noTable=false;//暂无数据初始化
                       $scope.tableRolls=true;//列表数据初始化
                       $scope.rollList=response.data.list;
                       $scope.detailPages=response.data.totalPages;//总共多少页
                       $scope.detailPager= {
                           totalElements: response.data.totalRecords,
                           pageSize:10,
                           pageNo:response.data.pageNo
                       }
                   }
               }else if(response.status=="800"){
                   $scope.authError=response.msg;
               }
        });
    }
    $scope.filtrate();
    $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        $http.post($scope.app.host+'orderQuery',
            {
                name:$scope.user.name,
                phone:$scope.user.phone,
                designername:$scope.user.designame,
                ordersource:$scope.user.ordersource,
                appointbegindate:$scope.dt,
                appointenddate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
                $scope.noTable=false;//暂无数据初始化
                $scope.tableRolls=true;//列表数据初始化
                $scope.rollList=response.data.list;
        });
    }
    /*预约名单失效*/
    $scope.endorder=function(orderNo){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var msg="你确定要结束订单吗?";
           if(confirm(msg)==false){
               return false;
        }
        $http.post($scope.app.host+'endOrder',
            {
                orderNo:orderNo,
                token:tokenSession,
            }).success(function(response) {
            if(response.status=="200"){
                if(response.submitStatus=="1"){
                    $scope.filtrate();
                    alert(response.msg);
                }
            }
        });
    }
    /**客户资料提交-end**/
}]);
/**table_Add-预约名单-新增预约**/
// table_Add controller
app.controller('TableAddController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;
    /**咨询医生start**/
    /**咨询医生默认初始化**/
    $scope.queryResult=false;//查询结果
    $scope.customerTable=false;//客户资料
    $scope.newOrder=false;//近期预约状况
    $scope.pleaseSelect=true;//咨询医生初始化值
    $scope.dgner=false;//选中值
    $scope.chosenDrop=false;
    /**手动添加**/
    $scope.manuallyAdd=function () {
        $scope.customerTable=true;
        $scope.queryResult=false;
        $scope.newOrder=false;
        $(".customername").attr("disabled",false);
        $(".phone").attr("disabled",false);
        $(".age").attr("disabled",false);
        $scope.user.customername="";//预约客户资料用户名
        $scope.user.age="";//预约客户资料年龄
        $scope.user.phone="";//预约客户资料电话
        $(".chosen-container").css('width',"150px");
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
          $state.go('access.signin');
        }
    }
    //显示搜索框
    $scope.chosenSingle=function(){
        $scope.chosenDrop=!$scope.chosenDrop;
        $scope.pleaseSelect=true;
        $(".chosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.role="2";//定义哪一个类别
        $scope.user.designame="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'roleQuery',{role:$scope.user.role,token:tokenSession,designername:$scope.user.designame}).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.roleQueryList=response.roleQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //模糊查询
    $scope.designerChange=function () {
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.role="2";//定义为空
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            //请求热搜数据
            $http.post($scope.app.host+'roleQuery',{role:$scope.user.role,token:tokenSession,designername:$scope.user.desName}).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.roleQueryList=response.roleQueryList;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    //选中咨询医生
    $scope.roleClick=function ($index) {
        $scope.pleaseSelect=false;//咨询医生初始化值
        $scope.dgner=true;//选中值
        $scope.chosenDrop=false;
        $scope.user.designame=$scope.roleQueryList[$index].rolename;
        $scope.user.desName="";
    }
    /**咨询医生end**/

    /**渠道start**/
    /**渠道默认初始化**/
    $scope.channelSelect=true;//渠道初始化值
    $scope.canel=false;//选中值
    $scope.channelDrop=false;
    //显示搜索框
    $scope.channelSingle=function(){
        $scope.channelDrop=!$scope.channelDrop;
        $scope.channelSelect=true;
        $(".channel").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.sourcename="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'sourceQuery',{token:tokenSession,sourcename:$scope.user.sourcename}).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.sourceQueries=response.sourceQueries;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //模糊查询
    $scope.channelChange=function () {
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.sourcename="";//定义为空
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            //请求热搜数据
            $http.post($scope.app.host+'sourceQuery',{token:tokenSession,sourcename:$scope.user.chaName}).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.sourceQueries=response.sourceQueries;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    //选中咨询医生
    $scope.channelClick=function ($index) {
        $scope.channelSelect=false;//咨询医生初始化值
        $scope.canel=true;//选中值
        $scope.channelDrop=false;
        $scope.user.ordersource=$scope.sourceQueries[$index].sourcename;
        $scope.user.chaName="";
    }
    /**渠道end**/
    /**--日期时间-start**/
    $scope.dateChange=function(t){
        //console.log($filter('date')(t, 'yyyy-MM-dd'));
    }
    $scope.today = function() {
        var dt = new Date();
        //时间转换指令
        if($scope.dt < $scope.dts){
            $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
            $scope.user.appointmenttime=$scope.dt;
        }else{
            $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
            $scope.user.appointmenttime=$scope.dt;
        }
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/

    /**客户资料提交-start**/
    $scope.isanes=function(){
        if(isEmpty($scope.isanesthesia)){
            $scope.isanesthesia="0";
        }
        $scope.user.isanesthesia=$scope.isanesthesia;
    }
    /**项目预约备注下面的标签选择**/
    $scope.textRemark=function () {
        if($("#remark").val()==""){
            $(".ft ul li").removeClass("gro");
        }
    }
    $(".ft ul li").click(function () {
        $(this).toggleClass("gro");
        var sLen= $(".ft ul").find("li");
        var sObject=[];
        for(var i=0;i<sLen.length;i++){
            if(sLen[i].className=="gro"){
                sObject[i]=sLen[i].innerHTML.replace(/\"/g,"");
            }
        }
        var strValue=sObject.join(" ").replace(/(^\s*)|(\s*$)/g, "");
       /* if(sObject.length<=1){
            var strValue=sObject.join(" ").replace(/(^\s*)|(\s*$)/g, "")+",";
        }else{
            var strObject=sObject.pop();
            var strValue=strObject+",";
        }*/
       // var cc=$scope.firstRemark+strValue;
        $("#remark").val(strValue);
        $scope.user.projectremark=strValue;
    });
    /*设计师场外老师start*/
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'consultQuery',{
        token:tokenSession,
        consultName:""
    }).success(function(response) {
        if(response.status=="200"){
            if(response.queryStatus=="1"){
                $scope.outQueryList=response.consultQueryList;
            }
        }else{
            if(response.msg=="登陆超时,请重新登陆"){
                $state.go('access.signin');
            }
        }
    });
    /*选中场外老师*/
    $scope.outchange=function (outvalue) {
        $scope.outvalue=outvalue;          //场外老师的值
    }
    /*设计师场外老师end*/
    $scope.putShow=false;
    $scope.modalDrop=false;
    $scope.modalDialog=false;
    $scope.ppap=function () {
        $scope.isanes();
        if(isEmpty($scope.user.designame)||isEmpty($scope.user.ordersource)||isEmpty($scope.outvalue)||isEmpty($scope.user.projectremark)){
            $scope.putShow=true;
            $scope.putError="请填写完整再提交";
        }else{
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            $scope.putShow=false;
            $http.post($scope.app.host+'orderCreate',
                {
                    customername:$scope.user.customername,
                    phone:$scope.user.customerphone,
                    age:$scope.user.customerage,
                    designername:$scope.user.designame,
                    ordersource:$scope.user.ordersource,
                    consultName:$scope.outvalue,                //外场咨询
                    appointmenttime:$scope.user.appointmenttime,
                    isanesthesia:$scope.user.isanesthesia,
                    projectremark:$scope.user.projectremark,
                    token:tokenSession
                }).success(function(response) {
                if(response.status=="200"){
                    if(response.summitstatus=="1"){
                        $scope.customerTable=false;
                        $scope.user.designame="";
                        $scope.user.ordersource="";
                        $scope.user.customername="";
                        $scope.user.projectremark="";
                        $state.go('app.home');
                    }
                }else if(response.status=="800"){
                    $scope.msgError=response.msg;
                    $scope.modalDrop=true;
                    $scope.modalDialog=true;
                }
            });
        }
    }
    $scope.cancel=function(){
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /**客户资料提交-end**/

    /**客户资料提交-start**/
    $scope.query=function () {
        if(isEmpty($scope.user.querydata)){
            return false;
        }
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $scope.putShow=false;
        $scope.queryResult=false;
        $scope.customerTable=false;
        $scope.newOrder=false;
        $http.post($scope.app.host+'insertAppointQuery',
            {
                querydata:$scope.user.querydata,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
                if(response.data.list.length=="0"){
                    $scope.queryResult=false;
                    $scope.customerTable=false;
                    $scope.user.querydata=="";
                }else{
                    $scope.queryResult=true;
                    $scope.detailList=response.data.list;
                    $scope.detailPages=response.data.totalPages;//总共多少页
                    $scope.detailPager= {
                        totalElements: response.data.totalRecords,
                        pageSize:10,
                        pageNo:response.data.pageNo
                    }
                }
        });
    }
    /**预约-选择**/
    $scope.detailsSelect=function($index){
        $scope.queryResult=false;
        $scope.customerTable=true;
        $scope.newOrder=true;
        $scope.user.customerId=$scope.detailList[$index].customerId;
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'customerQuery',
            {
                customerid:$scope.detailList[$index].customerId,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
            if(response.data.list.length==0){
                $scope.queryResult=false;
            }else{
                $scope.user.customername=response.customername;//预约客户资料用户名
                $scope.user.customerage=response.customerage;//预约客户资料年龄
                $scope.user.customerphone=response.customerphone;//预约客户资料电话
                $(".customername").attr("disabled",true);
                $(".phone").attr("disabled",true);
                $(".age").attr("disabled",true);
                $scope.ordersList=response.data.list;
                $scope.detailPages=response.data.totalPages;//总共多少页
                $scope.detailPager= {
                    totalElements: response.data.totalRecords,
                    pageSize:10,
                    pageNo:response.data.pageNo
                }
            }
        });
    }
    /**近期状况列表切换页**/
    $scope.recentPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'customerQuery',
            {
                customerid:$scope.user.customerId,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.ordersList=response.data.list;
        });
    }
    /**查询客户资料列表切换页**/
    $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'insertAppointQuery',
            {
                querydata:$scope.user.querydata,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.detailList=response.data.list;
        });
    }
    /**客户资料提交-end**/
}])
;
/**-前台预约管理的个人设置-**/
/**
 * 个人设置
 * start
 *
 * **/
app.controller('recordsController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    $scope.user = {};
    $scope.authError = null;
    $scope.noRecords=false;
    $scope.isRecords=false;
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $scope.Screening=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.queryData)){
            $scope.user.queryData="";
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        if(isEmpty($scope.dts)){
            $scope.dts="";
        }
        $http.post($scope.app.host+'receivingRecord',
            {
                queryData:$scope.user.queryData,
                startDate:$scope.dt,
                stopDate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
               if(response.status=="200"){
                   if(response.data.list.length==0){
                    $scope.noRecords=true;
                    $scope.isRecords=false;
                   }else{
                        $scope.noRecords=false;
                        $scope.isRecords=true;
                        $scope.recordList=response.data.list;//接待记录列表信息
                        $scope.detailPages=response.data.totalPages;//总共多少页
                        $scope.detailPager= {
                            totalElements: response.data.totalRecords,
                            pageSize:10,
                            pageNo:response.data.pageNo
                        }
                   }
               }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.Screening();
    /**操作记录分页切换页**/
    $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        $http.post($scope.app.host+'receivingRecord',
            {
                queryData:$scope.user.queryData,
                startDate:$scope.dt,
                stopDate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
                $scope.recordList=response.data.list;//接待记录列表信息
        });
    }
    /**记录详情**/
    $scope.modalDrop=false;
    $scope.modalDialog=false;
    $scope.openRecordsId = function (size) {
        $http.post($scope.app.host+'detailAppoint',
            {
                orderno:$scope.recordList[size].orderNo,
                token:tokenSession,
            }).success(function(response) {
                $scope.modalDrop=true;
                $scope.modalDialog=true;
                $scope.aboutList=response.data;//预约详情
        });
        $http.post($scope.app.host+'detailCustomer',
            {
                customerid:$scope.recordList[size].customerId,
                token:tokenSession,
            }).success(function(response) {
            $scope.modalDrop=true;
            $scope.modalDialog=true;
            $scope.clientDetails=response.data;//客户详情
        });
    };
    /**预约详情返回事件处理**/
    $scope.goBack=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /**客户详情返回事件处理**/
    $scope.cancel=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
       /* var dt = new Date();
        //开始时间
        $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
        $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/
}]);
/**
 *
 * 个人设置
 * end
 *
 **/

/**
 *
 * 资料修改
 * start
 *
 **/
app.controller('personalEditorController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;
    var tokenSession = sessionStorage.getItem("session");
    if (isEmpty(tokenSession)) {
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'updateDataQuery',
        {
            token:tokenSession,
        }).success(function(response) {
            if(response.status=="200"){
                $scope.datum=response;//资料
                $scope.datumPhone=response.phone;//手机号码
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
    });
    /**-验证码登录-**/
    /**短信验证码倒计时**/
    $scope.codeMsg = "获取验证码";
    $scope.sendCode = function() {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.password)||isEmpty($scope.user.passwords)){
            $scope.authError="密码不能为空";
            return false;
        }
        if(checkIsMobile($scope.datumPhone)){
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $scope.authError="";
                $http.post($scope.app.host+'getAuthCode',{phone:$scope.datumPhone}).success(function(response) {
                    if(response.status=="200"){
                        if(response.auchstatus=="0"){
                            //TODO 点击过了
                            flag = false;
                            $scope.authError =response.msg;
                        }else if(response.auchstatus=="1"){
                            $scope.disable = false;
                            var timer = setInterval(function() {
                                if (time > 0) {
                                    time--;
                                    $scope.$apply(function() {
                                        $scope.codeMsg = time + '秒后再发送';
                                        $scope.disable = false;
                                    });
                                } else {
                                    $scope.$apply(function() {
                                        $scope.codeMsg = "获取验证码";
                                        $scope.disable = true;
                                    });
                                    clearInterval(timer);
                                }
                            }, 1000);
                        }
                    }
                });
            }
        }
        else{
            $scope.authError = "手机号码格式错误";
        }
    }
    $scope.audit=function () {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        //Try to create
        if($scope.user.password==$scope.user.passwords){
            $http.post($scope.app.host+'updateData', {
                phone: $scope.datumPhone, 
                password: $scope.user.passwords,
                authCode:$scope.user.authCode,
                token:tokenSession
            })
                .then(function(response) {
                    if(response.data.status == "200"){
                        $scope.authError = response.data.msg;
                    }else{
                        $scope.authError = response.data.msg;
                    }
                }, function(x) {
                    $scope.authError = 'Server Error';
                });
        }else{
            $scope.authError = "两次密码不一致，请重输！";
        }
    }
}]);
/**
 *
 * 资料修改
 * end
 *
 **/

/**分页控制start**/
//分页
app.controller("jjPageCtrl",["$q","$scope",function($q,$scope){
    //默认每页条数
    var defPageNum = 10;
    //显示页
    var defShowPageNum = $scope.detailPages;
    //初始化分页信息
    $scope.state = {
        //防止重复加载
        flipping: !0,
        //分页数据
        pages: [],
        //范围
        range: {
            min: 0,
            max: 0
        },
        //跳转页数
        jumpPage: 1,
        //总页数
        totalPages: 0,
        //每页条数
        pagesNumber: defPageNum,
        //分页中显示页
        showPageNum: defShowPageNum
    };
    var stateData = $scope.state,
        //分页数据
        jjPager = $scope.pagerInfo;
    //上一页
    $scope.prevPage = function(){
        var toPageNum = parseInt(stateData.jumpPage) - 1;
        toPageNum > 0 && $scope.gotoPage(toPageNum);
        if(toPageNum==0){
            $(".left-two").css("cursor","not-allowed");
        }
    }
    //下一页
    $scope.nextPage = function(){
        var toPageNum = parseInt(stateData.jumpPage) + 1;
        //不超过最大页数
        toPageNum <= stateData.totalPages && $scope.gotoPage(toPageNum);
        if(toPageNum > stateData.totalPages){
            $(".right-two").css("cursor","not-allowed");
        }
    }
    //首页
    $scope.firstPage = function(){
        $scope.gotoPage(1);
    }
    //末页
    $scope.lastPage = function(){
        $scope.gotoPage(stateData.totalPages);
    }
    //跳到几页
    $scope.gotoPage = function(num){
        //在正常页数内
        if(stateData.filpping || num>0 && num <=stateData.totalPages){
            //未加载过数据
            if(num != jjPager.pageNo){
                //加载数据页
                jjPager.pageNo = num,
                    //生成分页信息
                    $scope.genPageData(jjPager);
                //获取分页数据
                if(angular.isDefined($scope.onPageChange)){
                    $q.when($scope.onPageChange({
                        pager: jjPager
                    }))["finally"](function() {
                        //加载完成
                        stateData.flipping = !1;
                    });
                }
            }
        }
    }
    //生成分页信息
    $scope.genPageData = function(pagerData){
        if(pagerData){
            var pageSize = pagerData.pageSize || defPageNum;
            //总页数
            stateData.totalPages = Math.ceil(pagerData.totalElements / pageSize);
            if(pagerData.totalElements > 0&&pagerData.pageNo==0){
                //跳转页数
                stateData.jumpPage = pagerData.pageNo+1;
            }else if(pagerData.totalElements > 0&&pagerData.pageNo > 0){
                //跳转页数
                stateData.jumpPage = pagerData.pageNo;
            }
            stateData.pages = [];
            stateData.range = genRange(stateData.jumpPage, stateData.totalPages, stateData.showPageNum);
            for(var i = stateData.range.min;i<=stateData.range.max;i++){
                stateData.pages.push({
                    index: i,
                    current: i == stateData.jumpPage
                })
                //当前页
                if(i == stateData.jumpPage){
                    //当前页说明：从几到几
                    var startNum  = ((stateData.jumpPage-1)*pageSize+1);
                    var endNum = stateData.jumpPage*pageSize;
                    if(endNum>pagerData.totalElements){
                        endNum = pagerData.totalElements;
                    }
                    stateData.currentPageInfo = startNum + "-" + endNum;
                }
            }
        }
    }
    //生成范围
    function genRange(jumpPage, totalPages, showPageNum){
        var range = {
                min: 0,
                max: 0
            },
            //左右显示页数
            lrnum = parseInt((showPageNum) / 2),
            lnum = jumpPage - 1;
        range.min = lnum < lrnum ? 1 : jumpPage - lrnum,
            range.max = Math.min(totalPages, range.min + showPageNum - 1);
        //显示页数
        var curNum = range.max - range.min + 1;
        curNum < showPageNum && range.min > 1 && (range.min = Math.max(1, range.min - (showPageNum - curNum)));
        return range;
    }
    $scope.$watch("pagerInfo", function(newVal){
        //分页数据
        jjPager = newVal;
        $scope.genPageData(newVal);
    });
}]);
app.directive("jjPager",[function(){
    return {
        restrict: "A",
        scope: {
            pagerInfo: "=",
            onPageChange: "&"
        },
        templateUrl: "js/directives/jj-pager.html",
        controller:"jjPageCtrl",
        link:function(scope,element,attrs){
            //显示页数
            if(!isNaN(attrs.showpagenum)){
                scope.state.showPageNum = parseInt(attrs.showpagenum);
            }
            //生成分页信息
            scope.genPageData(scope.pagerInfo);
        }
    }
}]);
/**分页控制end**/
/**-财务工作台-start-**/
app.controller('financialController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    /*点击刷新*/
    $(".refresh").click(function () {
        $("#re-img").toggleClass("resh");
        $scope.financialStatus();
    });
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    //工作台接口对接
    var pageNo=1;//初始化页面第一页
    $scope.financialStatus=function(){
        $http.post($scope.app.host+'financeWorkbench',
        {
            token:tokenSession,
            pageSize:5,
            pageNo:pageNo
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.workbenchList=response.data.list;//工作台展示数据
                    }
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.financialStatus();
    $scope.loadingMore=function () {
        pageNo=pageNo+1;
        $http.post($scope.app.host+'financeWorkbench',
            {
                token:tokenSession,
                pageSize:5,
                pageNo:pageNo
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.workbenchList=$scope.workbenchList.concat(response.data.list);//工作台展示数据
                    }
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    /*退回更改start*/
    $scope.backchange=function($r){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isedituser=true;
        //退回更改接口对接
        $scope.update = function(){
            if(isEmpty($scope.questionRemar)){
                alert("请输入退回原因！");
                return false;
            }
            $http.post($scope.app.host+'returnUpdate',
                {
                    token:tokenSession,
                    orderNo:$scope.workbenchList[$r].orderNo,
                    questionRemark:$scope.questionRemar
                }).success(function(response) {
                 if(response.status=="200"){
                     if(response.submitStatus=="1"){
                         $scope.modalDrop=false;
                         $scope.modalDialog=false;
                         location.reload();
                     }
                 }else{
                     if(response.msg=="登陆超时,请重新登陆"){
                         $state.go('access.signin');
                     }
                 }
            });
        }
    }
    /*-结束订单-*/
    $scope.orderOrder=function($order){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isend=true;
        //结束订单接口对接
        $scope.endOorder=function(){
            $http.post($scope.app.host+'endOrder',
            {
                token:tokenSession,
                orderNo:$scope.workbenchList[$order].orderNo
            }).success(function(response) {
             if(response.status=="200"){
                 if(response.submitStatus=="1"){
                    $scope.modalDrop=false;
                    $scope.modalDialog=false;
                    location.reload();
                 }
             }else{
                 if(response.msg=="登陆超时,请重新登陆"){
                     $state.go('access.signin');
                 }
             }
        });
        }
    }
    $scope.cancel=function(){
        $scope.modalDrop=false;
        $scope.modalDialog=false;
        $scope.Isedituser=false;
        $scope.Isend=false;
    }
    /*退回更改end*/
}]);
/**财务工作台查看订单**/
app.controller('checkController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $scope.checkPrint=function(){
        var headstr = "<html><head><title></title></head><body>";  //打印头部
        var footstr = "</body></html>";  //打印尾部
        var printData = document.getElementById("print").innerHTML; //获得id 里的所有 html 数据
        var oldstr = document.body.innerHTML;
        //document.body.innerHTML = headstr+printData+footstr;
        document.body.innerHTML = headstr+printData+footstr;
        window.print();
        document.body.innerHTML = oldstr;   //保持原页面格式
        location.reload();
    }
        //查看订单接口对接
    $http.post($scope.app.host+'orderDetail',
        {
            token:tokenSession,
            orderNo:GetQueryString("orderNo")
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.orsList=response.data;//头部数据
                    $scope.markList=response.data.list;//展示数据
                    $scope.printText=response.data.orderStatus;//打印状态显示
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
    });
    $scope.cancel=function () {
        history.go(-1);
    }
}]);
/**财务工作台-收款**/
app.controller('FinancicalGather', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /**-收款查询-**/
    $http.post($scope.app.host+'confirmReceiptQuery',
        {
            token:tokenSession,
            orderNo:GetQueryString("orderNo")
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.queOrder=response.list[0];
                }
            }
    });
    $scope.payway = [];//初始化
    // 添加收款
    $scope.addPaymentWay=function($index){
        $scope.payway.push({receiptStatus:"",receiptMoney:""});
    }
    // 删除付款方式
    $scope.delPaymentWay=function($index){
        $scope.payway.splice($index, 1);
    }
    $scope.modalDrop=false;
    $scope.modalDialog=false;
    /**出库管理**/
    $scope.deliverSubmit=function () {
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        if($scope.payway.length=="0"){
            $("#textFom").show();
            return false;
        }
    }
    /*确认无误提交*/
    $scope.subClick=function () {
        var totalmoney=0;
        for(var i=0;i<$scope.payway.length;i++){
            totalmoney+=parseInt($scope.payway[i].receiptMoney);
        }
        if(totalmoney+parseInt($scope.queOrder.proceedMoney)<$scope.queOrder.costMoney){
            alert("收款金额小于订单金额，请重新输入！");
            return false;
        }else{
            $http.post($scope.app.host+'orderReceipt',
            {
                orderNo:$scope.queOrder.orderNo,
                proceedRemark:$scope.proceedRemark,
                list:$scope.payway,
                token:tokenSession,
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.modalDrop=false;
                        $scope.modalDialog=false;
                        $state.go("app.financial");
                    }
                }
            });
        }
    }
    /**再看看**/
    $scope.lseClick=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
}]);
/**--店铺转账图片查看详情-start-**/
app.controller('viewDetailsController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /**-图片查看详情-**/
    $http.post($scope.app.host+'transferImage',
        {
            token:tokenSession,
            orderNo:GetQueryString("orderNo"),
        }).success(function(response) {
        if(response.status=="200"){
            if(response.queryStatus=="1"){
                $scope.transfer=response.data;//转账查看展示数据
                $scope.imgList=response.data.list;//查看转账图片
            }
        }
    });
}]);
/**-财务商家管理-店铺转账-start-**/
app.controller('storeBoxController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /**-店铺转账查询-**/
    var pageNo=1;//初始化页面第一页
    $http.post($scope.app.host+'shopTransferQuery',
        {
            token:tokenSession,
            pageSize:5,
            pageNo:pageNo
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.workbenchList=response.data.list;//店铺转账展示数据
                    }
                }
            }
    });
    $scope.loadingMore=function () {
        pageNo=pageNo+1;
        $http.post($scope.app.host+'shopTransferQuery',
            {
                token:tokenSession,
                pageSize:5,
                pageNo:pageNo
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.workbenchList=$scope.workbenchList.concat(response.data.list);//店铺转账展示数据
                    }
                }
            }
        });
    }
}]);
/**-财务个人设置-历史对账-start-**/
app.controller('checkHistoryController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /**-历史转账查询-**/
    $http.post($scope.app.host+'checkHistory',
        {
            token:tokenSession,
            pageSize:5,
            pageNo:1
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.historyList=response.data.list;//历史转账展示数据
                    $scope.detailPages=response.data.totalPages;//总共多少页
                    $scope.detailPager= {
                        totalElements: response.data.totalRecords,
                        pageSize:5,
                        pageNo:response.data.pageNo
                    }
                }
            }
    });
    $scope.reconPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'checkHistory',
            {
                token:tokenSession,
                pageSize:5,
                pageNo:ss.pi
            }).success(function(response) {
                $scope.historyList=response.data.list;//历史转账展示数据
        });
    }
}]);
/**-财务个人设置-历史转账-end-**/
/**-财务个人设置-对账确认-start-**/
app.controller('billController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /**-对账确认查询-**/
    $http.post($scope.app.host+'confirmCheckQuery',
        {
            token:tokenSession,
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.reconciliation=response.data;//对账确认数据
                }
            }
    });
    /**-日历查询-**/
    $scope.number0=0;
    $scope.number1=1;
    $scope.number2=7;
    //初始化
    $http.post($scope.app.host+'weekQuery',
        {
            token:tokenSession,
            number1:$scope.number0,
            number2:$scope.number2,
        }).success(function(response) {
        if(response.status=="200"){
            if(response.queryStatus=="1"){
                $scope.weekList=response.data.list;//日历查询数据
                $scope.notaccontMoney=response.data.notaccontMoney;//未结算金额
                $scope.systemDate=response.data.systemDate;//未结算时间
            }
        }
    });
    /**点击未结算金额**/
    $scope.notAccountClick=function(dys){
        $(".wrap-list ul li").removeClass("cur");
        if(isEmpty(dys)){
            dys="";
        }
        $http.post($scope.app.host+'DateConfirmQuery',
            {
                token:tokenSession,
                sureDate:dys,
                sureStatus:2,
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.reconciliation=response.data;//对账确认数据
                }
            }
        });
    }
    //上一个
    $(".prev1").hide();
    $scope.prevClick=function(){
        $(".prev").show();
        $(".prev1").hide();
        $scope.number1=$scope.number1-7;
        $scope.number2=$scope.number2-7;
        if($scope.number1<0){
            $(".next").addClass("cur");
            $scope.number1=1;
            $scope.number2=7;
            return false;
        }else{
            $http.post($scope.app.host+'weekQuery',
                {
                    token:tokenSession,
                    number1:$scope.number1,
                    number2:$scope.number2,
                }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.weekList=response.data.list;//对账确认数据
                    }
                }
            });
        }
    }
    //下一个
    $scope.nextClick=function(){
        $scope.number1=$scope.number1+7;
        $scope.number2=$scope.number2+7;
        $(".next").removeClass("cur");
         $http.post($scope.app.host+'weekQuery',
            {
                token:tokenSession,
                number1:$scope.number1,
                number2:$scope.number2,
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                         $scope.weekList=response.data.list;//对账确认数据
                        if(response.data.list.length==0 || response.data.list.length<7){
                            $(".prev").hide();
                            $(".prev1").show();
                            $(".prev1").addClass("cur");
                        }
                    }
                }
        });
    }
    //weekClick-点击日历接口数据事件
    $scope.weekClick=function($index){
        var thisTr=$(".wrap-list ul").find("li");
        for(var t=0;t<thisTr.length;t++){
            if(t==$index){
                var uns=$index+1;
                $(".wrap-list ul li:nth-child("+uns+")").addClass("cur").siblings().removeClass("cur");
            }
        }
        $http.post($scope.app.host+'DateConfirmQuery',
            {
                token:tokenSession,
                sureDate:$scope.weekList[$index].sureDate,
                sureStatus:1,
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.reconciliation=response.data;//对账确认数据
                    }
                }
        });
    }
    $scope.inerrant=function (recon) {
        $http.post($scope.app.host+'confirmInerrant',
            {
                token:tokenSession,
                data:recon
            }).success(function(response) {
                console.log(response);
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.modalDrop=true;
                        $scope.modalDialog=true;
                        $scope.Isoperation=true;
                        //alert(response.msg);
                    }
                }else{
                    alert(response.msg);
                }
        });
    }
    $scope.colDetail=false;
    $scope.billCall=function(rel,date){
        $http.post($scope.app.host+'confirmCheckDetail',
            {
                token:tokenSession,
                receiptStatus:rel,
                systemDate:date,
                pageSize:10,
                pageNo:1
            }
        ).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.colDetail=true;
                    $scope.reMoney=response.data.receiptMoney;//金额
                    $scope.reStatus=response.data.receiptStatus;//哪一种支付方式
                    $scope.MonList=response.data.page.list;//列表数据
                    if(response.data.page.list.length=="0"){
                        $("#table-sive").hide();
                    }else{
                        $("#table-sive").show();
                    }
                    $scope.detailPages=response.data.page.totalPages;//总共多少页
                    $scope.detailPager= {
                        totalElements: response.data.page.totalRecords,
                        pageSize:10,
                        pageNo:response.data.page.pageNo
                    }
                }
            }
        });
    }
    $scope.billMoney=function (rel,date) {
        $scope.billCall(rel,date);
    
        $scope.billPage = function (pager) {
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            var curPage = pager.pageNo;
            var ss = {
                pi: curPage
            }
            $http.post($scope.app.host+'confirmCheckDetail',
                {
                    token:tokenSession,
                    receiptStatus:rel,
                    systemDate:date,
                    pageSize:10,
                    pageNo:ss.pi
                }).success(function(response) {
                    $scope.reMoney=response.data.receiptMoney;//金额
                    $scope.MonList=response.data.page.list;//列表数据展示
            });
        }
    }
    /*详情*/
    $scope.detailInfo=function($index){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isedituser=true;
        $http.post($scope.app.host+'orderDetail',
            {
                token:tokenSession,
                orderNo:$scope.MonList[$index].orderNo
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.orsList=response.data;//头部数据
                        $scope.markList=response.data.list;//展示数据
                    }
                }
        });
    }
    $scope.cancel=function(){
        $scope.modalDrop=false;
        $scope.modalDialog=false;
        $scope.Isedituser=false;
        $scope.Isoperation=false;
    }
}]);
/**-财务个人设置-历史转账-end-**/

/**-财务工作台-end-**/
/**数字变化**/
app.directive("incrementNumber",[function(){
    return {
        restrict: "A",
        scope:{
            incnum: "&"
        },
        link:function(scope,element,attrs){
            var totalNumber = scope.incnum;
            scope.$watch(totalNumber,function(newVal,oldVal){
                if(newVal != undefined){
                    //原来几位数
                    var diaNum = 0;
                    var numAry = newVal.split(".");
                    if(numAry.length > 1){
                        diaNum = numAry[1].length;
                    }
                    //间隔数
                    var intervalNum = parseFloat((newVal/5).toFixed(diaNum));
                    //自增数
                    var incNumber = 0;
                    function show(){
                        if(incNumber >= newVal){
                            //取消循环
                            clearInterval(intervalFuc);
                        }else{
                            incNumber = incNumber + intervalNum;
                            if(newVal-incNumber<10){
                                incNumber = newVal;
                            }
                            element.text(incNumber);
                        }
                    }
                    var intervalFuc=setInterval(show,100);
                }
            });
        }
    }
}]);
// 财务出库管理
  app.controller('DeliverManager', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
      var tokenSession=sessionStorage.getItem("session");
      if(isEmpty(tokenSession)){
          $state.go('access.signin');
          return false;
      }
      //下拉药品接口对接
      $http.post($scope.app.host+'materialQuery',
            {
                token:tokenSession,
            }).success(function(response) {
                $scope.materialList = response.materialQueryList;//下拉药品列表select
       });
      $scope.masterClick=function($index){
          $scope.material = $scope.materialList[$index].material;
          $scope.mst.html($scope.material);
          $(".maters").hide();
      }
      $scope.chosenSingle=function($index){
          $("#masters"+$index).show();
          $scope.mst = $("#material_"+$index);
      }
      $scope.payway = [];//初始化
    // 添加收款
    $scope.addPaymentWay=function($index){
        $scope.payway.push({number:''});
        $scope.authError="";
    }
    // 删除付款方式
    $scope.delPaymentWay=function($index){
      $scope.payway.splice($index, 1);
    }

    /**出库管理提交**/
    $scope.deliverSubmit=function () {
        $scope.operatorStatus="1";//类型为出库
        var lits=$(".lig");
        var payList=[];
        for(var t=0;t<lits.length;t++){
            var material=$(lits[t]).find("span")[0].innerHTML;
            var number=$scope.payway[t].number;
            payList.push({material:material,number:number});
        }
        $http.post($scope.app.host+'comeinManage',
            {
                operatorStatus:$scope.operatorStatus,
                operator:$scope.operator,
                list:payList,
                token:tokenSession,
                orderNo:GetQueryString("orderNo"),
            }).success(function(response) {
                if(response.status=="200"){
                    $scope.authError="出库"+response.msg;
                    $scope.delPaymentWay();
                    $scope.operator="";
                    $state.go('app.financial');
                }else if(response.status=="800"){
                    $scope.authError=response.msg;
                }
        });
    }
  }]);
// 新增入库
app.controller('incomManager', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    //下拉药品接口对接
    $http.post($scope.app.host+'materialQuery',
        {
            token:tokenSession,
        }).success(function(response) {
        $scope.materialList = response.materialQueryList;//下拉药品列表select
    });
    $scope.masterCk=function($index){
        $scope.materials = $scope.materialList[$index].material;
        $scope.mst.html($scope.materials);
        $(".mater").hide();
    }
    $scope.chosenSing=function($index){
        $("#master"+$index).show();
        $scope.mst = $("#materia_"+$index);
    }
    $scope.payway = [];//初始化
    // 添加收款
    $scope.addPaymentWay=function($index){
        $scope.payway.push({number:''});
    }
    // 删除付款方式
    $scope.delPaymentWay=function($index){
        $scope.payway.splice($index, 1);
    }

    /**新增入库提交**/
    $scope.deliverSubmit=function () {
        $scope.operatorStatus="2";//类型为入库
        var lits=$(".lights");
        var payList=[];
        for(var t=0;t<lits.length;t++){
            var material=$(lits[t]).find("span")[0].innerHTML;
            var number=$scope.payway[t].number;
            payList.push({material:material,number:number});
        }
        $http.post($scope.app.host+'insertIncoming',
            {
                operatorStatus:$scope.operatorStatus,
                operator:$scope.operName,
                list:payList,
                token:tokenSession,
            }).success(function(response) {
            if(response.status=="200"){
                $scope.incomeError="入库"+response.msg;
                $scope.delPaymentWay();
                $scope.operName="";
                $state.go('app.financial');
            }else if(response.status=="800"){
                $scope.incomeError=response.msg;
            }
        });
    }
}]);
// 财务入库管理
app.controller('StoreManager', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    //下拉药品接口对接
    $http.post($scope.app.host+'materialQuery',
        {
            token:tokenSession,
        }).success(function(response) {
        $scope.materialList = response.materialQueryList;//下拉药品列表select
    });
    $scope.masterCk=function($index){
          $scope.materials = $scope.materialList[$index].material;
          $scope.mst.html($scope.materials);
          $(".mater").hide();
    }
    $scope.chosenSing=function($index){
        $("#master"+$index).show();
        $scope.mst = $("#materia_"+$index);
    }
    $scope.payway = [];//初始化
    // 添加收款
    $scope.addPaymentWay=function($index){
        $scope.payway.push({number:''});
    }
    // 删除付款方式
    $scope.delPaymentWay=function($index){
        $scope.payway.splice($index, 1);
    }

    /**入库管理提交**/
    $scope.deliverSubmit=function () {
        $scope.operatorStatus="2";//类型为入库
        var lits=$(".lights");
        var payList=[];
        for(var t=0;t<lits.length;t++){
            var material=$(lits[t]).find("span")[0].innerHTML;
            var number=$scope.payway[t].number;
            payList.push({material:material,number:number});
        }
        $http.post($scope.app.host+'comeinManage',
            {
                operatorStatus:$scope.operatorStatus,
                operator:$scope.operName,
                list:payList,
                token:tokenSession,
                orderNo:GetQueryString("orderNo"),
            }).success(function(response) {
                if(response.status=="200"){
                    $scope.authError="";
                    $scope.storeError="入库"+response.msg;
                    $scope.delPaymentWay();
                    $scope.operName="";
                    $state.go('app.room.warehouse');
                }else if(response.status=="800"){
                    $scope.storeError=response.msg;
                }
        });
    }
}]);

/**仓库管理出入记录-start**/
app.controller('recordsExportController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user={};
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    if(isEmpty(GetQueryString("materialId"))){
        $("#Isshow").show();
        $scope.Screening=function(){
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            if(isEmpty($scope.sex)){
                $scope.user.operatorStatus="";
            }
            $scope.issex=function(){
                $scope.user.operatorStatus=$scope.sex;
            }
            if(isEmpty($scope.user.queryData)){
                $scope.user.queryData="";
            }
            if(isEmpty($scope.dt)){
                $scope.dt="";
            }
            if(isEmpty($scope.dts)){
                $scope.dts="";
            }
            $scope.user.materialId="";
            $http.post($scope.app.host+'comeinRecord',
                {
                    operatorStatus:$scope.user.operatorStatus,
                    queryData:$scope.user.queryData,
                    materialId:$scope.user.materialId,
                    startDate:$scope.dt,
                    stopDate:$scope.dts,
                    token:tokenSession,
                    pageSize:10,
                    pageNo:1
                }).success(function(response) {
                   if(response.status=="200"){
                       if(response.data.list.length==0){
                        $scope.NoRecords=true;
                        $scope.IsRecords=false;
                       }else{
                            $scope.NoRecords=false;
                            $scope.IsRecords=true;
                            $scope.recordsList=response.data.list;
                            $scope.detailPages=response.data.totalPages;//总共多少页
                            $scope.detailPager= {
                                totalElements: response.data.totalRecords,
                                pageSize:10,
                                pageNo:response.data.pageNo
                            }
                       }
                   }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
        $scope.Screening();
        $scope.recordPage = function (pager) {
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            var curPage = pager.pageNo;
            var ss = {
                pi: curPage
            }
            if(isEmpty($scope.dt)){
                $scope.dt="";
            }
            $http.post($scope.app.host+'comeinRecord',
                {
                    operatorStatus:$scope.user.operatorStatus,
                    queryData:$scope.user.queryData,
                    materialId:$scope.user.materialId,
                    startDate:$scope.dt,
                    stopDate:$scope.dts,
                    token:tokenSession,
                    pageSize:10,
                    pageNo:ss.pi
                }).success(function(response) {
                    $scope.recordsList=response.data.list;
            });
        }
    }else{
        $("#Isshow").hide();
        $scope.user.materialId=GetQueryString("materialId");
        $http.post($scope.app.host+'comeinRecord',
            {   
                operatorStatus:"",
                queryData:"",
                startDate:"",
                stopDate:"",
                materialId:$scope.user.materialId,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
            if(response.data.list.length==0){
                $scope.NoRecords=true;
                $scope.IsRecords=false;
            }else{
                $scope.NoRecords=false;
                $scope.IsRecords=true;
                $scope.recordsList=response.data.list;
                $scope.detailPages=response.data.totalPages;//总共多少页
                $scope.detailPager= {
                    totalElements: response.data.totalRecords,
                    pageSize:10,
                    pageNo:response.data.pageNo
                }
            }
        });
        $scope.recordPage = function (pager) {
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            var curPage = pager.pageNo;
            var ss = {
                pi: curPage
            }
            $http.post($scope.app.host+'comeinRecord',
                {
                    operatorStatus:"",
                    queryData:"",
                    startDate:"",
                    stopDate:"",
                    materialId:$scope.user.materialId,
                    token:tokenSession,
                    pageSize:10,
                    pageNo:ss.pi
                }).success(function(response) {
                    $scope.recordsList=response.data.list;
            });
        }
    }
    /**出入记录切换页**/
    
    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
       /* var dt = new Date();
        //开始时间
        $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
        $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/
}])
;
/**仓库管理出入记录-end**/
/**仓库库存-start**/
app.controller('wareHouseStockController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    if(isEmpty($scope.materialName)){
        $scope.materialName="";
    }
    $(".rank").click(function () {
        $(this).removeClass("sorting");
        if($(this).hasClass("sorting_asc")){
            $(this).removeClass("sorting_asc").addClass("sorting_desc");
            $http.post($scope.app.host+'inventoryManage',
                {
                    sortStatus:"2",
                    materialName:$scope.materialName,
                    token:tokenSession,
                    pageSize:10,
                    pageNo:1
                }).success(function(response) {
                if(response.data.list.length=="0"){
                    $scope.NoRecords=true;
                    $scope.IsRecords=false;
                }else{
                    $scope.NoRecords=false;
                    $scope.IsRecords=true;
                    $scope.wareList=response.data.list;
                    $scope.detailPages=response.data.totalPages;//总共多少页
                    $scope.detailPager= {
                        totalElements: response.data.totalRecords,
                        pageSize:10,
                        pageNo:response.data.pageNo,
                        sortStatus:"2"
                    }
                }
            });
        }else{
            $(this).addClass("sorting_asc").removeClass("sorting_desc");
            $http.post($scope.app.host+'inventoryManage',
                {
                    sortStatus:"1",
                    materialName:$scope.materialName,
                    token:tokenSession,
                    pageSize:10,
                    pageNo:1
                }).success(function(response) {
                if(response.data.list.length=="0"){
                    $scope.NoRecords=true;
                    $scope.IsRecords=false;
                }else{
                    $scope.NoRecords=false;
                    $scope.IsRecords=true;
                    $scope.wareList=response.data.list;
                    $scope.detailPages=response.data.totalPages;//总共多少页
                    $scope.detailPager= {
                        totalElements: response.data.totalRecords,
                        pageSize:10,
                        pageNo:response.data.pageNo,
                        sortStatus:"1"
                    }
                }
            });
        }
    });
    /**查询库存**/
    var sortStatus="1";
    $scope.wareQuery=function(){
        $http.post($scope.app.host+'inventoryManage',
            {
                sortStatus:"1",
                materialName:$scope.materialName,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
            if(response.data.list.length=="0"){
                $scope.NoRecords=true;
                $scope.IsRecords=false;
            }else{
                $scope.NoRecords=false;
                $scope.IsRecords=true;
                $scope.wareList=response.data.list;
                $scope.detailPages=response.data.totalPages;//总共多少页
                $scope.detailPager= {
                    totalElements: response.data.totalRecords,
                    pageSize:10,
                    pageNo:response.data.pageNo,
                    sortStatus:"1"
                }
            }
        });
    }
    $http.post($scope.app.host+'inventoryManage',
        {
            sortStatus:"1",
            materialName:$scope.materialName,
            token:tokenSession,
            pageSize:10,
            pageNo:1
        }).success(function(response) {
        if(response.data.list.length=="0"){
            $scope.NoRecords=true;
            $scope.IsRecords=false;
        }else{
            $scope.NoRecords=false;
            $scope.IsRecords=true;
            $scope.wareList=response.data.list;
            $scope.detailPages=response.data.totalPages;//总共多少页
            $scope.detailPager= {
                totalElements: response.data.totalRecords,
                pageSize:10,
                pageNo:response.data.pageNo,
                sortStatus:"1"
            }
        }
    });
    /**出入记录切换页**/
    $scope.recordPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var sortStatus= pager.sortStatus;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'inventoryManage',
            {
                sortStatus:sortStatus,
                materialName:$scope.materialName,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.wareList=response.data.list;
        });
    }
}])
;
/*客户管理--客户名单*/
app.controller('UserManagerController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    $scope.Isusermanager=true;   //客户名单显示
    $scope.noTable=false;
    $scope.user = {};
    $scope.authError = null;
    //客户名单查询
    $scope.Screening=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.searchcustomername)){
            $scope.user.searchcustomername="";
        }
        if(isEmpty($scope.user.searchcustomerphone)){
            $scope.user.searchcustomerphone="";
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        if(isEmpty($scope.dts)){
            $scope.dts="";
        }
        $http.post($scope.app.host+'customerQuerys',
            {
                customername:$scope.user.searchcustomername,
                customerphone:$scope.user.searchcustomerphone,
                createtimeStartdate:$scope.dt,
                createtimeStopdate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
               if(response.status=="200"){
                   if(response.data.list.length=="0"){
                       $scope.noTable=true;//暂无数据初始化
                       $scope.queryResult=false;//列表数据初始化
                   }else if(response.data.list.length>0){
                       $scope.noTable=false;//暂无数据初始化
                       $scope.queryResult=true;//列表数据初始化
                       $scope.rollList=response.data.list;
                       $scope.detailPages=response.data.totalPages;//总共多少页
                       $scope.detailPager= {
                           totalElements: response.data.totalRecords,
                           pageSize:10,
                           pageNo:response.data.pageNo
                       }
                   }
               }
        });
    }
    $scope.Screening();
    /*--客户名单查询结束--*/
    /*客户名单修改页开始*/
    $scope.modalDrop=false;
    $scope.modalDialog=false;
    $scope.edituser = function (size) {
        $scope.checkBox=[{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0}];
        $scope.modelauthError=null;
        $scope.user={};
        $scope.user.customerid=size;
        var tokenSession=sessionStorage.getItem("session");
         if(isEmpty(tokenSession)){
             $state.go('access.signin');
             return false;
         }
        $http.post($scope.app.host+'customerMessage',
            {
                customerid:$scope.user.customerid,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                 $scope.user.customername=response.data.customername;
                 $scope.user.customerphone=response.data.customerphone;
                 $scope.user.idno=response.data.idno;
                 $scope.user.birthday=response.data.birthday;
                 $scope.user.birthplace=response.data.birthplace;
                 $scope.user.permanentplace=response.data.permanentplace;
                 $scope.user.permanentplace=response.data.permanentplace;
                 $scope.user.othercontagion=response.data.othercontagion;
                 $scope.medicinehistory=response.data.medicinehistory;
                $scope.commonhistory=response.data.commonhistory;
                $scope.user.idno=response.data.idno;
                $scope.commonhistory=response.data.commonhistory;
                /*性别判断*/ 
                if(isEmpty(response.data.sex)){
                    $scope.sex='0';
                }else{
                    $scope.sex=response.data.sex;
                }
                /*婚姻状况判断*/
                if(isEmpty(response.data.marriage)){
                    $scope.marriage='0';
                }else{
                    $scope.marriage=response.data.marriage;
                }
                 if(!isEmpty(response.data.commonhistory)){
                    var commonhistory=response.data.commonhistory.split(",");
                    for(var i in commonhistory) {
                        $scope.checkBox[commonhistory[i]].a=true;
                    }
                }else{
                    var commonhistory=response.data.commonhistory;
                }
                if($scope.user.othercontagion=="null"){
                    $scope.user.othercontagion="";
                }
                if($scope.medicinehistory=="null"){
                    $scope.medicinehistory="";
                }
             }
            $scope.modalDrop=true;
            $scope.modalDialog=true;
            $scope.Isedituser=true;
        });
    };

    /**客户详情返回事件处理**/
    $scope.cancel=function () {
        // $scope.Screening();
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /*客户名单修改页结束*/

    /*客户名单修改提交*/
        //身份证号出生年月

    $scope.Idno=function(){
        if(!isEmpty($scope.user.idno)){
            var ymd=$scope.user.idno.substring(6,10)+"-"+$scope.user.idno.substring(10,12)+"-"+$scope.user.idno.substring(12,14);
            $scope.user.birthday=ymd;
        }
    }
    // 性别
    $scope.issex=function(){
        $scope.sex=$scope.sex;
    }
    // 婚姻状况
    $scope.ismarriage=function(){
        $scope.marriage=$scope.marriage;
    }
    $scope.update=function(){
        $scope.modelauthError=null;
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        // 常见疾病复选框选取
        var common="";
        for(var i in $scope.checkBox){
            if($scope.checkBox[i].a){
                common+=(+i)+",";
            }
        }
        var commonhistory=common.substr(0, common.length - 1);
        $scope.user.commonhistory=commonhistory;
        if(isEmpty(commonhistory)){
            $scope.modelauthError="请选择常见疾病后再修改";
            return false;
        }
        $http.post($scope.app.host+'customerUpdate',
            {
                customername:$scope.user.customername,
                customerphone:$scope.user.customerphone,
                commonhistory:$scope.user.commonhistory,
                sex:$scope.sex,
                marriage:$scope.marriage,
                idno:$scope.user.idno,
                birthday:$scope.user.birthday,
                birthplace:$scope.user.birthplace,
                permanentplace:$scope.user.permanentplace,
                othercontagion:$scope.user.othercontagion,
                medicinehistory:$scope.medicinehistory,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.summitstatus=="1"){
                    $scope.modelauthError="修改客户信息成功!";
                    var $name=$("#formTable").find("[type='text']");
                    $name.each(function () {
                        $(this).val("");
                    });
                    $("input[name='ckb']").attr("checked",false);
                    $scope.user.othercontagion="";
                    $scope.medicinehistory="";
                    $scope.sex="0";
                    $scope.marriage="0";
                    $scope.modalDrop=false;
                    $scope.modalDialog=false;
                    $scope.Screening();
                }
            }
            if(response.status=="800"){
                $scope.modelauthError=response.msg;
            }
        });
    }
    /*客户名单修改提交结束*/
    //分页查询
    $scope.cagPage = function (pager) {
        if(isEmpty($scope.user.searchcustomername)){
            $scope.user.searchcustomername="";
        }
        if(isEmpty($scope.user.searchcustomerphone)){
            $scope.user.searchcustomerphone="";
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        if(isEmpty($scope.dts)){
            $scope.dts="";
        }
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'customerQuerys',
            {
                customername:$scope.user.searchcustomername,
                customerphone:$scope.user.searchcustomerphone,
                createtimeStartdate:$scope.dt,
                createtimeStopdate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.noTable=false;//暂无数据初始化
            $scope.queryResult=true;//列表数据初始化
            $scope.rollList=response.data.list;
        });
    }
    //分页查询结束


    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
       /* var dt = new Date();
        //开始时间
        $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
        $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/
}
])
/*客户名单/历史订单start*/
app.controller('historyorderController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.noTable=false;
    $scope.queryResult=false;
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'appointmentQuery',
        {
            customerId:GetQueryString("custoid"),
            pageSize:10,
            pageNo:1,
            token:tokenSession
        }).success(function(response) {
        if(response.status=="200"){
            if(response.queryStatus=="1"){
                if(response.data.list.length==0){
                    $scope.noTable=true;//暂无数据初始化
                    $scope.queryResult=false;//列表数据初始化
                }else{
                    $scope.noTable=false;//暂无数据初始化
                    $scope.queryResult=true;//列表数据初始化
                    $scope.rollList=response.data.list;
                    $scope.detailPages=response.data.totalPages;//总共多少页
                    $scope.detailPager= {
                        totalElements:response.data.totalRecords,
                        pageSize:5,
                        pageNo:response.data.pageNo
                    }
                }
            }
        }
        if(response.status=="800"){
            $scope.authError=response.msg;
        }
    });
    //分页查询
    $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'myselfCustomer',
            {
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.noTable=false;//暂无数据初始化
            $scope.queryResult=true;//列表数据初始化
            $scope.rollList=response.data.list;
        });
    }
    //分页查询结束
    /**客户详情返回事件处理**/
    $scope.cancel=function () {
        history.go(-1);
        //$state.go("app.form.historyorder");
    }
}
])
/*客户名单/历史订单end*/
/*客户管理--新增客户*/
app.controller('UserAddController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user={};
    $scope.authError=null;
    // 性别
    $scope.issex=function(){
        $scope.sex=$scope.sex;
    }
    // 婚姻状况
    $scope.ismarriage=function(){
        $scope.marriage=$scope.marriage;
    }
    //身份证号出生年月
    $scope.Idno=function(){
        var ymd=$scope.user.idno.substring(6,10)+"-"+$scope.user.idno.substring(10,12)+"-"+$scope.user.idno.substring(12,14);
        $scope.user.birthday=ymd;
    }
    $scope.add=function () {
        // 复选框选取
        var common="";
        $("input[name='ckb']").each(function(){
            if($(this).is(":checked"))
            {
                common+=$(this).val()+''+',';
            }   
        });
        var commonhistory=common.substr(0, common.length - 1);
        if(isEmpty(commonhistory)){
            $scope.authError="请选择常见疾病后再提交";
            return false;
        }
        $scope.user.commonhistory=commonhistory;
        var tokenSession=sessionStorage.getItem("session");
        $http.post($scope.app.host+'customerInsert',
            {
                customername:$scope.user.customername,
                customerphone:$scope.user.customerphone,
                commonhistory:$scope.user.commonhistory,
                sex:$scope.sex,
                idno:$scope.user.idno,
                birthday:$scope.user.birthday,
                marriage:$scope.marriage,
                birthplace:$scope.user.birthplace,
                permanentplace:$scope.user.permanentplace,
                othercontagion:$scope.user.othercontagion,
                medicinehistory:$scope.medicinehistory,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.summitStatus=="1"){
                    $scope.authError="新增客户信息成功!";
                    // $scope.customerTable=false;
                    var $name=$("#formTable").find("[type='text']");
                    $name.each(function () {
                        $(this).val("");
                    });
                    $("input[name='ckb']").attr("checked",false);
                    $scope.user.othercontagion="";
                    $scope.medicinehistory="";
                    $scope.sex="0";
                    $scope.marriage="0";
                }
            }
            if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
    }

    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
       /* var dt = new Date();
        //开始时间
        $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
        $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/
}
])
/*设计师我的客户*/
app.controller('MyCustomController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'myselfCustomer',
        {
            token:tokenSession,
            pageSize:10,
            pageNo:1
        }).success(function(response) {
        if(response.status=="200"){
            if(response.data.list.length==0){
                 $scope.noTable=true;//暂无数据初始化
                 $scope.queryResult=false;//列表数据初始化
            }else{
                 $scope.noTable=false;//暂无数据初始化
                 $scope.queryResult=true;//列表数据初始化
                $scope.rollList=response.data.list;
                $scope.detailPages=response.data.totalPages;//总共多少页
                $scope.detailPager= {
                    totalElements: response.data.totalRecords,
                    pageSize:10,
                    pageNo:response.data.pageNo
                }
            }
        }
    });
    //分页查询
    $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'myselfCustomer',
            {
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.noTable=false;//暂无数据初始化
            $scope.queryResult=true;//列表数据初始化
            $scope.rollList=response.data.list;
        });
    }
    //分页查询结束
    /**编辑信息**/
    $scope.modalDrop=false;
    $scope.modalDialog=false;
    $scope.openRecordsId = function (size) {
        $http.post($scope.app.host+'detailAppoint',
            {
                orderno:$scope.recordList[size].orderNo,
                token:tokenSession,
            }).success(function(response) {
            $scope.modalDrop=true;
            $scope.modalDialog=true;
            $scope.aboutList=response.data;//预约详情
        });
        $http.post($scope.app.host+'detailCustomer',
            {
                customerid:$scope.recordList[size].customerId,
                token:tokenSession,
            }).success(function(response) {
            $scope.modalDrop=true;
            $scope.modalDialog=true;
            $scope.clientDetails=response.data;//客户详情
        });
    };
    /**编辑信息返回事件处理**/
    $scope.goBack=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /**客户详情返回事件处理**/
    $scope.cancel=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
}
])
/*--设计师我的客户结束*/


/*设计师添加项目*/
app.controller('AddProController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;
    //项目一选择
    $scope.onepleaseSelect=true;//咨询医生初始化值
    $scope.onedgner=false;//选中值
    $scope.onechosenDrop=false;
    //显示第一个搜索框
    $scope.oneSingle=function(){
        $scope.onechosenDrop=!$scope.onechosenDrop;
        $scope.twochosenDrop=false;   
        $scope.threechosenDrop=false;  // 隐藏另两个输入框
        $scope.onepleaseSelect=true;
        $(".onechosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.projectType="1";//定义哪一个类别
        $scope.user.oneProjectname="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'projectQuery',{
            projectType:$scope.user.projectType,
            token:tokenSession,
            projectName:$scope.user.oneProjectname
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.projectQueryList=response.projectQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //选中项目1
    $scope.oneProject=function ($index) {
        $scope.onepleaseSelect=false;//咨询医生初始化值
        $scope.onedgner=true;//选中值
        $scope.onechosenDrop=false;
        $scope.user.oneProjectname=$scope.projectQueryList[$index].projectName;
        $scope.user.oneprojectid=$scope.projectQueryList[$index].projectId;
        $scope.user.oneName="";
        $scope.twopleaseSelect=true;  //重置项目2
        $scope.twopleaseSelect=true;  //重置项目3
    }
    //项目二选择
    $scope.twopleaseSelect=true;//咨询医生初始化值
    $scope.twodgner=false;//选中值
    $scope.twochosenDrop=false;
    //显示第二个搜索框
    $scope.twoSingle=function(){
        $scope.twochosenDrop=!$scope.twochosenDrop;
        $scope.onechosenDrop=false;   
        $scope.threechosenDrop=false;  // 隐藏另两个输入框
        $scope.twopleaseSelect=true;
        $(".twochosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.projectType="2";//定义哪一个类别
        $scope.user.twoProjectName="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'projectQuery',{
            projectType:$scope.user.projectType,
            token:tokenSession,
            projectName:$scope.user.twoProjectName,
            projectId:$scope.user.oneprojectid
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.projectQueryList=response.projectQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //选中项目2
    $scope.twoProject=function ($index) {
        $scope.twopleaseSelect=false;//咨询医生初始化值
        $scope.twodgner=true;//选中值
        $scope.twochosenDrop=false;
        $scope.user.twoProjectName=$scope.projectQueryList[$index].projectName;
        $scope.user.twoprojectid=$scope.projectQueryList[$index].projectId;
        $scope.user.twomediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目2价钱*/
        if($scope.user.twomediaPrice!="0.00"){
            $scope.user.salePrice=parseFloat($scope.user.twomediaPrice);
            $scope.user.comparemoney=parseFloat($scope.user.twomediaPrice);
        }
        $scope.user.twoName="";
        $scope.threepleaseSelect=true;  //重置项目3
    }
    //项目三选择
    $scope.threepleaseSelect=true;//咨询医生初始化值
    $scope.threedgner=false;//选中值
    $scope.threechosenDrop=false;
    //显示第三个搜索框
    $scope.threeSingle=function(){
        $scope.threechosenDrop=!$scope.threechosenDrop;
        $scope.onechosenDrop=false;   
        $scope.twochosenDrop=false;  // 隐藏另两个输入框
        $scope.threepleaseSelect=true;
        $(".threechosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.projectType="3";//定义哪一个类别
        $scope.user.threeProjectName="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'projectQuery',{
            projectType:$scope.user.projectType,
            token:tokenSession,
            projectName:$scope.user.threeProjectName,
            projectId:$scope.user.twoprojectid
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.projectQueryList=response.projectQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //选中项目3
    $scope.threeProject=function ($index) {
        $scope.threepleaseSelect=false;//咨询医生初始化值
        $scope.threedgner=true;//选中值
        $scope.threechosenDrop=false;
        $scope.user.threeProjectName=$scope.projectQueryList[$index].projectName;
        $scope.user.threeprojectid=$scope.projectQueryList[$index].projectid;
        $scope.user.threemediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目3价钱*/
        $scope.user.threeName="";
        if($scope.user.threemediaPrice!="0.00"){
            $scope.user.salePrice=parseFloat($scope.user.threemediaPrice);
            $scope.user.comparemoney=parseFloat($scope.user.threemediaPrice);
        }
    }

    $scope.projectSub=function(){
        if(isEmpty($scope.user.projectremark)){
            $scope.authError="请选择项目";
            return false;
        }
        if(isEmpty($scope.user.oneProjectname)){
            $scope.user.oneProjectname="";
        }
        if(isEmpty($scope.user.twoProjectName)){
            $scope.user.twoProjectName="";
        }
        if(isEmpty($scope.user.threeProjectName)){
            $scope.user.threeProjectName="";
        }
        if(isEmpty($scope.user.projectremark)){
            $scope.user.projectremark="";
        }
        /*判断自定义金额*/
        if($scope.user.threemediaPrice){
            if($scope.user.threemediaPrice-$scope.user.salePrice>0){
                $scope.authError="价格低于项目价格，请重输!";
                return false;
            }else{
                $scope.authError=null;
                $scope.user.meadiaPrice=$scope.user.threemediaPrice;
            }
        }else if($scope.user.twomediaPrice){
            if($scope.user.twomediaPrice=="0.00"){
                $scope.authError="请输入三级项目！";
                return false;
            }
            if($scope.user.twomediaPrice-$scope.user.salePrice>0){
                $scope.authError="价格低于项目价格，请重输!";
                return false;
            }else{
                $scope.authError=null;
                $scope.user.meadiaPrice=$scope.user.twomediaPrice;
            }
        }else{
            if($scope.user.onemediaPrice-$scope.user.salePrice>0){
                $scope.authError="价格低于项目价格，请重输!";
                return false;
            }else{
                $scope.authError=null;
                $scope.user.meadiaPrice=$scope.user.onemediaPrice;
            }
        }

        if($scope.user.threeProjectName){
            $http.post($scope.app.host+'insertProject',{
                token:tokenSession,
                oneProjectname:$scope.user.oneProjectname,
                twoProjectname:$scope.user.twoProjectName,
                threeProjectname:$scope.user.threeProjectName,
                projectremark:$scope.user.projectremark,
                salePrice:$scope.user.salePrice,
                meadiaPrice:$scope.user.meadiaPrice
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.authError=response.msg;
                        $state.go('app.stylist.mypro');
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }else if($scope.user.twoProjectName){
            $http.post($scope.app.host+'insertProject',{
                token:tokenSession,
                oneProjectname:$scope.user.oneProjectname,
                twoProjectname:$scope.user.twoProjectName,
                threeProjectname:$scope.user.threeProjectName,
                projectremark:$scope.user.projectremark,
                salePrice:$scope.user.salePrice,
                meadiaPrice:$scope.user.meadiaPrice
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.authError=response.msg;
                        $state.go('app.stylist.mypro');
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }else if($scope.user.oneProjectname){
            $http.post($scope.app.host+'insertProject',{
                token:tokenSession,
                oneProjectname:$scope.user.oneProjectname,
                twoProjectname:$scope.user.twoProjectName,
                threeProjectname:$scope.user.threeProjectName,
                projectremark:$scope.user.projectremark,
                salePrice:$scope.user.salePrice,
                meadiaPrice:$scope.user.meadiaPrice
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.authError=response.msg;
                        $state.go('app.stylist.mypro');
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }else{
            $scope.authError="请选择项目";
            return false;
        }
    }
    $scope.Ismoneycorrect=function(){
        if($scope.user.salePrice<$scope.user.comparemoney){
            $("#inp1").css("borderColor","red");
            $(".sub-bttn").attr("disabled",true);
        }else{
            $("#inp1").css("borderColor","green");
            $(".sub-bttn").attr("disabled",false);
        }
    }

    /**预约名单end**/

    /**渠道start**/
    /**渠道默认初始化**/
    $scope.channelSelect=true;//渠道初始化值
    $scope.canel=false;//选中值
    $scope.channelDrop=false;
    //显示搜索框
    $scope.channelSingle=function(){
        $scope.channelDrop=!$scope.channelDrop;
        $scope.channelSelect=true;
        $(".channel").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.sourcename="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'sourceQuery',{token:tokenSession,sourcename:$scope.user.sourcename}).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.sourceQueries=response.sourceQueries;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //模糊查询
    $scope.channelChange=function () {
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.sourcename="";//定义为空
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
        }else{
            //请求热搜数据
            $http.post($scope.app.host+'sourceQuery',{token:tokenSession,sourcename:$scope.user.chaName}).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.sourceQueries=response.sourceQueries;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    //选中咨询医生
    $scope.channelClick=function ($index) {
        $scope.channelSelect=false;//咨询医生初始化值
        $scope.canel=true;//选中值
        $scope.channelDrop=false;
        $scope.user.ordersource=$scope.sourceQueries[$index].sourcename;
        $scope.user.chaName="";
    }
    /**渠道end**/
    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
        /* var dt = new Date();
         //开始时间
         $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
         $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/

    /**客户资料查询-start**/
    $scope.noTable=false;//暂无数据初始化
    $scope.tableRolls=false;//列表数据初始化
    $scope.filtrate = function () {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.name)){
            $scope.user.name="";
        }
        if(isEmpty($scope.user.phone)){
            $scope.user.phone="";
        }
        if(isEmpty($scope.user.designame)){
            $scope.user.designame="";
        }
        if(isEmpty($scope.user.ordersource)){
            $scope.user.ordersource="";
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        if(isEmpty($scope.dts)){
            $scope.dts="";
        }
        $http.post($scope.app.host+'orderQuery',
            {
                name:$scope.user.name,
                phone:$scope.user.phone,
                designername:$scope.user.designame,
                ordersource:$scope.user.ordersource,
                appointbegindate:$scope.dt,
                appointenddate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
            if(response.status=="200"){
                if(response.data.list.length=="0"){
                    $scope.noTable=true;//暂无数据初始化
                    $scope.tableRolls=false;//列表数据初始化
                }else if(response.data.list.length>1){
                    $scope.noTable=false;//暂无数据初始化
                    $scope.tableRolls=true;//列表数据初始化
                    $scope.rollList=response.data.list;
                    $scope.detailPages=response.data.totalPages;//总共多少页
                    $scope.detailPager= {
                        totalElements: response.data.totalRecords,
                        pageSize:10,
                        pageNo:response.data.pageNo
                    }
                }
            }else if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
    }
    $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'orderQuery',
            {
                name:$scope.user.name,
                phone:$scope.user.phone,
                designername:$scope.user.designame,
                ordersource:$scope.user.ordersource,
                appointbegindate:$scope.dt,
                appointenddate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.noTable=false;//暂无数据初始化
            $scope.tableRolls=true;//列表数据初始化
            $scope.rollList=response.data.list;
        });
    }
    /**客户资料提交-end**/
}]);
/*设计师添加项目结束*/
/*设计师我的项目*/
app.controller('MyProjectController', ['$scope', '$http','$q','$state','$timeout','$filter', function($scope, $http,$q, $state,$timeout,$filter) {
    // $scope.user={};
    // $scope.user.pageSize=3;
    // $scope.user.pageNo=1;
    var pageNo=1;
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /*初始化请求我的项目数据*/
    $scope.myprojectStatus=function(){
        $http.post($scope.app.host+'myselfProject',{
            pageNo:pageNo,
            pageSize:5,
            token:tokenSession,
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.myProjectList=response.data.list;
                    }
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.myprojectStatus();
    /*初始化请求我的项目数据结束*/
    /*加载更多*/
    $scope.loadingMore=function () {
        pageNo=pageNo+1;
        $http.post($scope.app.host+'myselfProject',
            {
                token:tokenSession,
                pageSize:5,
                pageNo:pageNo
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.myProjectList=$scope.myProjectList.concat(response.data.list);
                    }
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    /*编辑项目信息*/
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $scope.modalDrop=false;
    $scope.modalDialog=false;
    $scope.updateRecordsId=function(index){
        $http.post($scope.app.host+'updateQuery',{
            projectId:index,
            token:tokenSession,
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    /*自定义项目名称*/
                    $scope.user.projectremark=response.data.projectRemark;
                    /*自定义金额*/
                    $scope.user.salePrice=response.data.salePrice;
                    $scope.user.mediaPrice=response.data.meadiaPrice;
                    /*判断第一个项目是否存在，存在就显示*/
                    if(response.data.oneProjectname){
                        $scope.onepleaseSelect=false;
                        $scope.onedgner=true;
                        $scope.user.oneProjectname=response.data.oneProjectname;
                    }
                    /*判断第二个项目是否存在，存在就显示*/
                    if(response.data.twoProjectname){
                        $scope.twopleaseSelect=false;
                        $scope.twodgner=true;
                        $scope.user.twoProjectName=response.data.twoProjectname;
                    }
                    /*判断第三个项目是否存在，存在就显示*/
                    if(response.data.threeProjectname){
                        $scope.threepleaseSelect=false;
                        $scope.threedgner=true;
                        $scope.user.threeProjectname=response.data.threeProjectname;
                    }
                    $scope.modalDrop=true;
                    $scope.modalDialog=true;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
        $scope.Ismoneycorrect=function(){
            if($scope.user.salePrice<$scope.user.comparemoney){
                $("#inp1").css("borderColor","red");
                $(".sub-bttn").attr("disabled",true);
            }else{
                $("#inp1").css("borderColor","green");
                $(".sub-bttn").attr("disabled",false);
            }
        }
        /*修改信息提交开始*/
        $scope.projectSub=function(){
            if(isEmpty($scope.user.projectremark)){
                $scope.authError="请选择项目";
                return false;
            }
            /*判断自定义金额*/
            if(isEmpty($scope.user.oneProjectname)){
                $scope.user.oneProjectname="";
            }
            if(isEmpty($scope.user.twoProjectName)){
                $scope.user.twoProjectName="";
            }
            if(isEmpty($scope.user.threeProjectname)){
                $scope.user.threeProjectname="";
            }
            if(isEmpty($scope.user.projectremark)){
                $scope.user.projectremark="";
            }
            if($scope.user.threemediaPrice){
                if($scope.user.threemediaPrice-$scope.user.salePrice>0){
                    $scope.authError="价格低于项目价格，请重输!";
                    return false;
                }else{
                    $scope.authError=null;
                    $scope.user.meadiaPrice=$scope.user.threemediaPrice;
                }
            }else if($scope.user.twomediaPrice){
                if($scope.user.twomediaPrice=="0.00"){
                    $scope.authError="请输入三级项目！";
                    return false;
                }
                if($scope.user.twomediaPrice-$scope.user.salePrice>0){
                    $scope.authError="价格低于项目价格，请重输!";
                    return false;
                }else{
                    $scope.authError=null;
                    $scope.user.meadiaPrice=$scope.user.twomediaPrice;
                }
            }else if($scope.user.onemediaPrice){
                if($scope.user.onemediaPrice-$scope.user.salePrice>0){
                    $scope.authError="价格低于项目价格，请重输!";
                    return false;
                }else{
                    $scope.authError=null;
                    $scope.user.meadiaPrice=$scope.user.onemediaPrice;
                }
            }else{
                if($scope.user.mediaPrice-$scope.user.salePrice>0){
                    $scope.authError="价格低于项目价格，请重输!";
                    return false;
                }else{
                    $scope.authError=null;
                    $scope.user.mediaPrice=$scope.user.mediaPrice;
                }
            }
            if($scope.user.threeProjectname){
                $http.post($scope.app.host+'modifyProject',{
                    token:tokenSession,
                    projectId:index,
                    oneProjectname:$scope.user.oneProjectname,
                    twoProjectname:$scope.user.twoProjectName,
                    threeProjectname:$scope.user.threeProjectname,
                    projectremark:$scope.user.projectremark,
                    salePrice:$scope.user.salePrice,
                    meadiaPrice:$scope.user.meadiaPrice
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.submitStatus=="1"){
                            $scope.authError=null;
                            $scope.myprojectStatus();
                            $scope.modalDrop=false;
                            $scope.modalDialog=false;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }else if($scope.user.twoProjectname){
                $http.post($scope.app.host+'modifyProject',{
                    token:tokenSession,
                    projectId:index,
                    oneProjectname:$scope.user.oneProjectname,
                    twoProjectname:$scope.user.twoProjectName,
                    threeProjectname:$scope.user.threeProjectname,
                    projectremark:$scope.user.projectremark,
                    salePrice:$scope.user.salePrice,
                    meadiaPrice:$scope.user.meadiaPrice
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.submitStatus=="1"){
                            $scope.authError=null;
                            $scope.myprojectStatus();
                            $scope.modalDrop=false;
                            $scope.modalDialog=false;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }else if($scope.user.oneProjectname){
                $http.post($scope.app.host+'modifyProject',{
                    token:tokenSession,
                    projectId:index,
                    oneProjectname:$scope.user.oneProjectname,
                    twoProjectname:$scope.user.twoProjectName,
                    threeProjectname:$scope.user.threeProjectname,
                    projectremark:$scope.user.projectremark,
                    salePrice:$scope.user.salePrice,
                    meadiaPrice:$scope.user.meadiaPrice
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.submitStatus=="1"){
                            $scope.authError=null;
                            $scope.myprojectStatus();
                            $scope.modalDrop=false;
                            $scope.modalDialog=false;
                        }
                    }else{
                        $scope.authError = response.msg;
                        $scope.modalDrop=false;
                        $scope.modalDialog=false;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }else{
                $scope.authError="请选择项目";
                return false;
            }
        }
        $scope.cancel=function () {
            $scope.onechosenDrop=false;
            $scope.twochosenDrop=false;
            $scope.threechosenDrop=false;
            var pageNo=1;
            $scope.cancelload=function(){
                $http.post($scope.app.host+'myselfProject',{
                    pageNo:pageNo,
                    pageSize:5,
                    token:tokenSession,
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            if(response.data.length==0){
                                $scope.loadingText="暂无更多数据";
                            }else{
                                $scope.loadingText="加载更多";
                                $scope.myProjectList=response.data.list;
                            }
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            $scope.cancelload();
            $scope.modalDrop=false;
            $scope.modalDialog=false;
            
            /*点击返回之后重新加载信息*/
            // $scope.user={};
            // $scope.user.pageSize=3;
            // $scope.user.pageNo=1;
            // var tokenSession=sessionStorage.getItem("session");
            // if(isEmpty(tokenSession)){
            //     $state.go('access.signin');
            //     return false;
            // }
            // /*初始化请求我的项目数据*/
            // $http.post($scope.app.host+'myselfProject',{
            //     pageNo:$scope.user.pageNo,
            //     pageSize:$scope.user.pageSize,
            //     token:tokenSession,
            // }).success(function(response) {
            //     if(response.status=="200"){
            //         if(response.queryStatus=="1"){
            //             $scope.myProjectList=response.data.list;
            //         }
            //     }else{
            //         $scope.authError = response.msg;
            //         if(response.msg=="登陆超时,请重新登陆"){
            //             $state.go('access.signin');
            //         }
            //     }
            // });
        }
        /*修改信息提交结束*/
    }
    /*编辑项目信息结束*/
    /*删除项目*/
       $scope.removeProject=function(index){
           var msg="你确定要删除吗?";
           if(confirm(msg)==false){
               return false;
           }
           $scope.user.projectId=index;
           var tokenSession=sessionStorage.getItem("session");
           if(isEmpty(tokenSession)){
               $state.go('access.signin');
               return false;
           }
           $http.post($scope.app.host+'removeProject',{
               projectId:$scope.user.projectId,
               token:tokenSession,
           }).success(function(response) {
               if(response.status=="200"){
                   if(response.submitStatus=="1"){
                       alert("删除项目成功!");
                       $scope.user={};
                       $scope.user.pageSize=3;
                       $scope.user.pageNo=1;
                       $http.post($scope.app.host+'myselfProject',{
                           pageNo:$scope.user.pageNo,
                           pageSize:$scope.user.pageSize,
                           token:tokenSession,
                       }).success(function(response) {
                           if(response.status=="200"){
                               if(response.queryStatus=="1"){
                                   $scope.myProjectList=response.data.list;
                               }
                           }else{
                               $scope.authError = response.msg;
                               if(response.msg=="登陆超时,请重新登陆"){
                                   $state.go('access.signin');
                               }
                           }
                       });
                       // $scope.authError="删除用户成功！";

                   }
               }else{
                   $scope.authError = response.msg;
                   if(response.msg=="登陆超时,请重新登陆"){
                       $state.go('access.signin');
                   }
               }
           });
       }
    /*删除项目结束*/
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;

    //项目一选择
    $scope.onepleaseSelect=true;//咨询医生初始化值
    $scope.onedgner=false;//选中值
    $scope.onechosenDrop=false;
    //显示第一个搜索框
    $scope.oneSingle=function(){
        $scope.onechosenDrop=!$scope.onechosenDrop;
        $scope.twochosenDrop=false;
        $scope.threechosenDrop=false;
        $scope.onepleaseSelect=true;
        $(".onechosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.projectType="1";//定义哪一个类别
        $scope.user.oneProjectname="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'projectQuery',{
            projectType:$scope.user.projectType,
            token:tokenSession,
            projectName:$scope.user.oneProjectname
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.projectQueryList=response.projectQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //选中项目1
    $scope.oneProject=function ($index) {
        $scope.onepleaseSelect=false;//咨询医生初始化值
        $scope.onedgner=true;//选中值
        $scope.onechosenDrop=false;
        $scope.user.oneProjectname=$scope.projectQueryList[$index].projectName;
        $scope.user.oneprojectid=$scope.projectQueryList[$index].projectId;
        $scope.user.oneName="";
        $scope.twopleaseSelect=true;  //重置项目2
        $scope.threepleaseSelect=true;  //重置项目3
    }


    //项目二选择
    $scope.twopleaseSelect=true;//咨询医生初始化值
    $scope.twodgner=false;//选中值
    $scope.twochosenDrop=false;
    //显示第二个搜索框
    $scope.twoSingle=function(){
        $scope.twochosenDrop=!$scope.twochosenDrop;
        $scope.onechosenDrop=false;
        $scope.threechosenDrop=false;
        $scope.twopleaseSelect=true;
        $(".twochosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.projectType="2";//定义哪一个类别
        $scope.user.twoProjectName="";//定义初始化名称
        //请求热搜数据
        $http.post($scope.app.host+'projectQuery',{
            projectType:$scope.user.projectType,
            token:tokenSession,
            projectName:$scope.user.twoProjectName,
            projectId:$scope.user.oneprojectid
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.projectQueryList=response.projectQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //选中项目2
    $scope.twoProject=function ($index) {
        $scope.twopleaseSelect=false;//咨询医生初始化值
        $scope.twodgner=true;//选中值
        $scope.twochosenDrop=false;
        $scope.user.twoProjectName=$scope.projectQueryList[$index].projectName;
        $scope.user.twoprojectid=$scope.projectQueryList[$index].projectId;
        $scope.user.twomediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目2价钱*/


        if($scope.user.twomediaPrice!="0.00"){
            $scope.user.salePrice=parseFloat($scope.user.twomediaPrice);
            $scope.user.comparemoney=parseFloat($scope.user.twomediaPrice);
        }


        $scope.user.twoName="";
        $scope.threepleaseSelect=true;  //重置项目3
    }


    //项目三选择
    $scope.threepleaseSelect=true;//咨询医生初始化值
    $scope.threedgner=false;//选中值
    $scope.threechosenDrop=false;
    //显示第三个搜索框
    $scope.threeSingle=function(){
        $scope.threechosenDrop=!$scope.threechosenDrop;
        $scope.twochosenDrop=false;
        $scope.onechosenDrop=false;
        $scope.threepleaseSelect=true;
        $(".threechosen-container").addClass("chosen-with-drop");
        var tokenSession=sessionStorage.getItem("session");
        $scope.user.projectType="3";//定义哪一个类别
        $scope.user.threeProjectname="";//定义初始化名称
        //请求热搜数据

        $http.post($scope.app.host+'projectQuery',{
            projectType:$scope.user.projectType,
            token:tokenSession,
            projectName:$scope.user.threeProjectname,
            projectId:$scope.user.twoprojectid
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.projectQueryList=response.projectQueryList;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    //选中项目3
    $scope.threeProject=function ($index) {
        $scope.threepleaseSelect=false;//咨询医生初始化值
        $scope.threedgner=true;//选中值
        $scope.threechosenDrop=false;
        $scope.user.threeProjectname=$scope.projectQueryList[$index].projectName;
        $scope.user.threeProjectid=$scope.projectQueryList[$index].projectId;
        $scope.user.threemediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目3价钱*/
        $scope.user.threeName="";
        if($scope.user.threemediaPrice!="0.00"){
            $scope.user.salePrice=parseFloat($scope.user.threemediaPrice);
            $scope.user.comparemoney=parseFloat($scope.user.threemediaPrice);
        }
    }
}]);
/*设计师我的项目结束*/



/*设计师接待记录开始*/
app.controller('desreceiveController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    $scope.user = {};
    $scope.authError = null;
    $scope.noRecords=false;
    $scope.isRecords=false;
    var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
    $scope.Screening=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.queryData)){
            $scope.user.queryData="";
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        if(isEmpty($scope.dts)){
            $scope.dts="";
        }
        $http.post($scope.app.host+'receivingRecord',
            {
                queryData:$scope.user.queryData,
                startDate:$scope.dt,
                stopDate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
               if(response.status=="200"){
                   if(response.data.list.length==0){
                    $scope.noRecords=true;
                    $scope.isRecords=false;
                   }else{
                        $scope.noRecords=false;
                        $scope.isRecords=true;
                        $scope.recordList=response.data.list;//接待记录列表信息
                        $scope.detailPages=response.data.totalPages;//总共多少页
                        $scope.detailPager= {
                            totalElements: response.data.totalRecords,
                            pageSize:10,
                            pageNo:response.data.pageNo
                        }
                   }
               }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.Screening();
    /**操作记录分页切换页**/
    $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        $http.post($scope.app.host+'receivingRecord',
            {
                queryData:$scope.user.queryData,
                startDate:$scope.dt,
                stopDate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.recordList=response.data.list;//接待记录列表信息
        });
    }
    /**记录详情**/
    $scope.modalDrop=false;
    $scope.modalDialog=false;
    $scope.openRecordsId = function (size) {
        $http.post($scope.app.host+'detailAppoint',
            {
                orderno:$scope.recordList[size].orderNo,
                token:tokenSession,
            }).success(function(response) {
            $scope.modalDrop=true;
            $scope.modalDialog=true;
            $scope.aboutList=response.data;//预约详情
        });
        $http.post($scope.app.host+'detailCustomer',
            {
                customerid:$scope.recordList[size].customerId,
                token:tokenSession,
            }).success(function(response) {
            $scope.modalDrop=true;
            $scope.modalDialog=true;
            $scope.clientDetails=response.data;//客户详情
        });
    };
    /**预约详情返回事件处理**/
    $scope.goBack=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /**客户详情返回事件处理**/
    $scope.cancel=function () {
        $scope.modalDrop=false;
        $scope.modalDialog=false;
    }
    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
       /* var dt = new Date();
        //开始时间
        $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
        $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/
}]);
/*设计师接待记录结束*/


/*设计师个人资料修改开始*/
app.controller('desEditorController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;
    var tokenSession = sessionStorage.getItem("session");
    if (isEmpty(tokenSession)) {
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'updateDataQuery',
        {
            token:tokenSession,
        }).success(function(response) {
        if(response.status=="200"){
            $scope.datum=response;//资料
            $scope.datumPhone=response.phone;//手机号码
        }else{
            $scope.authError = response.msg;
            if(response.msg=="登陆超时,请重新登陆"){
                $state.go('access.signin');
            }
        }
    });
    /**-验证码登录-**/
    /**短信验证码倒计时**/
    $scope.codeMsg = "获取验证码";
    $scope.sendCode = function() {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.password)||isEmpty($scope.user.passwords)){
            $scope.authError="密码不能为空";
            return false;
        }
        if(checkIsMobile($scope.datumPhone)){
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $scope.authError="";
                $http.post($scope.app.host+'getAuthCode',{
                    phone:$scope.datumPhone
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.auchstatus=="0"){
                            //TODO 点击过了
                            flag = false;
                            $scope.authError =response.msg;
                        }else if(response.auchstatus=="1"){
                            $scope.disable = false;
                            var timer = setInterval(function() {
                                if (time > 0) {
                                    time--;
                                    $scope.$apply(function() {
                                        $scope.codeMsg = time + '秒后再发送';
                                        $scope.disable = false;
                                    });
                                } else {
                                    $scope.$apply(function() {
                                        $scope.codeMsg = "获取验证码";
                                        $scope.disable = true;
                                    });
                                    clearInterval(timer);
                                }
                            }, 1000);
                        }
                    }
                });
            }
        }else{
            $scope.authError = "手机号码格式错误";
        }
    }
    $scope.audit=function () {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if($scope.user.password==$scope.user.passwords){
            $http.post($scope.app.host+'updateData', {
                phone: $scope.datumPhone, 
                password: $scope.user.passwords,
                authCode:$scope.user.authCode,
                token:tokenSession
            })
                .then(function(response) {
                    if(response.data.status == "200"){
                        $scope.authError = response.data.msg;
                    }else{
                        $scope.authError = response.data.msg;
                    }
                }, function(x) {
                    $scope.authError = 'Server Error';
                });
        }else{
            $scope.authError = "两次密码不一致，请重输！";
        }
        //Try to create
        
    }
}]);
/*设计师资料修改结束*/


/*财务商家管理店铺名单开始*/
app.controller('shopListController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    // $scope.Isusermanager=true;   //客户名单显示
    // $scope.Isedituser=false;   //客户名单修改页不显示
    // $scope.noTable=false;
    $scope.queryResut=false;
    $scope.noTable=false;
    $scope.user = {};
    $scope.authError = null;
    //客户名单查询
    $scope.searchMsg=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.queryData)){
            $scope.user.queryData="";
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        if(isEmpty($scope.dts)){
            $scope.dts="";
        }
        $http.post($scope.app.host+'shopList',
            {
                queryData:$scope.user.queryData,
                startDate:$scope.dt,
                stopDate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
            if(response.status=="200"){
                if(response.data.list.length==0){
                    $scope.noTable=true;//暂无数据初始化
                    $scope.queryResut=false;//列表数据初始化
                }else if(response.data.list.length>0){
                    $scope.noTable=false;//暂无数据初始化
                    $scope.queryResut=true;//列表数据初始化
                    $scope.rollList=response.data.list;
                    $scope.detailPages=response.data.totalPages;//总共多少页
                    $scope.detailPager= {
                        totalElements: response.data.totalRecords,
                        pageSize:10,
                        pageNo:response.data.pageNo
                    }
                }
            }
        });
    }
    $scope.searchMsg();
    /*--客户名单查询结束--*/

    //分页查询
    $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'shopList',
            {
                queryData:$scope.user.queryData,
                startDate:$scope.dt,
                stopDate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.noTable=false;//暂无数据初始化
            $scope.queryResult=true;//列表数据初始化
            $scope.rollList=response.data.list;
        });
    }
    //分页查询结束


    /*客户名单删除start*/
    $scope.deluser=function($index){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isoperation=true;
        $scope.Iseditshoplist=false;
        $scope.user.storeId=$scope.rollList[$index].storeId;
    }
    $scope.loseefficacy=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'shopDelete',
        {
            storeId:$scope.user.storeId,
            token:tokenSession
        }).success(function(response) {
            if(response.status=="200"){
                if(response.submitStatus==1){
                    $scope.searchMsg();
                    $scope.modalDrop=false;
                    $scope.modalDialog=false;
                    $scope.Isoperation=false;
                    $scope.Iseditshoplist=false;
                }else{
                    alert("删除失败！");
                }
            }  
        })
    }
    /*客户名单删除end*/

    /*客户名单激活start*/
    $scope.activeuser=function($index){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'shopActivate',
        {
            storeId:$scope.rollList[$index].storeId,
            token:tokenSession
        }).success(function(response) {
            if(response.status=="200"){
                if(response.submitStatus=="1"){
                    alert(response.msg);
                    $scope.searchMsg();
                }
            }  
        })
    }
    /*客户名单激活end*/

    /*跳转到客户名单修改页*/
    $scope.store={};
    $scope.edituser=function($index){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isoperation=false;
        $scope.Iseditshoplist=true;
        $scope.storeId=$scope.rollList[$index].storeId;
        $scope.modalDialog=true;
        $scope.modalDrop=true;
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        //客户信息接口
        $http.post($scope.app.host+'shopQuery',
            {
                storeId:$scope.storeId,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.store.storeName=response.data.storeName;
                    $scope.store.storeAddress=response.data.storeAddress;
                    $scope.store.lealpersonName=response.data.lealpersonName;
                    $scope.store.lealpersonPhone=response.data.lealpersonPhone;
                    $scope.store.accreditName=response.data.accreditName;
                    $scope.store.depositbankAddress=response.data.depositbankAddress;
                    $scope.store.accreditBanknumber=response.data.accreditBanknumber;
                    $scope.store.sourcemanName=response.data.sourcemanName;
                    $scope.store.sourcemanPhone=response.data.sourcemanPhone;
                    $scope.dt=response.data.durationStartdate;
                    $scope.dts=response.data.durationStopdate;
                    $scope.store.shareRate=response.data.shareRate;
                }
            }
        }); 
    };
    $scope.cancel=function(){
        $scope.modalDialog=false;
        $scope.modalDrop=false;
    }
    /*客户名单修改页结束*/

    /*客户名单修改提交*/
    $scope.editError = null;
    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        $scope.store.durationStartdate = $scope.dt;
        if(!isEmpty($scope.dts)){
                if($scope.dt>$scope.dts){
                        $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
                    }else if($scope.dt == $scope.dts){
                        $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
                    }
            }
    }
$scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        $scope.store.durationStopdate = $scope.dts;
        if($scope.dts<$scope.dt){
                $scope.dts="";
           }else if($scope.dts == $scope.dt){
                $scope.dts="";
            }
    }
/**当前时间**/
$scope.today = function() {
       /* var dt = new Date();
 //开始时间
 $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
 $scope.user.appointmenttime=$scope.dt;*/
        };
$scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
// Disable weekend selection
   $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
   };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
$scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
$scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
$scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
};
$scope.initDate = new Date('2016-15-20');
//$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
$scope.format = $scope.formats;
/**--日期时间-end**/
    /*判断银行卡是否正确*/
        $scope.bankCheck=function(store){
        if(isEmpty(store.accreditBanknumber)){
                return false;
            }
        if (store.accreditBanknumber.length < 16 || store.accreditBanknumber.length > 19) {
                /*$scope.broker.error="银行卡号长度必须在16到19之间";*/
                    return false;
            }
        var num = /^\d*$/;  //全数字
        if (!num.exec(store.accreditBanknumber)) {
                return false;
            }
        //开头6位
            var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
        if (strBin.indexOf(store.accreditBanknumber.substring(0, 2))== -1) {
                /* $scope.broker.error="银行卡号开头6位不符合规范";*/
                    return false;
            }
        var lastNum=store.accreditBanknumber.substr(store.accreditBanknumber.length-1,1);//取出最后一位（与luhm进行比较）

            var first15Num=store.accreditBanknumber.substr(0,store.accreditBanknumber.length-1);//前15或18位
        var newArr=new Array();
        for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
                newArr.push(first15Num.substr(i,1));
            }
        var arrJiShu=new Array();  //奇数位*2的积 <9
        var arrJiShu2=new Array(); //奇数位*2的积 >9

            var arrOuShu=new Array();  //偶数位数组
        for(var j=0;j<newArr.length;j++){
                if((j+1)%2==1){//奇数位
                        if(parseInt(newArr[j])*2<9)
                                arrJiShu.push(parseInt(newArr[j])*2);
                        else
                            arrJiShu2.push(parseInt(newArr[j])*2);
                    }
                else //偶数位
                    arrOuShu.push(newArr[j]);
            }

            var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
        var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
        for(var h=0;h<arrJiShu2.length;h++){
                jishu_child1.push(parseInt(arrJiShu2[h])%10);
               jishu_child2.push(parseInt(arrJiShu2[h])/10);
            }
        var sumJiShu=0; //奇数位*2 < 9 的数组之和
        var sumOuShu=0; //偶数位数组之和
        var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
        var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal=0;
        for(var m=0;m<arrJiShu.length;m++){
                sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
           }

            for(var n=0;n<arrOuShu.length;n++){
                sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
           }

            for(var p=0;p<jishu_child1.length;p++){
                sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
               sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
           }
        //计算总和
            sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

            //计算Luhm值
                var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
        var luhm= 10-k;

            if(lastNum==luhm){
               $scope.editError="银行卡号规范验证通过";
               return true;
            }else{
               $scope.editError ="银行卡错误，请检查银行卡号";
               return false;
            }
    }
    $scope.updateStoreClick=function(){
        $scope.authError = null;
            /*修改信息提交start*/
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            $http.post($scope.app.host+'shopUpdate',
                {
                    storeId:$scope.storeId,
                    storeName:$scope.store.storeName,
                    storeAddress:$scope.store.storeAddress,
                    lealpersonName:$scope.store.lealpersonName,
                    lealpersonPhone:$scope.store.lealpersonPhone,
                    accreditName:$scope.store.accreditName,
                    depositbankAddress:$scope.store.depositbankAddress,
                    accreditBanknumber:$scope.store.accreditBanknumber,
                    sourcemanName:$scope.store.sourcemanPhone,
                    sourcemanPhone:$scope.store.sourcemanName,
                    durationStartdate:$scope.dt,
                    durationStopdate:$scope.dts,
                    shareRate:$scope.store.shareRate,
                    token:tokenSession
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.submitStatus=="1"){
                            $scope.searchMsg();
                            $scope.modalDialog=false;
                            $scope.modalDrop=false;
                        }
                    }
            });    
    }
    /*修改信息提交end*/
    /*客户名单修改提交结束*/
    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
        /* var dt = new Date();
         //开始时间
         $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
         $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/
}
])
/*财务商家管理店铺名单结束*/
/*财务添加店家开始*/
app.controller('addShopManController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
       $scope.store = {};
        $scope.authError = null;
       /**--日期时间-start**/
            $scope.dateChange=function(t){
                $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
                $scope.store.durationStartdate = $scope.dt;
                if(!isEmpty($scope.dts)){
                        if($scope.dt>$scope.dts){
                                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
                            }else if($scope.dt == $scope.dts){
                                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
                            }
                    }
            }
        $scope.datChange=function(dts){
                $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
                $scope.store.durationStopdate = $scope.dts;
                if($scope.dts<$scope.dt){
                        $scope.dts="";
                   }else if($scope.dts == $scope.dt){
                        $scope.dts="";
                    }
            }
       /**当前时间**/
        $scope.today = function() {
               /* var dt = new Date();
         //开始时间
         $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
         $scope.user.appointmenttime=$scope.dt;*/
                };
        $scope.today();

            $scope.clear = function () {
                $scope.dt = null;
                $scope.dts = null;
            };
        // Disable weekend selection
           $scope.disabled = function(date, mode) {
                return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
           };

            $scope.toggleMin = function() {
                $scope.minDate = $scope.minDate ? null : new Date();
            };
        $scope.toggleMin();

            $scope.open = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.opened = true;
            };
        $scope.opens = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.opensMore = true;
            };
        $scope.dateOptions = {
                formatYear: 'yy',
                startingDay: 1,
                class: 'datepicker'
        };
        $scope.initDate = new Date('2016-15-20');
        //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
            $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
        $scope.format = $scope.formats;
        /**--日期时间-end**/
            /*判断银行卡是否正确*/
                $scope.bankCheck=function(store){
                if(isEmpty(store.accreditBanknumber)){
                        return false;
                    }
                if (store.accreditBanknumber.length < 16 || store.accreditBanknumber.length > 19) {
                        /*$scope.broker.error="银行卡号长度必须在16到19之间";*/
                            return false;
                    }
                var num = /^\d*$/;  //全数字
                if (!num.exec(store.accreditBanknumber)) {
                        return false;
                    }
                //开头6位
                    var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
                if (strBin.indexOf(store.accreditBanknumber.substring(0, 2))== -1) {
                        /* $scope.broker.error="银行卡号开头6位不符合规范";*/
                            return false;
                    }
                var lastNum=store.accreditBanknumber.substr(store.accreditBanknumber.length-1,1);//取出最后一位（与luhm进行比较）

                    var first15Num=store.accreditBanknumber.substr(0,store.accreditBanknumber.length-1);//前15或18位
                var newArr=new Array();
                for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
                        newArr.push(first15Num.substr(i,1));
                    }
                var arrJiShu=new Array();  //奇数位*2的积 <9
                var arrJiShu2=new Array(); //奇数位*2的积 >9

                    var arrOuShu=new Array();  //偶数位数组
                for(var j=0;j<newArr.length;j++){
                        if((j+1)%2==1){//奇数位
                                if(parseInt(newArr[j])*2<9)
                                        arrJiShu.push(parseInt(newArr[j])*2);
                                else
                                    arrJiShu2.push(parseInt(newArr[j])*2);
                            }
                        else //偶数位
                            arrOuShu.push(newArr[j]);
                    }

                    var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
                var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
                for(var h=0;h<arrJiShu2.length;h++){
                        jishu_child1.push(parseInt(arrJiShu2[h])%10);
                       jishu_child2.push(parseInt(arrJiShu2[h])/10);
                    }
                var sumJiShu=0; //奇数位*2 < 9 的数组之和
                var sumOuShu=0; //偶数位数组之和
                var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
                var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
                var sumTotal=0;
                for(var m=0;m<arrJiShu.length;m++){
                        sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
                   }

                    for(var n=0;n<arrOuShu.length;n++){
                        sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
                   }

                    for(var p=0;p<jishu_child1.length;p++){
                        sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
                       sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
                   }
                //计算总和
                    sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

                    //计算Luhm值
                        var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
                var luhm= 10-k;

                    if(lastNum==luhm){
                       $scope.authError="银行卡号规范验证通过";
                       return true;
                    }else{
                       $scope.authError ="银行卡错误，请检查银行卡号";
                       return false;
                    }
            }
       /**
        * addStoreClickt
        * 添加店家提交请求
        * */
        $scope.addStoreClick = function () {
                    var tokenSession=sessionStorage.getItem("session");
                    if(isEmpty(tokenSession)){
                            $state.go('access.signin');
                            return false;
                        }
                    $scope.store.token=tokenSession;
                    $http.post($scope.app.host+'shopInsert',$scope.store).success(function(response) {
                            if(response.status=="200"){
                                if(response.submitStatus=="1"){
                                    $scope.authError = response.msg;
                                    var $name=$("#formTable").find("[type='text']");
                                    $name.each(function () {
                                        $(this).val("");
                                    });
                                    $scope.authError=response.msg;
                                    $state.go('app.serviceshop.list');
                                }
                            }else{
                                $scope.authError = response.msg;
                                if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                }
                            }
                        });
                }
        }]);
/*财务添加店家结束*/
/*设计师工作台查询开始*/
app.controller('designerController',['$scope', '$http','$q','$state','$timeout','$filter','$location',function($scope, $http,$q, $state,$timeout,$filter,$location){
    $scope.noTable=false;
    $scope.user = {};
    $scope.tablelist = false;
    $scope.spread=true;    //展开列表
    $scope.retract=false;  //收起列表
    /*点击刷新*/
    $(".refresh").click(function () {
        $("#re-img").toggleClass("resh");
        $scope.designerStatus();
    });
    /*设计师工作台查询开始*/
    $scope.designerStatus=function(){
        $scope.user={};
        $scope.confirmRecept=true;   //确认接待初始化不显示
        $scope.editProject=false;     //添加项目初始化不显示
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'designerWorkbenchQuery',
            {
                pageSize:1,
                pageNo:1,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.toplist=response.data;  //头部预约人数
                    if(response.data.page.list.length==0){
                        $scope.noTablemsg=true;//暂无数据初始化
                        $scope.isTable=false;
                    }else if(response.data.page.list.length>0){
                        $scope.isTable=true;
                        $scope.noTablemsg=false;//暂无数据初始化
                        $scope.designer=response.data.page.list[0];  //循环列表
                        $scope.orderStatus=response.data.page.list[0].orderStatus;//订单状态
                        $scope.customerId=response.data.page.list[0].customerId;
                        $scope.listPages=response.data.page.totalPages;//总页数
                        $scope.desuserList=response.data.page.list[0].project;//接待列表
                        for(var i=0;i<$scope.desuserList.length;i++){
                            if($scope.desuserList[i].assessMoney=="0.00"){
                                $scope.desuserList[i].num=$scope.desuserList[i].mediaPrice;
                            }else{
                                $scope.desuserList[i].num=$scope.desuserList[i].assessMoney;
                            }
                        }            //实收金额默认为应缴费金额
                        $scope.allmoney=0;
                        for(var i in $scope.desuserList){
                            $scope.allmoney+=$scope.desuserList[i].num?parseFloat($scope.desuserList[i].num):0;
                        }           //合计金额
                        $scope.user.Isrecept=response.data.page.list[0].customerStatus;//接待状态
                        /*判断是否接待过start*/
                        if($scope.user.Isrecept=='1'){
                            $scope.confirmRecept=true;
                            $scope.editProject=false;
                            $(".sixiao").hide();
                            $(".tab-border-s").hide();
                            $(".ls-width").hide();
                        }if($scope.user.Isrecept=='2'){
                            $scope.confirmRecept=false;
                            $scope.editProject=true;
                            $(".sixiao").show();
                            $(".tab-border-s").show();
                            $(".ls-width").show();
                        }
                        /*判断是否接待过end*/
                        $scope.Isback=function(){
                            if($scope.designer.roomStatus=='2' || $scope.designer.roomStatus=='1'){
                                $http.post($scope.app.host+'designerLeisure',{
                                    designerName:$scope.designer.designerName,
                                    token:tokenSession
                                }).success(function(response){
                                    if(response.status=="200"){
                                        if(response.summitStatus==1){
                                            alert(response.msg);
                                        }else{
                                            alert("恢复正常!");
                                        }
                                    } 
                                })  
                            }
                            if($scope.designer.roomStatus=='3'){
                                $http.post($scope.app.host+'designerAfk',{
                                    designerName:$scope.designer.designerName,
                                    token:tokenSession
                                }).success(function(response){
                                    if(response.status=="200"){
                                        if(response.summitStatus==1){
                                            alert(response.msg);
                                        }else{
                                            alert("暂离失败!");
                                        }
                                    }  
                                })
                            }
                        }
                    }
                }
            }
            if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
    }
    $scope.designerStatus();//初始化执行函数
    /*展开列表*/
    $scope.openTableList=function(custoid,orNo){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'appointmentQuery',
            {
                orderNo:orNo,
                customerId:custoid,
                pageSize:5,
                pageNo:1,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.noTables=true;//暂无数据初始化
                        $scope.tablelist=false;//列表数据初始化
                        $scope.spread=false;    //展开列表
                        $scope.retract=true;   //收起列表
                    }else if(response.data.list.length>0){
                        $scope.noTables=false;//暂无数据初始化
                        $scope.tablelist=true;//列表数据初始化
                        $scope.spread=false;    //展开列表
                        $scope.retract=true;   //收起列表
                        $scope.rollList=response.data.list;
                        $scope.detailPages=response.data.totalPages;//总共多少页
                        $scope.detailPager= {
                            totalElements:response.data.totalRecords,
                            pageSize:5,
                            pageNo:response.data.pageNo
                        }
                    }
                }
            }
            if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
        //分页查询
        $scope.cagPage = function (pager) {
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            var curPage = pager.pageNo;
            var ss = {
                pi: curPage
            }
            $http.post($scope.app.host+'customerQuerys',
                {
                    customername:$scope.user.customername,
                    customerphone:$scope.user.customerphone,
                    createtime:$scope.dt,
                    token:tokenSession,
                    pageSize:10,
                    pageNo:ss.pi
                }).success(function(response) {
                $scope.noTable=false;//暂无数据初始化
                $scope.queryResult=true;//列表数据初始化
                $scope.rollList=response.data.list;
            });
        }
        //分页查询结束
    }
    /*收起列表开始*/
    $scope.retractlist=function(){
        $scope.spread=true;    //展开列表
        $scope.retract=false;   //收起列表
        $scope.tablelist=false;
        $scope.noTables=false;//暂无数据初始化
    }
    /*收起列表结束*/
    $scope.single=1;
    /*确认接待开始*/
    $scope.confirmrecept=function(orderNo){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'confirmRecept',{
            designerName:$scope.designer.designerName,
            orderNo:orderNo,
            token:tokenSession
        }).success(function(response){
            if(response.status=="200"){
                if(response.submitStatus=="1"){
                    alert("接待成功！");
                    $scope.designerStatus();
                }
            }else if(response.status=="800"){
                alert(response.msg);
            }
        })
    }
    /*确认接待结束*/
        /*上一页开始*/
    $scope.previousPage=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if($scope.single<=1){
            alert("已经是第一页了");
            $scope.single=1;
        }else if($scope.single!==""||$scope.single!== 1){
            $scope.single=$scope.single-1;
        }
        $http.post($scope.app.host+'designerWorkbenchQuery',
            {
                pageSize:1,
                pageNo:$scope.single,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.page.list.length=="0"){
                        $scope.noTable=true;//暂无数据初始化
                    }else if(response.data.page.list.length>0){
                        $scope.isTable=true;
                        $scope.noTablemsg=false;//暂无数据初始化
                        $scope.designer=response.data.page.list[0];  //循环列表
                        $scope.toplist=response.data;  //头部预约人数
                        $scope.orderStatus=response.data.page.list[0].orderStatus;//订单状态
                        $scope.customerId=response.data.page.list[0].customerId;
                        $scope.listPages=response.data.page.totalPages;//总页数
                        $scope.desuserList=response.data.page.list[0].project;//接待列表
                        for(var i=0;i<$scope.desuserList.length;i++){
                            $scope.desuserList[i].num=$scope.desuserList[i].mediaPrice;
                        }            //实收金额默认为应缴费金额
                        for(var i in $scope.desuserList){
                            $scope.allmoney+=$scope.desuserList[i].num?parseFloat($scope.desuserList[i].num):0;
                        }           //合计金额
                        $scope.user.Isrecept=response.data.page.list[0].customerStatus;//接待状态
                        /*判断是否接待过start*/
                        if($scope.user.Isrecept=='1'){
                            $scope.confirmRecept=true;
                            $scope.editProject=false;
                            $(".sixiao").hide();
                            $(".tab-border-s").hide();
                            $(".ls-width").hide();
                            
                        }if($scope.user.Isrecept=='2'){
                            $scope.confirmRecept=false;
                            $scope.editProject=true;
                            $(".sixiao").show();
                            $(".tab-border-s").show();
                            $(".ls-width").show();
                        }
                        /*判断是否接待过end*/
                    }
                }
            }
            if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
    }
    $scope.nextPage=function(){
        if($scope.single>=$scope.listPages){
            alert("已经是最后一页了");
            $scope.single=$scope.listPages;
        }
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if($scope.single=$scope.listPages){
            $scope.single=1;
        }else{
            $scope.single=$scope.single+1;
        }
        $http.post($scope.app.host+'designerWorkbenchQuery',
            {
                pageSize:1,
                pageNo:$scope.single,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.page.list.length=="0"){
                        $scope.noTable=true;//暂无数据初始化
                    }else if(response.data.page.list.length>0){
                        $scope.designer=response.data.page.list[0];  //循环列表
                        $scope.user.customerId=response.data.page.list[0].customerId;   //客户id
                        $scope.toplist=response.data;  //头部预约人数
                        $scope.orderStatus=response.data.page.list[0].orderStatus;//订单状态
                        $scope.customerId=response.data.page.list[0].customerId;
                        $scope.desuserList=response.data.page.list[0].project;//接待列表
                        for(var i=0;i<$scope.desuserList.length;i++){
                            $scope.desuserList[i].num=$scope.desuserList[i].mediaPrice;
                        }            //实收金额默认为应缴费金额
                        for(var i in $scope.desuserList){
                            $scope.allmoney+=$scope.desuserList[i].num?parseFloat($scope.desuserList[i].num):0;
                        }           //合计金额
                        $scope.listPages=response.data.page.totalPages;//总页数
                        $scope.user.Isrecept=response.data.page.list[0].customerStatus;//接待状态
                        /*判断是否接待过start*/
                        if($scope.user.Isrecept=='1'){
                            $scope.confirmRecept=true;
                            $scope.editProject=false;
                            $(".sixiao").hide();
                            $(".tab-border-s").hide();
                            $(".ls-width").hide();
                        }if($scope.user.Isrecept=='2'){
                            $scope.confirmRecept=false;
                            $scope.editProject=true;
                            $(".sixiao").show();
                            $(".tab-border-s").show();
                            $(".ls-width").show();
                        }
                        /*判断是否接待过end*/
                    }
                }
            }
            if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
    }
        /*下一页结束*/
    /*设计师工作台查询结束*/
    /*完善信息开始*/
    $scope.modalDrop=false;
    $scope.modalDialog=false;
    $scope.editMsg=false;
    $scope.user={};
    $scope.perfectMsg= function (size) {
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Iseditproject=false;
        $scope.editMsg=false;
        $scope.updateVal="客户信息";
        $scope.checkBox=[{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0},{a:0}];
        $scope.modelauthError=null;
        $scope.user.customerid=size;
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'customerMessage',
            {
                customerid:$scope.user.customerid,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                $scope.user.customername=response.data.customername;
                $scope.user.customerphone=response.data.customerphone;
                $scope.user.idno=response.data.idno;
                $scope.user.birthday=response.data.birthday;
                $scope.user.birthplace=response.data.birthplace;
                $scope.user.permanentplace=response.data.permanentplace;
                $scope.user.permanentplace=response.data.permanentplace;
                $scope.user.othercontagion=response.data.othercontagion;
                $scope.medicinehistory=response.data.medicinehistory;
                $scope.commonhistory=response.data.commonhistory;
                if(!isEmpty(response.data.commonhistory)){
                    var commonhistory=response.data.commonhistory.split(",");
                    for(var i in commonhistory) {
                        $scope.checkBox[commonhistory[i]].a=true;
                    }
                } 
                /*性别判断*/ 
                if(isEmpty(response.data.sex)){
                    $scope.sex='0';
                };
                /*婚姻状况判断*/
                if(isEmpty(response.data.marriage)){
                    $scope.marriage='0';
                };
                $scope.modalDrop=true;
                $scope.modalDialog=true;
                $scope.editMsg=true;
            }
        });
        /*设计师工作台完善信息提交*/
        $scope.modelauthError=null;
        //身份证号出生年月
        $scope.Idno=function(){
            if(!isEmpty($scope.user.idno)){
                var ymd=$scope.user.idno.substring(6,10)+"-"+$scope.user.idno.substring(10,12)+"-"+$scope.user.idno.substring(12,14);
                $scope.user.birthday=ymd;
            } 
        }
        $scope.update=function(){
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            // 常见疾病复选框选取
            var common="";
            for(var i in $scope.checkBox){
                if($scope.checkBox[i].a){
                    common+=(+i)+",";
                }
            }
            var commonhistory=common.substr(0, common.length - 1);
            $scope.user.commonhistory=commonhistory;
            if(isEmpty($scope.user.commonhistory)){
                $scope.user.conmmonhistory="";
            }
            $http.post($scope.app.host+'customerUpdate',
                {
                    customername:$scope.user.customername,
                    customerphone:$scope.user.customerphone,
                    commonhistory:$scope.user.commonhistory,
                    sex:$scope.sex,
                    idno:$scope.user.idno,
                    birthday:$scope.user.birthday,
                    marriage:$scope.marriage,
                    birthplace:$scope.user.birthplace,
                    permanentplace:$scope.user.permanentplace,
                    othercontagion:$scope.user.othercontagion,
                    medicinehistory:$scope.medicinehistory,
                    token:tokenSession
                }).success(function(response) {
                if(response.status=="200"){
                    if(response.summitstatus=="1"){
                        $scope.authError="修改客户信息成功!";
                        var $name=$("#formTable").find("[type='text']");
                        $name.each(function () {
                            $(this).val("");
                        });
                        $("input[name='ckb']").attr("checked",false);
                        $scope.user.othercontagion="";
                        $scope.medicinehistory="";
                        $scope.sex="0";
                        $scope.marriage="0";
                        $scope.authError=null;
                        $scope.modalDrop=false;
                        $scope.modalDialog=false;
                        $scope.editMsg=false;
                        $scope.Iseditproject=false;
                        $scope.designerStatus();
                    }
                }
                if(response.status=="800"){
                    $scope.authError=response.msg;
                }
            });
        }
    /*设计师工作台完善信息提交结束*/
    // 完善信息返回
    $scope.cancel=function () {
        // $scope.Screening();
        $scope.authError=null;
        $scope.modalDrop=false;
        $scope.modalDialog=false;
        $scope.editMsg=false;
        $scope.Iseditproject=false;
    }
    /*完善信息结束*/
    };
    /*设计师工作台编辑项目开始*/
    $scope.Iseditproject=false;
    $scope.editproject=function(appid){
        $scope.user={};
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Iseditproject=true;
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        // 增加项目和修改项目开始
        if(appid.length==17){  
            $scope.addeditVal="增加项目";        //增加项目
            //项目一选择
            $scope.onepleaseSelect=true;//咨询医生初始化值
            $scope.onedgner=false;//选中值
            $scope.onechosenDrop=false;
            //显示第一个搜索框
            $scope.oneSingle=function(){
                $scope.onechosenDrop=!$scope.onechosenDrop;
                $scope.twochosenDrop=false;
                $scope.threechosenDrop=false;
                $scope.fourchosenDrop=false;
                $scope.onepleaseSelect=true;
                $(".onechosen-container").addClass("chosen-with-drop");
                var tokenSession=sessionStorage.getItem("session");
                $scope.user.projectType="1";//定义哪一个类别
                $scope.user.oneProjectname="";//定义初始化名称
                //请求热搜数据
                $http.post($scope.app.host+'projectQuery',{
                    projectType:$scope.user.projectType,
                    token:tokenSession,
                    projectName:$scope.user.oneProjectname
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            $scope.projectQueryList=response.projectQueryList;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            //选中项目1
            $scope.oneProject=function ($index) {
                $scope.onepleaseSelect=false;//咨询医生初始化值
                $scope.onedgner=true;//选中值
                $scope.onechosenDrop=false;
                $scope.user.oneProjectname=$scope.projectQueryList[$index].projectName;
                $scope.user.oneprojectid=$scope.projectQueryList[$index].projectId;
                $scope.user.onemediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目1价钱*/
                $scope.user.oneName="";
                $scope.twopleaseSelect=true;  //重置项目2
                $scope.threepleaseSelect=true;  //重置项目3
            }
            //项目二选择
            $scope.twopleaseSelect=true;//咨询医生初始化值
            $scope.twodgner=false;//选中值
            $scope.twochosenDrop=false;
            //显示第二个搜索框
            $scope.twoSingle=function(){
                $scope.twochosenDrop=!$scope.twochosenDrop;
                $scope.onechosenDrop=false;
                $scope.threechosenDrop=false;
                $scope.fourchosenDrop=false;
                $scope.twopleaseSelect=true;
                $(".twochosen-container").addClass("chosen-with-drop");
                var tokenSession=sessionStorage.getItem("session");
                $scope.user.projectType="2";//定义哪一个类别
                $scope.user.twoProjectName="";//定义初始化名称
                //请求热搜数据
                $http.post($scope.app.host+'projectQuery',{
                    projectType:$scope.user.projectType,
                    token:tokenSession,
                    projectName:$scope.user.twoProjectName,
                    projectId:$scope.user.oneprojectid
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            $scope.projectQueryList=response.projectQueryList;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            //选中项目2
            $scope.twoProject=function ($index) {
                $scope.twopleaseSelect=false;//咨询医生初始化值
                $scope.twodgner=true;//选中值
                $scope.twochosenDrop=false;
                $scope.user.twoProjectName=$scope.projectQueryList[$index].projectName;
                $scope.user.twoprojectid=$scope.projectQueryList[$index].projectId;
                $scope.user.twomediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目2价钱*/
                $scope.user.twoName="";
                $scope.threepleaseSelect=true;  //重置项目3
            }
            //项目三选择
            $scope.threepleaseSelect=true;//咨询医生初始化值
            $scope.threedgner=false;//选中值
            $scope.threechosenDrop=false;
            //显示第三个搜索框
            $scope.threeSingle=function(){
                $scope.threechosenDrop=!$scope.threechosenDrop;
                $scope.twochosenDrop=false;
                $scope.onechosenDrop=false;
                $scope.fourchosenDrop=false;
                $scope.threepleaseSelect=true;
                $(".threechosen-container").addClass("chosen-with-drop");
                var tokenSession=sessionStorage.getItem("session");
                $scope.user.projectType="3";//定义哪一个类别
                $scope.user.threeProjectName="";//定义初始化名称
                //请求热搜数据
                $http.post($scope.app.host+'projectQuery',{
                    projectType:$scope.user.projectType,
                    token:tokenSession,
                    projectName:$scope.user.threeProjectName,
                    projectId:$scope.user.twoprojectid
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            $scope.projectQueryList=response.projectQueryList;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            //选中项目3
            $scope.threeProject=function ($index) {
                $scope.threepleaseSelect=false;//咨询医生初始化值
                $scope.threedgner=true;//选中值
                $scope.threechosenDrop=false;
                $scope.user.threeProjectName=$scope.projectQueryList[$index].projectName;
                $scope.user.threeprojectid=$scope.projectQueryList[$index].projectid;
                $scope.user.threeName="";
            }
             //自定义项目选择
             $scope.fourpleaseSelect=true;//咨询医生初始化值
             $scope.fourdgner=false;//选中值
             $scope.fourchosenDrop=false;
             //显示自定义搜索框
             $scope.fourSingle=function(){
                 $scope.fourchosenDrop=!$scope.fourchosenDrop;
                 $scope.fourpleaseSelect=true;
                 $(".fourchosen-container").addClass("chosen-with-drop");
                 var tokenSession=sessionStorage.getItem("session");
                 $scope.user.fourProjectName="";//定义初始化名称
                 //请求热搜数据
                 $http.post($scope.app.host+'customProjectQuery',{
                     token:tokenSession,
                 }).success(function(response) {
                     if(response.status=="200"){
                         if(response.queryStatus=="1"){
                             $scope.customProjectQueries=response.customProjectQueries;
                         }
                     }else{
                         $scope.authError = response.msg;
                         if(response.msg=="登陆超时,请重新登陆"){
                             $state.go('access.signin');
                         }
                     }
                 });
             }
             //选中自定义项目
             $scope.fourProject=function ($index) {
                 $scope.fourpleaseSelect=false;//咨询医生初始化值
                 $scope.fourdgner=true;//选中值
                 $scope.onechosenDrop=false;
                $scope.twochosenDrop=false;
                $scope.threechosenDrop=false;
                 $scope.fourchosenDrop=false;
                 $scope.user.fourProjectName=$scope.customProjectQueries[$index].projectName;
                 $scope.user.fourName="";
             }
             //医生下拉框选择
            $scope.fivepleaseSelect=true;//咨询医生初始化值
            $scope.fivedgner=false;//选中值
            $scope.fivechosenDrop=false;
            //显示第五个搜索框
            $scope.fiveSingle=function(){
                $scope.fivechosenDrop=!$scope.fivechosenDrop;
                $scope.fivepleaseSelect=true;
                $(".fivechosen-container").addClass("chosen-with-drop");
                var tokenSession=sessionStorage.getItem("session");
                $scope.user.fiveProjectName="";//定义初始化名称
                //请求热搜数据
                $http.post($scope.app.host+'enumsQuery',{
                    enums:"doctor_name",
                    token:tokenSession,
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            $scope.paymentQueryList=response.paymentQueryList;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            //选中医生
            $scope.fiveProject=function ($index) {
                $scope.fivepleaseSelect=false;//咨询医生初始化值
                $scope.fivedgner=true;//选中值
                $scope.fivechosenDrop=false;
                $scope.user.fiveProjectName=$scope.paymentQueryList[$index].enumname;
                $scope.user.fiveName="";
            }
            $scope.updateMsg=function(){
                 $scope.orderNo=appid;
                 /*我的项目和特色项目判断start*/
                 var myproject=$scope.user.threeProjectname || $scope.user.twoProjectName;
                 var teseproject=$scope.user.fourProjectName;
                 if(myproject && teseproject){
                     $scope.authError="我的项目和特色项目只能选一种";
                     return false;
                 }
                 if(isEmpty($scope.user.oneProjectname)){
                    $scope.user.oneProjectname="";
                 }
                 if(isEmpty($scope.user.twoProjectName)){
                    $scope.user.twoProjectName="";
                 }
                 if(isEmpty($scope.user.threeProjectName)){
                    $scope.user.threeProjectName="";
                 }
                 if(isEmpty($scope.user.fourProjectName)){
                    $scope.user.fourProjectName="";
                 }
                 /*我的项目和特色项目判断end*/
                 if($scope.user.threeProjectname){
                    $http.post($scope.app.host+'addProject',{
                        token:tokenSession,
                        orderNo:$scope.orderNo,
                        oneProjectname:$scope.user.oneProjectname,
                        twoProjectname:$scope.user.twoProjectName,
                        threeProjectname:$scope.user.threeProjectName,
                        projectName:$scope.user.fourProjectName,
                        doctorName:$scope.user.fiveProjectName,
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                                $scope.authError=response.msg;
                                $scope.designerStatus();
                                $scope.authError=null;
                                $scope.Iseditproject=false;
                                $scope.modalDrop=false;
                                $scope.modalDialog=false;
                                $scope.editMsg=false;
                            }
                        }else{
                            $scope.authError = response.msg;
                            if(response.msg=="登陆超时,请重新登陆"){
                                $state.go('access.signin');
                            }
                        }
                    });
                }else if($scope.user.twoProjectName){
                    $http.post($scope.app.host+'addProject',{
                        token:tokenSession,
                        orderNo:$scope.orderNo,
                        oneProjectname:$scope.user.oneProjectname,
                        twoProjectname:$scope.user.twoProjectName,
                        threeProjectname:$scope.user.threeProjectName,
                        projectName:$scope.user.fourProjectName,
                        doctorName:$scope.user.fiveProjectName,
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                                $scope.authError=response.msg;
                                $scope.designerStatus();
                                $scope.authError=null;
                                $scope.Iseditproject=false;
                                $scope.modalDrop=false;
                                $scope.modalDialog=false;
                                $scope.editMsg=false;
                            }
                        }else{
                            $scope.authError = response.msg;
                            if(response.msg=="登陆超时,请重新登陆"){
                                $state.go('access.signin');
                            }
                        }
                    });
                }else if($scope.user.oneProjectname){
                    $http.post($scope.app.host+'addProject',{
                        token:tokenSession,
                        orderNo:$scope.orderNo,
                        oneProjectname:$scope.user.oneProjectname,
                        twoProjectname:$scope.user.twoProjectName,
                        threeProjectname:$scope.user.threeProjectName,
                        projectName:$scope.user.fourProjectName,
                        doctorName:$scope.user.fiveProjectName,
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                                $scope.authError=response.msg;
                                $scope.designerStatus();
                                $scope.authError=null;
                                $scope.Iseditproject=false;
                                $scope.modalDrop=false;
                                $scope.modalDialog=false;
                                $scope.editMsg=false;
                            }
                        }else{
                            $scope.authError = response.msg;
                            if(response.msg=="登陆超时,请重新登陆"){
                                $state.go('access.signin');
                            }
                        }
                    });
                }else if($scope.user.fourProjectName){
                    $http.post($scope.app.host+'addProject',{
                        orderNo:$scope.orderNo,
                        oneProjectname:$scope.user.oneProjectname,
                        twoProjectname:$scope.user.twoProjectName,
                        threeProjectname:$scope.user.threeProjectName,
                        projectName:$scope.user.fourProjectName,
                        doctorName:$scope.user.fiveProjectName,
                        appointId:$scope.appointId,
                        token:tokenSession
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                                $scope.authError=response.msg;
                                $scope.designerStatus();
                                $scope.authError=null;
                                $scope.Iseditproject=false;
                                $scope.modalDrop=false;
                                $scope.modalDialog=false;
                                $scope.editMsg=false;
                            }
                        }else{
                            $scope.authError = response.msg;
                            if(response.msg=="登陆超时,请重新登陆"){
                                $state.go('access.signin');
                            }
                        }
                    });
                }else{
                    $scope.authError="请选择项目";
                    return false;
                }
            }
            $scope.cancel=function(){
                $scope.designerStatus();
                $scope.authError=null;
                $scope.Iseditproject=false;
                $scope.modalDrop=false;
                $scope.modalDialog=false;
                $scope.editMsg=false;
            }
        }else{                         //修改项目
            $scope.addeditVal="编辑项目";
            $scope.appointId=appid;
            $http.post($scope.app.host+'updateProjectQuery',
                {
                    appointId:$scope.appointId,
                    token:tokenSession
                }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        /*判断第一个项目是否存在，存在就显示*/
                        if(response.data.oneProjectname){
                            $scope.onepleaseSelect=false;
                            $scope.onedgner=true;
                            $scope.user.oneProjectname=response.data.oneProjectname;
                        }else{
                            $scope.onepleaseSelect=true;
                        }
                        /*判断第二个项目是否存在，存在就显示*/
                        if(response.data.twoProjectname){
                            $scope.twopleaseSelect=false;
                            $scope.twodgner=true;
                            $scope.user.twoProjectName=response.data.twoProjectname;
                        }else{
                            $scope.twopleaseSelect=true;
                        }
                        /*判断第三个项目是否存在，存在就显示*/
                        if(response.data.threeProjectname){
                            $scope.threepleaseSelect=false;
                            $scope.threedgner=true;
                            $scope.user.threeProjectName=response.data.threeProjectname;
                        }else{
                            $scope.threepleaseSelect=true;
                        }
                        /*判断第四个项目是否存在，存在就显示*/
                        if(response.data.projectName){
                            $scope.fourpleaseSelect=false;
                            $scope.fourdgner=true;
                            $scope.user.fourProjectName=response.data.projectName;
                        }else{
                            $scope.fourpleaseSelect=true;
                        }
                        /*判断医生是否存在，存在就显示*/
                        if(response.data.doctorName){
                            $scope.fivepleaseSelect=false;
                            $scope.fivedgner=true;
                            $scope.user.fiveProjectName=response.data.doctorName;
                        }else{
                            $scope.fivepleaseSelect=true;
                        }
                        //显示第一个搜索框
                        $scope.oneSingle=function(){
                            $scope.onechosenDrop=!$scope.onechosenDrop;
                            $scope.twochosenDrop=false;
                            $scope.threechosenDrop=false;
                            $scope.fourchosenDrop=false;
                            $scope.onepleaseSelect=true;
                            $(".onechosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.projectType="1";//定义哪一个类别
                            $scope.user.oneProjectname="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'projectQuery',{
                                projectType:$scope.user.projectType,
                                token:tokenSession,
                                projectName:$scope.user.oneProjectname
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.projectQueryList=response.projectQueryList;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中项目1
                        $scope.oneProject=function ($index) {
                            $scope.onepleaseSelect=false;//咨询医生初始化值
                            $scope.onedgner=true;//选中值
                            $scope.onechosenDrop=false;
                            $scope.user.oneProjectname=$scope.projectQueryList[$index].projectName;
                            $scope.user.oneprojectid=$scope.projectQueryList[$index].projectId;
                            $scope.user.oneName="";
                            $scope.twopleaseSelect=true;  //重置项目2
                            $scope.threepleaseSelect=true;  //重置项目3
                        }
                        //项目二选择
                        //显示第二个搜索框
                        $scope.twoSingle=function(){
                            $scope.twochosenDrop=!$scope.twochosenDrop;
                            $scope.threechosenDrop=false;
                            $scope.onechosenDrop=false;
                            $scope.fourchosenDrop=false;
                            $scope.twopleaseSelect=true;
                            $(".twochosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.projectType="2";//定义哪一个类别
                            $scope.user.twoProjectName="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'projectQuery',{
                                projectType:$scope.user.projectType,
                                token:tokenSession,
                                projectName:$scope.user.twoProjectName,
                                projectId:$scope.user.oneprojectid
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.projectQueryList=response.projectQueryList;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中项目2
                        $scope.twoProject=function ($index) {
                            $scope.twopleaseSelect=false;//咨询医生初始化值
                            $scope.twodgner=true;//选中值
                            $scope.twochosenDrop=false;
                            $scope.user.twoProjectName=$scope.projectQueryList[$index].projectName;
                            $scope.user.twoprojectid=$scope.projectQueryList[$index].projectId;
                            $scope.user.twomediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目2价钱*/
                            $scope.user.twoName="";
                            $scope.threepleaseSelect=true;  //重置项目3
                        }
                        //项目三选择
                        //显示第三个搜索框
                        $scope.threeSingle=function(){
                            $scope.threechosenDrop=!$scope.threechosenDrop;
                            $scope.twochosenDrop=false;
                            $scope.onechosenDrop=false;
                            $scope.fourchosenDrop=false;
                            $scope.threepleaseSelect=true;
                            $(".threechosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.projectType="3";//定义哪一个类别
                            $scope.user.threeProjectName="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'projectQuery',{
                                projectType:$scope.user.projectType,
                                token:tokenSession,
                                projectName:$scope.user.threeProjectName,
                                projectId:$scope.user.twoprojectid
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.projectQueryList=response.projectQueryList;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中项目3
                        $scope.threeProject=function ($index) {
                            $scope.threepleaseSelect=false;//咨询医生初始化值
                            $scope.threedgner=true;//选中值
                            $scope.threechosenDrop=false;
                            $scope.user.threeProjectName=$scope.projectQueryList[$index].projectName;
                            $scope.user.threeprojectid=$scope.projectQueryList[$index].projectid;
                            $scope.user.threeName="";
                        }
                        //自定义项目选择
                        //显示自定义搜索框
                        $scope.fourSingle=function(){
                            $scope.fourchosenDrop=!$scope.fourchosenDrop;
                            $scope.twochosenDrop=false;
                            $scope.onechosenDrop=false;
                            $scope.threechosenDrop=false;
                            $scope.fourpleaseSelect=true;
                            $(".fourchosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.fourProjectName="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'customProjectQuery',{
                                token:tokenSession,
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.customProjectQueries=response.customProjectQueries;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中自定义项目
                        $scope.fourProject=function ($index) {
                            $scope.fourpleaseSelect=false;//咨询医生初始化值
                            $scope.fourdgner=true;//选中值
                            $scope.fourchosenDrop=false;
                            $scope.user.fourProjectName=$scope.customProjectQueries[$index].projectName;
                            $scope.user.fourName="";
                        }
                        //医生下拉框选择
                        //显示第五个搜索框
                        $scope.fiveSingle=function(){
                            $scope.fivechosenDrop=!$scope.fivechosenDrop;
                            $scope.fivepleaseSelect=true;
                            $(".fivechosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.fiveProjectName="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'enumsQuery',{
                                enums:"doctor_name",
                                token:tokenSession,
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.paymentQueryList=response.paymentQueryList;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中医生
                        $scope.fiveProject=function ($index) {
                            $scope.fivepleaseSelect=false;//咨询医生初始化值
                            $scope.fivedgner=true;//选中值
                            $scope.fivechosenDrop=false;
                            $scope.user.fiveProjectName=$scope.paymentQueryList[$index].enumname;
                            $scope.user.fiveName="";
                        }
                        /*修改项目信息提交*/
                        $scope.updateMsg=function(){
                            if(isEmpty($scope.user.oneProjectname)){
                                $scope.user.oneProjectname="";
                             }
                             if(isEmpty($scope.user.twoProjectName)){
                                $scope.user.twoProjectName="";
                             }
                             if(isEmpty($scope.user.threeProjectName)){
                                $scope.user.threeProjectName="";
                             }
                             if(isEmpty($scope.user.fourProjectName)){
                                $scope.user.fourProjectName="";
                             }
                            var tokenSession=sessionStorage.getItem("session");
                            if(isEmpty(tokenSession)){
                                $state.go('access.signin');
                                return false;
                            }
                            /*我的项目和特色项目判断start*/
                            var myproject=$scope.user.threeProjectname || $scope.user.twoProjectName;
                            var teseproject=$scope.user.fourProjectName;
                            if(myproject && teseproject){
                                $scope.authError="我的项目和特色项目只能选一种";
                                return false;
                            }
                            /*我的项目和特色项目判断end*/
                            /*编辑信息提交确认复选框是否正确start*/
                            if($scope.user.threeProjectname){
                                $http.post($scope.app.host+'updateProject',{
                                    oneProjectname:$scope.user.oneProjectname,
                                    twoProjectname:$scope.user.twoProjectName,
                                    threeProjectname:$scope.user.threeProjectName,
                                    projectName:$scope.user.fourProjectName,
                                    doctorName:$scope.user.fiveProjectName,
                                    appointId:$scope.appointId,
                                    token:tokenSession
                                }).success(function(response) {
                                    if(response.status=="200"){
                                        if(response.submitStatus=="1"){
                                            $scope.authError=response.msg;
                                            $scope.designerStatus();
                                            $scope.authError=null;
                                            $scope.Iseditproject=false;
                                            $scope.modalDrop=false;
                                            $scope.modalDialog=false;
                                            $scope.editMsg=false;
                                        }
                                    }else{
                                        $scope.authError = response.msg;
                                        if(response.msg=="登陆超时,请重新登陆"){
                                            $state.go('access.signin');
                                        }
                                    }
                                });
                            }else if($scope.user.twoProjectName){
                                $http.post($scope.app.host+'updateProject',{
                                    oneProjectname:$scope.user.oneProjectname,
                                    twoProjectname:$scope.user.twoProjectName,
                                    threeProjectname:$scope.user.threeProjectName,
                                    projectName:$scope.user.fourProjectName,
                                    doctorName:$scope.user.fiveProjectName,
                                    appointId:$scope.appointId,
                                    token:tokenSession
                                }).success(function(response) {
                                    if(response.status=="200"){
                                        if(response.submitStatus=="1"){
                                            $scope.authError=response.msg;
                                            $scope.designerStatus();
                                            $scope.authError=null;
                                            $scope.Iseditproject=false;
                                            $scope.modalDrop=false;
                                            $scope.modalDialog=false;
                                            $scope.editMsg=false;
                                        }
                                    }else{
                                        $scope.authError = response.msg;
                                        if(response.msg=="登陆超时,请重新登陆"){
                                            $state.go('access.signin');
                                        }
                                    }
                                });
                            }else if($scope.user.oneProjectname){
                                $http.post($scope.app.host+'updateProject',{
                                    oneProjectname:$scope.user.oneProjectname,
                                    twoProjectname:$scope.user.twoProjectName,
                                    threeProjectname:$scope.user.threeProjectName,
                                    projectName:$scope.user.fourProjectName,
                                    doctorName:$scope.user.fiveProjectName,
                                    appointId:$scope.appointId,
                                    token:tokenSession
                                }).success(function(response) {
                                    if(response.status=="200"){
                                        if(response.submitStatus=="1"){
                                            $scope.authError=response.msg;
                                            $scope.designerStatus();
                                            $scope.authError=null;
                                            $scope.Iseditproject=false;
                                            $scope.modalDrop=false;
                                            $scope.modalDialog=false;
                                            $scope.editMsg=false;
                                        }
                                    }else{
                                        $scope.authError = response.msg;
                                        if(response.msg=="登陆超时,请重新登陆"){
                                            $state.go('access.signin');
                                        }
                                    }
                                });
                            }else if($scope.user.fourProjectName){
                                $http.post($scope.app.host+'updateProject',{
                                    oneProjectname:$scope.user.oneProjectname,
                                    twoProjectname:$scope.user.twoProjectName,
                                    threeProjectname:$scope.user.threeProjectName,
                                    projectName:$scope.user.fourProjectName,
                                    doctorName:$scope.user.fiveProjectName,
                                    appointId:$scope.appointId,
                                    token:tokenSession
                                }).success(function(response) {
                                    if(response.status=="200"){
                                        if(response.submitStatus=="1"){
                                            $scope.authError=response.msg;
                                            $scope.designerStatus();
                                            $scope.authError=null;
                                            $scope.Iseditproject=false;
                                            $scope.modalDrop=false;
                                            $scope.modalDialog=false;
                                            $scope.editMsg=false;
                                        }
                                    }else{
                                        $scope.authError = response.msg;
                                        if(response.msg=="登陆超时,请重新登陆"){
                                            $state.go('access.signin');
                                        }
                                    }
                                });
                            }else{
                                $scope.authError="请选择项目";
                                return false;
                            }
                        }
                        $scope.cancel=function(){
                            $scope.Iseditproject=false;
                            $scope.modalDrop=false;
                            $scope.modalDialog=false;
                            $scope.editMsg=false;
                        }
                    }
                }
                if(response.status=="800"){
                    $scope.modelauthError=response.msg;
                }
            });
        }
        // 增加项目和修改项目结束
    }
    /*设计师工作台编辑项目结束*/
    /*设计师工作台实收金额start*/
        //$scope.inpmoney=0;
        $scope.actualMoney=function($index,inpmoney,projectMoney){   
                var tokenSession=sessionStorage.getItem("session");
                if(isEmpty(tokenSession)){
                    $state.go('access.signin');
                    return false;
                }
                if(!isEmpty(inpmoney)){
                    $http.post($scope.app.host+'insertProjectmoney',{
                        appointId:$scope.desuserList[$index].appointId,
                        orderNo:$scope.designer.orderNo,
                        projectMoney:parseFloat(inpmoney),
                        token:tokenSession,
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                            }
                        }
                    });
                }else{
                    return false;
                }
                 //inpmoney:实收金额 projectmoney:应缴金额
                $scope.actualmoney=$scope.desuserList[$index].num;
                $scope.stopmoney=$scope.desuserList[$index].stopPrice;     //蓝标价
                $scope.dividomoney=$scope.desuserList[$index].dividoPrice; //分成价
                if(parseFloat(inpmoney)<parseFloat($scope.stopmoney)){
                    $(".inpmoney").eq($index).css("backgroundColor","#FBB7C1");  //实收金额小于媒体价为红色
                }else if(parseFloat($scope.stopmoney)<parseFloat(inpmoney)<parseFloat($scope.dividomoney)){
                    $(".inpmoney").eq($index).css("backgroundColor","#FDE491");//实收金额小于分成价为黄色
                if(parseFloat(inpmoney)>parseFloat($scope.dividomoney)){
                        $(".inpmoney").eq($index).css("backgroundColor","#ffffff");
                    }
                }
                $scope.allmoney=0;
                for(var i in $scope.desuserList){
                    $scope.allmoney+=$scope.desuserList[i].num?parseFloat($scope.desuserList[i].num):0;
                }


               
                


            //$scope.desuserList[$index]["inpmoney"]=inpmoney;//实收金额
            //$scope.desuserList[$index]["projectMoney"]=projectMoney;//应缴金额
        }
    /*设计师工作台实收金额end*/

    /*设计师提交财务start*/
    /*设计师提交财务start*/
     
    $scope.submitfinancial=function(orderNo){
        
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if($scope.user.Isrecept=='1'){
            alert("请先接待该用户！");
            return false;
        }
        if(isEmpty($scope.designer.project)){
            alert("请添加项目后再提交！");
            return false;
        }
        $scope.submitLit=[];//提交需要的数组
        for(var i=0;i<$scope.desuserList.length;i++){
            var actualObject={};//提交需要的object
            if(isEmpty($scope.desuserList[i].num)){
                alert("请输入金额！");
                return false;
            }else{
                actualObject["projectMoney"]=$scope.desuserList[i].num+"";
                actualObject["appointId"]=$scope.desuserList[i].appointId;
                actualObject["assessMoney"]=$scope.desuserList[i].mediaPrice;
                $scope.submitLit.push(actualObject);
            }
            if(parseFloat($scope.submitLit[i].projectMoney)<parseFloat($scope.desuserList[i].stopPrice)){
                alert("请输入正确的金额!");
                return false;
            }  
        }
        if(isEmpty($scope.user.designerRrmark)){
            $scope.user.designerRrmark="";
        }
        $http.post($scope.app.host+'submitFinancial',{
            orderNo:orderNo,
            costMoney:$scope.allmoney+"",
            token:tokenSession,
            customerName:$scope.designer.customerName,
            designerName:$scope.designer.designerName,             //设计师名
            consultName:$scope.designer.consultName,              //外场咨询
            designerRrmark:$scope.user.designerRrmark,   //设计师备注
            list:$scope.submitLit
        }).success(function(response) {
            if(response.status=="200"){
                if(response.submitStatus=="1"){
                    // $scope.projectQueryList=response.consultNameQueryList;
                    alert("提交成功！");
                    $scope.designerStatus();
                }
            }else if(response.status="800"){
                if(response.submitStatus=="0"){
                    alert("请完善客户信息后再提交！");
                }
            }
            else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
        //选中项目3
        $scope.threeProject=function ($index) {
            $scope.threepleaseSelect=false;//咨询医生初始化值
            $scope.threedgner=true;//选中值
            $scope.threechosenDrop=false;
            $scope.user.threeProjectName=$scope.projectQueryList[$index].projectName;
            $scope.user.threeprojectid=$scope.projectQueryList[$index].projectid;
            $scope.user.threeName="";
        }
    }
    /*设计师提交财务end*/


    /*设计师工作台失效保存start*/
        $scope.loseEfficacy=function(orderNo){
            $scope.user={};
            $scope.orderNo=orderNo;
            var msg="你确定要失效保存吗?";
            if(confirm(msg)==false){
                return false;
            }
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            $http.post($scope.app.host+'endOrder',{
                    orderNo:$scope.orderNo,
                    token:tokenSession
                }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        alert(response.msg);
                        $scope.designerStatus();
                    }
                }
                // if(response.status=="800"){
                //     $scope.modelauthError=response.msg;
                // }
            });
        }
    /*设计师工作台失效保存end*/

    /*设计师删除项目开始*/
    $scope.delproject=function(appointId){
        $scope.user={};
        $scope.appointId=appointId;
        var msg="你确定要删除吗?";
        if(confirm(msg)==false){
            return false;
        }
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'deleteProject',{
                appointId:$scope.appointId,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.submitStatus=="1"){
                    alert("删除项目成功！");
                    $scope.designerStatus();
                }
            }
            if(response.status=="800"){
                $scope.modelauthError=response.msg;
            }
        });

    }
    /*设计师删除项目结束*/
}
])
/*设计师工作台查询结束*/
/*设计师个人设置退回订单start*/
app.controller('backorderController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    $scope.noTable=false;
    $scope.user = {};
    $scope.tablelist = false;
    $scope.spread=true;    //展开列表
    $scope.retract=false;   //收起列表
    /*点击刷新*/
    $(".refresh").click(function () {
        $("#re-img").addClass("resh");
        $scope.designerStatus();
    });
    /*设计师退回订单台查询开始*/
    $scope.designerStatus=function(){
        $scope.user={};
        $scope.editProject=false;     //添加项目初始化不显示
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'returnOrderQuery',
            {
                pageSize:1,
                pageNo:1,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.page.list.length==0){
                        $scope.noTable=true;
                        $scope.isTable=false;
                    }else if(response.data.page.list.length>0){
                        //$scope.deslist=response.data.page.list;
                        $scope.isTable=true;
                        $scope.noTable=false;
                        $scope.customerName=response.data.page.list[0].customerName;
                        $scope.consultName=response.data.page.list[0].consultName;
                        $scope.customerPhone=response.data.page.list[0].customerPhone;
                        $scope.todayAppoint=response.data.page.list[0].todayAppoint;
                        $scope.monthAppoint=response.data.page.list[0].monthAppoint;
                        $scope.waitFor=response.data.page.list[0].waitFor;
                        $scope.designerName=response.data.page.list[0].designerName;//设计师
                        $scope.orderNo=response.data.page.list[0].orderNo;//订单号
                        $scope.operator=response.data.page.list[0].operator;//退款人
                        $scope.backRemark=response.data.page.list[0].backRemark;//退款原因
                        $scope.designerRemark=response.data.page.list[0].designerRemark;//设计师备注
                        $scope.orderStatus=response.data.page.list[0].orderStatus;//orderStatus
                        $scope.proceedMoney=response.data.page.list[0].proceedMoney;//已经支付金额
                        $scope.allmoney=response.data.page.list[0].costMoney;
                        $scope.customerId=response.data.page.list[0].customerId;
                        $scope.desuserList=response.data.page.list[0].project;//接待列表
                        $scope.detailPages=response.data.page.totalPages;//总共多少页
                        $scope.pageNo=response.data.page.pageNo;//当前页
                    }
                }
            }
            if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
    }
    $scope.designerStatus();//初始化执行函数
    $scope.single=1;
        /*上一页开始*/
    $scope.previousPage=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if($scope.single<=1){
            alert("已经是第一页了");
            $scope.single=1;
        }else if($scope.single!==""||$scope.single!== 1){
            $scope.single=$scope.single-1;
        }
        $http.post($scope.app.host+'returnOrderQuery',
            {
                pageSize:1,
                pageNo:$scope.single,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    //$scope.deslist=response.data.page.list;
                    $scope.customerName=response.data.page.list[0].customerName;
                        $scope.customerPhone=response.data.page.list[0].customerPhone;
                        $scope.todayAppoint=response.data.page.list[0].todayAppoint;
                        $scope.monthAppoint=response.data.page.list[0].monthAppoint;
                        $scope.waitFor=response.data.page.list[0].waitFor;
                        $scope.designerName=response.data.page.list[0].designerName;//设计师
                        $scope.orderNo=response.data.page.list[0].orderNo;//订单号
                        $scope.backRemark=response.data.page.list[0].backRemark;//退款原因
                        $scope.designerRemark=response.data.page.list[0].designerRemark;//设计师备注
                        $scope.orderStatus=response.data.page.list[0].orderStatus;//orderStatus
                        $scope.proceedMoney=response.data.page.list[0].proceedMoney;//已经支付金额
                        $scope.allmoney=response.data.page.list[0].costMoney;
                        $scope.customerId=response.data.page.list[0].customerId;
                        $scope.desuserList=response.data.page.list[0].project;//接待列表
                        $scope.detailPages=response.data.page.totalPages;//总共多少页
                }
            }
            if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
    }
    $scope.nextPage=function(){
        if($scope.single>=$scope.detailPages){
            // $(".right-btn").attr("disabled",true);
            // $(".left-btn").attr("disabled",false);
            alert("已经是最后一页了");
            $scope.single=$scope.detailPages;
        }
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if($scope.single=$scope.listPages){
            $scope.single=1;
        }else{
            $scope.single=$scope.single+1;
        }
        $http.post($scope.app.host+'returnOrderQuery',
            {
                pageSize:1,
                pageNo:$scope.single,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    //$scope.deslist=response.data.page.list;
                        $scope.customerName=response.data.page.list[0].customerName;
                        $scope.customerPhone=response.data.page.list[0].customerPhone;
                        $scope.todayAppoint=response.data.page.list[0].todayAppoint;
                        $scope.monthAppoint=response.data.page.list[0].monthAppoint;
                        $scope.waitFor=response.data.page.list[0].waitFor;
                        $scope.designerName=response.data.page.list[0].designerName;//设计师
                        $scope.orderNo=response.data.page.list[0].orderNo;//订单号
                        $scope.backRemark=response.data.page.list[0].backRemark;//退款原因
                        $scope.designerRemark=response.data.page.list[0].designerRemark;//设计师备注
                        $scope.orderStatus=response.data.page.list[0].orderStatus;//orderStatus
                        $scope.proceedMoney=response.data.page.list[0].proceedMoney;//已经支付金额
                        $scope.allmoney=response.data.page.list[0].costMoney;
                        $scope.customerId=response.data.page.list[0].customerId;
                        $scope.desuserList=response.data.page.list[0].project;//接待列表
                        $scope.detailPages=response.data.page.totalPages;//总共多少页
                        $scope.pageNo=response.data.page.pageNo;//当前页
                }
            }
            if(response.status=="800"){
                $scope.authError=response.msg;
            }
        });
    }
        /*下一页结束*/
   
    /*设计师工作台编辑项目开始*/
    // $scope.modalDrop=false;
    // $scope.modalDialog=false;
    $scope.Iseditproject=false;
    $scope.editproject=function(appid){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Iseditproject=true;
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        // 增加项目和修改项目开始
        if(appid.length==17){  
            $scope.addeditVal="增加项目";        //增加项目
            //项目一选择
            $scope.onepleaseSelect=true;//咨询医生初始化值
            $scope.onedgner=false;//选中值
            $scope.onechosenDrop=false;
            //显示第一个搜索框
            $scope.oneSingle=function(){
                $scope.onechosenDrop=!$scope.onechosenDrop;
                $scope.twochosenDrop=false;
                $scope.threechosenDrop=false;
                $scope.fourchosenDrop=false;
                $scope.onepleaseSelect=true;
                $(".onechosen-container").addClass("chosen-with-drop");
                var tokenSession=sessionStorage.getItem("session");
                $scope.user.projectType="1";//定义哪一个类别
                $scope.user.oneProjectname="";//定义初始化名称
                //请求热搜数据
                $http.post($scope.app.host+'projectQuery',{
                    projectType:$scope.user.projectType,
                    token:tokenSession,
                    projectName:$scope.user.oneProjectname
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            $scope.projectQueryList=response.projectQueryList;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            //选中项目1
            $scope.oneProject=function ($index) {
                $scope.onepleaseSelect=false;//咨询医生初始化值
                $scope.onedgner=true;//选中值
                $scope.onechosenDrop=false;
                $scope.user.oneProjectname=$scope.projectQueryList[$index].projectName;
                $scope.user.oneprojectid=$scope.projectQueryList[$index].projectId;
                $scope.user.oneName="";
                $scope.twopleaseSelect=true;  //重置项目2
                $scope.threepleaseSelect=true;  //重置项目3
            }
            //项目二选择
            $scope.twopleaseSelect=true;//咨询医生初始化值
            $scope.twodgner=false;//选中值
            $scope.twochosenDrop=false;
            //显示第二个搜索框
            $scope.twoSingle=function(){
                $scope.twochosenDrop=!$scope.twochosenDrop;
                $scope.onechosenDrop=false;
                $scope.threechosenDrop=false;
                $scope.fourchosenDrop=false;
                $scope.twopleaseSelect=true;
                $(".twochosen-container").addClass("chosen-with-drop");
                var tokenSession=sessionStorage.getItem("session");
                $scope.user.projectType="2";//定义哪一个类别
                $scope.user.twoProjectName="";//定义初始化名称
                //请求热搜数据
                $http.post($scope.app.host+'projectQuery',{
                    projectType:$scope.user.projectType,
                    token:tokenSession,
                    projectName:$scope.user.twoProjectName,
                    projectId:$scope.user.oneprojectid
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            $scope.projectQueryList=response.projectQueryList;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            //选中项目2
            $scope.twoProject=function ($index) {
                $scope.twopleaseSelect=false;//咨询医生初始化值
                $scope.twodgner=true;//选中值
                $scope.twochosenDrop=false;
                $scope.user.twoProjectName=$scope.projectQueryList[$index].projectName;
                $scope.user.twoprojectid=$scope.projectQueryList[$index].projectId;
                $scope.user.twomediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目2价钱*/
                $scope.user.twoName="";
                $scope.threepleaseSelect=true;  //重置项目3
            }
            //项目三选择
            $scope.threepleaseSelect=true;//咨询医生初始化值
            $scope.threedgner=false;//选中值
            $scope.threechosenDrop=false;
            //显示第三个搜索框
            $scope.threeSingle=function(){
                $scope.threechosenDrop=!$scope.threechosenDrop;
                $scope.twochosenDrop=false;
                $scope.onechosenDrop=false;
                $scope.fourchosenDrop=false;
                $scope.threepleaseSelect=true;
                $(".threechosen-container").addClass("chosen-with-drop");
                var tokenSession=sessionStorage.getItem("session");
                $scope.user.projectType="3";//定义哪一个类别
                $scope.user.threeProjectName="";//定义初始化名称
                //请求热搜数据
                $http.post($scope.app.host+'projectQuery',{
                    projectType:$scope.user.projectType,
                    token:tokenSession,
                    projectName:$scope.user.threeProjectName,
                    projectId:$scope.user.twoprojectid
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            $scope.projectQueryList=response.projectQueryList;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            //选中项目3
            $scope.threeProject=function ($index) {
                $scope.threepleaseSelect=false;//咨询医生初始化值
                $scope.threedgner=true;//选中值
                $scope.threechosenDrop=false;
                $scope.user.threeProjectName=$scope.projectQueryList[$index].projectName;
                $scope.user.threeprojectid=$scope.projectQueryList[$index].projectid;
                $scope.user.threeName="";
            }
             //自定义项目选择
             $scope.fourpleaseSelect=true;//咨询医生初始化值
             $scope.fourdgner=false;//选中值
             $scope.fourchosenDrop=false;
             //显示自定义搜索框
             $scope.fourSingle=function(){
                 $scope.fourchosenDrop=!$scope.fourchosenDrop;
                 $scope.twochosenDrop=false;
                $scope.threechosenDrop=false;
                $scope.onechosenDrop=false;
                 $scope.fourpleaseSelect=true;
                 $(".fourchosen-container").addClass("chosen-with-drop");
                 var tokenSession=sessionStorage.getItem("session");
                 $scope.user.fourProjectName="";//定义初始化名称
                 //请求热搜数据
                 $http.post($scope.app.host+'customProjectQuery',{
                     token:tokenSession,
                 }).success(function(response) {
                     if(response.status=="200"){
                         if(response.queryStatus=="1"){
                             $scope.customProjectQueries=response.customProjectQueries;
                         }
                     }else{
                         $scope.authError = response.msg;
                         if(response.msg=="登陆超时,请重新登陆"){
                             $state.go('access.signin');
                         }
                     }
                 });
             }
             //选中自定义项目
             $scope.fourProject=function ($index) {
                 $scope.fourpleaseSelect=false;//咨询医生初始化值
                 $scope.fourdgner=true;//选中值
                 $scope.fourchosenDrop=false;
                 $scope.user.fourProjectName=$scope.customProjectQueries[$index].projectName;
                 $scope.user.fourName="";
             }
             //医生下拉框选择
            $scope.fivepleaseSelect=true;//咨询医生初始化值
            $scope.fivedgner=false;//选中值
            $scope.fivechosenDrop=false;
            //显示第五个搜索框
            $scope.fiveSingle=function(){
                $scope.fivechosenDrop=!$scope.fivechosenDrop;
                $scope.fivepleaseSelect=true;
                $(".fivechosen-container").addClass("chosen-with-drop");
                var tokenSession=sessionStorage.getItem("session");
                $scope.user.fiveProjectName="";//定义初始化名称
                //请求热搜数据
                $http.post($scope.app.host+'enumsQuery',{
                    enums:"doctor_name",
                    token:tokenSession,
                }).success(function(response) {
                    if(response.status=="200"){
                        if(response.queryStatus=="1"){
                            $scope.paymentQueryList=response.paymentQueryList;
                        }
                    }else{
                        $scope.authError = response.msg;
                        if(response.msg=="登陆超时,请重新登陆"){
                            $state.go('access.signin');
                        }
                    }
                });
            }
            //选中医生
            $scope.fiveProject=function ($index) {
                $scope.fivepleaseSelect=false;//咨询医生初始化值
                $scope.fivedgner=true;//选中值
                $scope.fivechosenDrop=false;
                $scope.user.fiveProjectName=$scope.paymentQueryList[$index].enumname;
                $scope.user.fiveName="";
            }
            $scope.updateMsg=function(){
                 $scope.orderNo=appid;
                 /*我的项目和特色项目判断start*/
                 var myproject=$scope.user.threeProjectname || $scope.user.twoProjectName;
                 var teseproject=$scope.user.fourProjectName;
                 if(myproject && teseproject){
                     $scope.authError="我的项目和特色项目只能选一种";
                     return false;
                 }
                 if(isEmpty($scope.user.oneProjectname)){
                    $scope.user.oneProjectname="";
                 }
                 if(isEmpty($scope.user.twoProjectName)){
                    $scope.user.twoProjectName="";
                 }
                 if(isEmpty($scope.user.threeProjectName)){
                    $scope.user.threeProjectName="";
                 }
                 if(isEmpty($scope.user.fourProjectName)){
                    $scope.user.fourProjectName="";
                 }
                 if(isEmpty($scope.user.fiveProjectName)){
                    $scope.user.fiveProjectName="";
                 }
                 /*我的项目和特色项目判断end*/
                 if($scope.user.threeProjectname){
                    $http.post($scope.app.host+'addProject',{
                        token:tokenSession,
                        orderNo:$scope.orderNo,
                        oneProjectname:$scope.user.oneProjectname,
                        twoProjectname:$scope.user.twoProjectName,
                        threeProjectname:$scope.user.threeProjectName,
                        projectName:$scope.user.fourProjectName,
                        doctorName:$scope.user.fiveProjectName,
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                                $scope.authError=response.msg;
                                $scope.designerStatus();
                                $scope.modalDrop=false;
                                $scope.modalDialog=false;
                                $scope.Iseditproject=false;   
                            }
                        }else{
                            $scope.authError = response.msg;
                            if(response.msg=="登陆超时,请重新登陆"){
                                $state.go('access.signin');
                            }
                        }
                    });
                }else if($scope.user.twoProjectName){
                    $http.post($scope.app.host+'addProject',{
                        token:tokenSession,
                        orderNo:$scope.orderNo,
                        oneProjectname:$scope.user.oneProjectname,
                        twoProjectname:$scope.user.twoProjectName,
                        threeProjectname:$scope.user.threeProjectName,
                        projectName:$scope.user.fourProjectName,
                        doctorName:$scope.user.fiveProjectName,
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                                $scope.authError=response.msg;
                                $scope.designerStatus();
                                $scope.modalDrop=false;
                                $scope.modalDialog=false;
                                $scope.Iseditproject=false;   
                            }
                        }else{
                            $scope.authError = response.msg;
                            if(response.msg=="登陆超时,请重新登陆"){
                                $state.go('access.signin');
                            }
                        }
                    });
                }else if($scope.user.oneProjectname){
                    $http.post($scope.app.host+'addProject',{
                        token:tokenSession,
                        orderNo:$scope.orderNo,
                        oneProjectname:$scope.user.oneProjectname,
                        twoProjectname:$scope.user.twoProjectName,
                        threeProjectname:$scope.user.threeProjectName,
                        projectName:$scope.user.fourProjectName,
                        doctorName:$scope.user.fiveProjectName,
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                                $scope.authError=response.msg;
                                $scope.designerStatus();
                                $scope.modalDrop=false;
                                $scope.modalDialog=false;
                                $scope.Iseditproject=false;   
                            }
                        }else{
                            $scope.authError = response.msg;
                            if(response.msg=="登陆超时,请重新登陆"){
                                $state.go('access.signin');
                            }
                        }
                    });
                }else if($scope.user.fourProjectName){
                    $http.post($scope.app.host+'addProject',{
                        orderNo:$scope.orderNo,
                        oneProjectname:$scope.user.oneProjectname,
                        twoProjectname:$scope.user.twoProjectName,
                        threeProjectname:$scope.user.threeProjectName,
                        projectName:$scope.user.fourProjectName,
                        doctorName:$scope.user.fiveProjectName,
                        appointId:$scope.appointId,
                        token:tokenSession
                    }).success(function(response) {
                        if(response.status=="200"){
                            if(response.submitStatus=="1"){
                                $scope.authError=response.msg;
                                $scope.designerStatus();
                                $scope.modalDrop=false;
                                $scope.modalDialog=false;
                                $scope.Iseditproject=false;   
                            }
                        }else{
                            $scope.authError = response.msg;
                            if(response.msg=="登陆超时,请重新登陆"){
                                $state.go('access.signin');
                            }
                        }
                    });
                }else{
                    $scope.authError="请选择项目";
                    return false;
                }
            }
            $scope.cancel=function(){
                $scope.authError=null;
                $scope.Iseditproject=false;
                $scope.modalDrop=false;
                $scope.modalDialog=false;
                $scope.editMsg=false;
            }
        }else{                         //修改项目
            $scope.addeditVal="编辑项目";
            $scope.appointId=appid;
            $http.post($scope.app.host+'updateProjectQuery',
                {
                    appointId:$scope.appointId,
                    token:tokenSession
                }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        /*判断第一个项目是否存在，存在就显示*/
                        if(response.data.oneProjectname){
                            $scope.onepleaseSelect=false;
                            $scope.onedgner=true;
                            $scope.user.oneProjectname=response.data.oneProjectname;
                        }else{
                            $scope.onepleaseSelect=true;
                        }
                        /*判断第二个项目是否存在，存在就显示*/
                        if(response.data.twoProjectname){
                            $scope.twopleaseSelect=false;
                            $scope.twodgner=true;
                            $scope.user.twoProjectName=response.data.twoProjectname;
                        }else{
                            $scope.twopleaseSelect=true;
                        }
                        /*判断第三个项目是否存在，存在就显示*/
                        if(response.data.threeProjectname){
                            $scope.threepleaseSelect=false;
                            $scope.threedgner=true;
                            $scope.user.threeProjectName=response.data.threeProjectname;
                        }else{
                            $scope.threepleaseSelect=true;
                        }
                        /*判断第四个项目是否存在，存在就显示*/
                        if(response.data.projectName){
                            $scope.fourpleaseSelect=false;
                            $scope.fourdgner=true;
                            $scope.user.fourProjectName=response.data.projectName;
                        }else{
                            $scope.fourpleaseSelect=true;
                        }
                        /*判断医生是否存在，存在就显示*/
                        if(response.data.doctorName){
                            $scope.fivepleaseSelect=false;
                            $scope.fivedgner=true;
                            $scope.user.fiveProjectName=response.data.doctorName;
                        }else{
                            $scope.fivepleaseSelect=true;
                        }
                        //显示第一个搜索框
                        $scope.oneSingle=function(){
                            $scope.onechosenDrop=!$scope.onechosenDrop;
                            $scope.twochosenDrop=false;
                            $scope.threechosenDrop=false;
                            $scope.fourchosenDrop=false;
                            $scope.onepleaseSelect=true;
                            $(".onechosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.projectType="1";//定义哪一个类别
                            $scope.user.oneProjectname="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'projectQuery',{
                                projectType:$scope.user.projectType,
                                token:tokenSession,
                                projectName:$scope.user.oneProjectname
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.projectQueryList=response.projectQueryList;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中项目1
                        $scope.oneProject=function ($index) {
                            $scope.onepleaseSelect=false;//咨询医生初始化值
                            $scope.onedgner=true;//选中值
                            $scope.onechosenDrop=false;
                            $scope.user.oneProjectname=$scope.projectQueryList[$index].projectName;
                            $scope.user.oneprojectid=$scope.projectQueryList[$index].projectId;
                            $scope.user.oneName="";
                            $scope.twopleaseSelect=true;  //重置项目2
                            $scope.threepleaseSelect=true;  //重置项目3
                        }
                        //项目二选择
                        //显示第二个搜索框
                        $scope.twoSingle=function(){
                            $scope.twochosenDrop=!$scope.twochosenDrop;
                            $scope.onechosenDrop=false;
                            $scope.threechosenDrop=false;
                            $scope.fourchosenDrop=false;
                            $scope.twopleaseSelect=true;
                            $(".twochosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.projectType="2";//定义哪一个类别
                            $scope.user.twoProjectName="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'projectQuery',{
                                projectType:$scope.user.projectType,
                                token:tokenSession,
                                projectName:$scope.user.twoProjectName,
                                projectId:$scope.user.oneprojectid
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.projectQueryList=response.projectQueryList;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中项目2
                        $scope.twoProject=function ($index) {
                            $scope.twopleaseSelect=false;//咨询医生初始化值
                            $scope.twodgner=true;//选中值
                            $scope.twochosenDrop=false;
                            $scope.user.twoProjectName=$scope.projectQueryList[$index].projectName;
                            $scope.user.twoprojectid=$scope.projectQueryList[$index].projectId;
                            $scope.user.twomediaPrice=$scope.projectQueryList[$index].mediaPrice;/*项目2价钱*/
                            $scope.user.twoName="";
                            $scope.threepleaseSelect=true;  //重置项目3
                        }
                        //项目三选择
                        //显示第三个搜索框
                        $scope.threeSingle=function(){
                            $scope.threechosenDrop=!$scope.threechosenDrop;
                            $scope.twochosenDrop=false;
                            $scope.onechosenDrop=false;
                            $scope.fourchosenDrop=false;
                            $scope.threepleaseSelect=true;
                            $(".threechosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.projectType="3";//定义哪一个类别
                            $scope.user.threeProjectName="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'projectQuery',{
                                projectType:$scope.user.projectType,
                                token:tokenSession,
                                projectName:$scope.user.threeProjectName,
                                projectId:$scope.user.twoprojectid
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.projectQueryList=response.projectQueryList;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中项目3
                        $scope.threeProject=function ($index) {
                            $scope.threepleaseSelect=false;//咨询医生初始化值
                            $scope.threedgner=true;//选中值
                            $scope.threechosenDrop=false;
                            $scope.user.threeProjectName=$scope.projectQueryList[$index].projectName;
                            $scope.user.threeprojectid=$scope.projectQueryList[$index].projectid;
                            $scope.user.threeName="";
                        }
                        //自定义项目选择
                        //显示自定义搜索框
                        $scope.fourSingle=function(){
                            $scope.fourchosenDrop=!$scope.fourchosenDrop;
                            $scope.twochosenDrop=false;
                            $scope.threechosenDrop=false;
                            $scope.onechosenDrop=false;
                            $scope.fourpleaseSelect=true;
                            $(".fourchosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.fourProjectName="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'customProjectQuery',{
                                token:tokenSession,
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.customProjectQueries=response.customProjectQueries;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中自定义项目
                        $scope.fourProject=function ($index) {
                            $scope.fourpleaseSelect=false;//咨询医生初始化值
                            $scope.fourdgner=true;//选中值
                            $scope.fourchosenDrop=false;
                            $scope.user.fourProjectName=$scope.customProjectQueries[$index].projectName;
                            $scope.user.fourName="";
                        }
                        //医生下拉框选择
                        //显示第五个搜索框
                        $scope.fiveSingle=function(){
                            $scope.fivechosenDrop=!$scope.fivechosenDrop;
                            $scope.fivepleaseSelect=true;
                            $(".fivechosen-container").addClass("chosen-with-drop");
                            var tokenSession=sessionStorage.getItem("session");
                            $scope.user.fiveProjectName="";//定义初始化名称
                            //请求热搜数据
                            $http.post($scope.app.host+'enumsQuery',{
                                enums:"doctor_name",
                                token:tokenSession,
                            }).success(function(response) {
                                if(response.status=="200"){
                                    if(response.queryStatus=="1"){
                                        $scope.paymentQueryList=response.paymentQueryList;
                                    }
                                }else{
                                    $scope.authError = response.msg;
                                    if(response.msg=="登陆超时,请重新登陆"){
                                        $state.go('access.signin');
                                    }
                                }
                            });
                        }
                        //选中医生
                        $scope.fiveProject=function ($index) {
                            $scope.fivepleaseSelect=false;//咨询医生初始化值
                            $scope.fivedgner=true;//选中值
                            $scope.fivechosenDrop=false;
                            $scope.user.fiveProjectName=$scope.paymentQueryList[$index].enumname;
                            $scope.user.fiveName="";
                        }
                        /*修改项目信息提交*/
                        $scope.updateMsg=function(){
                            var tokenSession=sessionStorage.getItem("session");
                            if(isEmpty(tokenSession)){
                                $state.go('access.signin');
                                return false;
                            }
                            /*我的项目和特色项目判断start*/
                            var myproject=$scope.user.threeProjectname || $scope.user.twoProjectName;
                            var teseproject=$scope.user.fourProjectName;
                            if(myproject && teseproject){
                                $scope.authError="我的项目和特色项目只能选一种";
                                return false;
                            }
                            /*我的项目和特色项目判断end*/
                            /*编辑信息提交确认复选框是否正确start*/
                            if($scope.user.threeProjectname){
                                $http.post($scope.app.host+'updateProject',{
                                    oneProjectname:$scope.user.oneProjectname,
                                    twoProjectname:$scope.user.twoProjectName,
                                    threeProjectname:$scope.user.threeProjectName,
                                    projectName:$scope.user.fourProjectName,
                                    doctorName:$scope.user.fiveProjectName,
                                    appointId:$scope.appointId,
                                    token:tokenSession
                                }).success(function(response) {
                                    if(response.status=="200"){
                                        if(response.submitStatus=="1"){
                                            $scope.authError=response.msg;
                                            $scope.designerStatus();
                                            $scope.modalDrop=false;
                                            $scope.modalDialog=false;
                                            $scope.Iseditproject=false;   
                                        }
                                    }else{
                                        $scope.authError = response.msg;
                                        if(response.msg=="登陆超时,请重新登陆"){
                                            $state.go('access.signin');
                                        }
                                    }
                                });
                            }else if($scope.user.twoProjectName){
                                $http.post($scope.app.host+'updateProject',{
                                    oneProjectname:$scope.user.oneProjectname,
                                    twoProjectname:$scope.user.twoProjectName,
                                    threeProjectname:$scope.user.threeProjectName,
                                    projectName:$scope.user.fourProjectName,
                                    doctorName:$scope.user.fiveProjectName,
                                    appointId:$scope.appointId,
                                    token:tokenSession
                                }).success(function(response) {
                                    if(response.status=="200"){
                                        if(response.submitStatus=="1"){
                                            $scope.authError=response.msg;
                                            $scope.designerStatus();
                                            $scope.modalDrop=false;
                                            $scope.modalDialog=false;
                                            $scope.Iseditproject=false;  
                                        }
                                    }else{
                                        $scope.authError = response.msg;
                                        if(response.msg=="登陆超时,请重新登陆"){
                                            $state.go('access.signin');
                                        }
                                    }
                                });
                            }else if($scope.user.oneProjectname){
                                $http.post($scope.app.host+'updateProject',{
                                    oneProjectname:$scope.user.oneProjectname,
                                    twoProjectname:$scope.user.twoProjectName,
                                    threeProjectname:$scope.user.threeProjectName,
                                    projectName:$scope.user.fourProjectName,
                                    doctorName:$scope.user.fiveProjectName,
                                    appointId:$scope.appointId,
                                    token:tokenSession
                                }).success(function(response) {
                                    if(response.status=="200"){
                                        if(response.submitStatus=="1"){
                                            $scope.authError=response.msg;
                                            $scope.designerStatus();
                                            $scope.modalDrop=false;
                                            $scope.modalDialog=false;
                                            $scope.Iseditproject=false;  
                                        }
                                    }else{
                                        $scope.authError = response.msg;
                                        if(response.msg=="登陆超时,请重新登陆"){
                                            $state.go('access.signin');
                                        }
                                    }
                                });
                            }else if($scope.user.fourProjectName){
                                $http.post($scope.app.host+'updateProject',{
                                    oneProjectname:$scope.user.oneProjectname,
                                    twoProjectname:$scope.user.twoProjectName,
                                    threeProjectname:$scope.user.threeProjectName,
                                    projectName:$scope.user.fourProjectName,
                                    doctorName:$scope.user.fiveProjectName,
                                    appointId:$scope.appointId,
                                    token:tokenSession
                                }).success(function(response) {
                                    if(response.status=="200"){
                                        if(response.submitStatus=="1"){
                                            $scope.authError=response.msg;
                                            $scope.designerStatus();
                                            $scope.modalDrop=false;
                                            $scope.modalDialog=false;
                                            $scope.Iseditproject=false;  
                                        }
                                    }else{
                                        $scope.authError = response.msg;
                                        if(response.msg=="登陆超时,请重新登陆"){
                                            $state.go('access.signin');
                                        }
                                    }
                                });
                            }else{
                                $scope.authError="请选择项目";
                                return false;
                            }
                        }
                        $scope.cancel=function(){
                            $scope.Iseditproject=false;
                            $scope.modalDrop=false;
                            $scope.modalDialog=false;
                            $scope.editMsg=false;
                        }
                    }
                }
                if(response.status=="800"){
                    $scope.modelauthError=response.msg;
                }
            });
        }
        // 增加项目和修改项目结束
    }
    /*设计师个人设置退回订单编辑结束*/

    /*设计师退回订单合计金额start*/
    //$scope.inpmoney=0;
    $scope.actualMoney=function($index,inpmoney){   //inpmoney:实收金额 projectmoney:应缴金额
        //$scope.actualmoney=parseInt($scope.desuserList[$index].assessMoney);
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(!isEmpty(inpmoney)){
            $http.post($scope.app.host+'insertProjectmoney',{
                appointId:$scope.desuserList[$index].appointId,
                orderNo:$scope.orderNo,
                projectMoney:parseFloat(inpmoney),
                token:tokenSession,
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                    }
                }
            });
        }else{
            return false;
        }
        $scope.stopmoney=$scope.desuserList[$index].stopPrice;     //蓝标价
        $scope.dividomoney=$scope.desuserList[$index].dividoPrice; //分成价
        if(inpmoney<parseFloat($scope.stopmoney)){
            $(".inpmoney").eq($index).css("backgroundColor","#FBB7C1");  //实收金额小于媒体价为红色
        }else if(parseFloat($scope.stopmoney)<inpmoney<parseFloat($scope.dividomoney)){
            $(".inpmoney").eq($index).css("backgroundColor","#FDE491");//实收金额小于分成价为黄色
            if(inpmoney>parseFloat($scope.dividomoney)){
                $(".inpmoney").eq($index).css("backgroundColor","#fff");
            }
        }
        $scope.allmoney=0;
        for(var i in $scope.desuserList){
            $scope.allmoney+=$scope.desuserList[i].assessMoney?parseFloat($scope.desuserList[i].assessMoney):0;
        }
        if($scope.allmoney>=$scope.proceedMoney){
            //实收金额
            $scope.ssmoney=$scope.allmoney-$scope.proceedMoney;
        }
    }
    /*设计师退回订单实收金额end*/
    /*设计师退回订单提交财务start*/
    $scope.submitfinancial=function(orderNo){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.designerRemark)){
            $scope.designerRemark="";
        }
        $scope.submitLit=[];//提交需要的数组
        for(var i=0;i<$scope.desuserList.length;i++){
            var actualObject={};//提交需要的object
            if(isEmpty($scope.desuserList[i].projectMoney)){
                alert("请输入金额!");
                return false;
            }
            else{
                actualObject["projectMoney"]=$scope.desuserList[i].assessMoney;
                actualObject["appointId"]=$scope.desuserList[i].appointId;
                actualObject["assessMoney"]=$scope.desuserList[i].mediaPrice;
                $scope.submitLit.push(actualObject);
            }     
            if(parseFloat($scope.desuserList[i].assessMoney)<parseFloat($scope.desuserList[i].stopPrice)){
                alert("请输入正确的金额!");
                return false;
            }  
        }
        if($scope.allmoney<$scope.proceedMoney){
            alert("支付金额低于预付款!");
            return false;
        }else{
            $http.post($scope.app.host+'submitFinancial',{
                orderNo:orderNo,
                costMoney:$scope.allmoney,
                token:tokenSession,
                designerName:$scope.designerName,             //设计师名
                consultName:$scope.consultName,
                customerName:$scope.customerName,          //外场咨询
                designerRrmark:$scope.designerRemark,   //设计师备注
                list:$scope.submitLit
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        //$scope.projectQueryList=response.consultNameQueryList;
                        alert("提交成功！");
                        $scope.designerStatus();
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    /*设计师退回订单提交财务end*/


    /*设计师退回订单失效保存start*/
        $scope.loseEfficacy=function(orderNo){
            $scope.orderNo=orderNo;
            var msg="你确定要失效保存吗?";
            if(confirm(msg)==false){
                return false;
            }
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            $http.post($scope.app.host+'endOrder',{
                    orderNo:$scope.orderNo,
                    token:tokenSession
                }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        alert(response.msg);
                        $scope.designerStatus();
                    }
                }
            });
        }
    /*设计师退回订单失效保存end*/

    /*设计师删除项目开始*/
    $scope.delproject=function(appointId){
        $scope.user={};
        $scope.appointId=appointId;
        var msg="你确定要删除吗?";
        if(confirm(msg)==false){
            return false;
        }
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'deleteProject',{
                appointId:$scope.appointId,
                token:tokenSession
            }).success(function(response) {
            if(response.status=="200"){
                if(response.submitStatus=="1"){
                    alert("删除项目成功！");
                    $scope.designerStatus();
                }
            }
            if(response.status=="800"){
                $scope.modelauthError=response.msg;
            }
        });

    }
    /*设计师删除项目结束*/
}
])
/*设计师个人设置退回订单end*/

/*财务个人设置资料修改start*/
app.controller('moneyEditorController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;
    var tokenSession = sessionStorage.getItem("session");
    if (isEmpty(tokenSession)) {
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'updateDataQuery',
        {
            token:tokenSession,
        }).success(function(response) {
        if(response.status=="200"){
            $scope.datum=response;//资料
            $scope.datumPhone=response.phone;//手机号码
        }else{
            $scope.authError = response.msg;
            if(response.msg=="登陆超时,请重新登陆"){
                $state.go('access.signin');
            }
        }
    });
    /**-验证码登录-**/
    /**短信验证码倒计时**/
    $scope.codeMsg = "获取验证码";
    $scope.sendCode = function() {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.password)||isEmpty($scope.user.passwords)){
            $scope.authError="密码不能为空";
            return false;
        }
        if(checkIsMobile($scope.datumPhone)){
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $scope.authError="";
                $http.post($scope.app.host+'getAuthCode',{phone:$scope.user.phone}).success(function(response) {
                    if(response.status=="200"){
                        if(response.auchstatus=="0"){
                            //TODO 点击过了
                            flag = false;
                            $scope.authError =response.msg;
                        }else if(response.auchstatus=="1"){
                            $scope.disable = false;
                            var timer = setInterval(function() {
                                if (time > 0) {
                                    time--;
                                    $scope.$apply(function() {
                                        $scope.codeMsg = time + '秒后再发送';
                                        $scope.disable = false;
                                    });
                                } else {
                                    $scope.$apply(function() {
                                        $scope.codeMsg = "获取验证码";
                                        $scope.disable = true;
                                    });
                                    clearInterval(timer);
                                }
                            }, 1000);
                        }
                    }
                });
            }
        }else{
            $scope.authError = "手机号码格式错误";
        }
    }
    $scope.audit=function () {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if($scope.user.password==$scope.user.passwords){
            $http.post($scope.app.host+'updateData', {
                phone: $scope.datumPhone, 
                password: $scope.user.passwords,
                authCode:$scope.user.authCode,
                token:tokenSession
            })
                .then(function(response) {
                    if(response.data.status == "200"){
                        $scope.authError = response.data.msg;
                    }else{
                        $scope.authError = response.data.msg;
                    }
                }, function(x) {
                    $scope.authError = 'Server Error';
                });
        }else{
            $scope.authError = "两次密码不一致，请重输！";
        }
        //Try to create
    }
}]);
/*财务个人设置资料修改end*/

/*财务个人设置收款记录start*/
app.controller('moneyrecordController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    $scope.user={};
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    //Try to create
    $scope.Screening=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.queryData)){
            $scope.user.queryData="";
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        if(isEmpty($scope.dts)){
            $scope.dts="";
        }
        $http.post($scope.app.host+'collectRecord',
            {
                queryData:$scope.user.queryData,
                startDate:$scope.dt,
                stopDate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:1
            }).success(function(response) {
               if(response.status=="200"){
                   if(response.data.list.length==0){
                    $scope.NoRecords=true;
                    $scope.IsRecords=false;
                   }else{
                        $scope.IsRecords=true;
                        $scope.NoRecords=false;
                        $scope.recordsList=response.data.list;
                        $scope.detailPages=response.data.totalPages;//总共多少页
                        $scope.detailPager= {
                            totalElements: response.data.totalRecords,
                            pageSize:10,
                            pageNo:response.data.pageNo
                        }
                   }
               }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.Screening();
    /**记录切换页**/
    $scope.recordPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        if(isEmpty($scope.dt)){
            $scope.dt="";
        }
        $http.post($scope.app.host+'collectRecord',
            {
                queryData:$scope.user.queryData,
                startDate:$scope.dt,
                stopDate:$scope.dts,
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
            $scope.recordsList=response.data.data.list;
        });
    }
    /*详情*/
    $scope.detailInfo=function($index){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isedituser=true;
        $http.post($scope.app.host+'orderDetail',
            {
                token:tokenSession,
                orderNo:$scope.recordsList[$index].orderNo
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        $scope.orsList=response.data;//头部数据
                        $scope.markList=response.data.list;//展示数据
                    }
                }
        });
    }
    $scope.cancel=function(){
        $scope.modalDrop=false;
        $scope.modalDialog=false;
        $scope.Isedituser=false;
    }
    /*退回更改end*/

    /**--日期时间-start**/
    $scope.dateChange=function(t){
        $scope.dt = $filter('date')(t, 'yyyy-MM-dd');
        if(!isEmpty($scope.dts)){
            if($scope.dt>$scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }else if($scope.dt == $scope.dts){
                $scope.dt = $filter('date')(new Date(), 'yyyy-MM-dd');
            }
        }
    }
    $scope.datChange=function(dts){
        $scope.dts = $filter('date')(dts, 'yyyy-MM-dd');
        if($scope.dts<$scope.dt){
            $scope.dts="";
        }else if($scope.dts == $scope.dt){
            $scope.dts="";
        }
    }
    /**当前时间**/
    $scope.today = function() {
       /* var dt = new Date();
        //开始时间
        $scope.dt = $filter('date')(dt, 'yyyy-MM-dd');
        $scope.user.appointmenttime=$scope.dt;*/
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
        $scope.dts = null;
    };
    // Disable weekend selection
    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
    $scope.opens = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opensMore = true;
    };
    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };
    $scope.initDate = new Date('2016-15-20');
    //$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.formats = "yyyy-MM-dd";//HH是24小时，hh是12小时-HH:mm:ss
    $scope.format = $scope.formats;
    /**--日期时间-end**/
}]);

/*财务个人设置收款记录end*/

/*护士工作台start*/
app.controller('nurseController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    /*点击刷新*/
    $(".refresh").click(function () {
        $("#re-img").toggleClass("resh");
        $scope.nurseStatus();
    });
    $scope.user={};
    /*查询数据start*/
    var pageNo=1;
    $scope.nurseStatus=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }   
        /*查询医生start*/
        $http.post($scope.app.host+'enumsQuery',{
            token:tokenSession,
            enums:"doctor_name"
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.doctorQueryList=response.paymentQueryList;
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
        /*查询护士start*/
        $http.post($scope.app.host+'roleQuery',{
            role:4,
            token:tokenSession,
            designername:""
        }).success(function(response) {
        if(response.status=="200"){
            if(response.queryStatus=="1"){
                $scope.nurseQueryList=response.roleQueryList;
            }
        }else{
            $scope.authError = response.msg;
            if(response.msg=="登陆超时,请重新登陆"){
                $state.go('access.signin');
            }
        }
        });

        $http.post($scope.app.host+'nurseWorkbench',{
            pageSize:5,
            token:tokenSession,
            pageNo:pageNo
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText=="暂无更多数据";
                        $scope.noTable=true;
                        $scope.orderList=false;
                    }else{
                        $scope.noTable=false;
                        $scope.orderList=true;
                        $scope.loadingText="加载更多";
                        $scope.nurseList=response.data.list;
                    } 
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.nurseStatus();
    $scope.loadingMore=function () {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }   
        pageNo=pageNo+1;
        $http.post($scope.app.host+'nurseWorkbench',
            {
                token:tokenSession,
                pageSize:5,
                pageNo:pageNo
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.nurseList=$scope.nurseList.concat(response.data.list);
                    }
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }     
    /*选中跟台护士*/
    $scope.changenurse=function ($index) {
        $scope.hiddennurse=false;
        $scope.nursevalue=$scope.nurseQueryList[0].rolename;
    }
    /*选中医生*/
    $scope.change=function($index){
        $scope.hiddendoctor=false;
        $scope.doctorvalue=$scope.doctorQueryList[$index].enumname;
    }
    /*选中医生end*/
    /*开始手术start*/
    $scope.startOperation=function($index){
        if(isEmpty($scope.nurseList[$index].nuserName)){
            alert("请选择护士！");
            return false;
        }
        $scope.submitLit=[];//提交数组
        var strlength=$scope.nurseList[$index].project;
        for(var i=0;i<strlength.length;i++){
            let actualObject={};
             actualObject["appointId"]=strlength[i].appointId;
             actualObject["doctorName"]=strlength[i].doctorName;
            if(isEmpty(strlength[i].doctorName)){
                alert("请选择医生！");
                return false;
            }else{
                 actualObject["doctorName"]=strlength[i].doctorName;
            }
            $scope.submitLit.push( actualObject);  
        }
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isoperation=true;
        $scope.Isedituser=false;
        $scope.IsOverorder=false;
        $scope.user.nurseName=$scope.nurseList[$index].nuserName;
        $scope.startopera=function(){
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            $http.post($scope.app.host+'operationBegin',{
                orderNo:$scope.nurseList[$index].orderNo,
                nurseName:$scope.user.nurseName,
                token:tokenSession,
                list:$scope.submitLit
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.nurseStatus();
                        $scope.modalDrop=false;
                        $scope.modalDialog=false;
                        $scope.Isedituser=false;
                        $scope.Isoperation=false;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
            
    }
    /*开始手术end*/
    /*完成手术start*/
    $scope.finishOperation=function($index){
        $scope.orderNo=$scope.nurseList[$index].orderNo;
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isfinish=true;
        $scope.Isoperation=false;
        $scope.Isedituser=false;
        $scope.finishopera=function(){
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            $http.post($scope.app.host+'operationEnd',{
                orderNo:$scope.orderNo,
                token:tokenSession,
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.nurseStatus();
                        $scope.modalDrop=false;
                        $scope.modalDialog=false;
                        $scope.Isedituser=false;
                        $scope.Isoperation=false;
                        $scope.IsOverorder=false;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    /*完成手术end*/
    /*退回更改start*/
    $scope.backchange=function(orderNo){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Isedituser=true;
        $scope.Isoperation=false;
        $scope.Isfinish=false;
        $scope.update=function(){
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            if(isEmpty($scope.user.othercontagion)){
                alert("请输入退回原因！");
                return false;
            }
            $http.post($scope.app.host+'returnUpdate',{
                orderNo:orderNo,
                token:tokenSession,
                questionRemark:$scope.user.othercontagion
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.nurseStatus();
                        $scope.modalDrop=false;
                        $scope.modalDialog=false;
                        $scope.Isedituser=false;
                        $scope.Isoperation=false;
                        $scope.IsOverorder=false;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    /*结束订单*/
    $scope.overorder=function(orderNo){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.IsOverorder=true;
        $scope.Isedituser=false;
        $scope.Isoperation=false;
        $scope.Isfinish=false;
        $scope.endOrder=function(){
            var tokenSession=sessionStorage.getItem("session");
            if(isEmpty(tokenSession)){
                $state.go('access.signin');
                return false;
            }
            $http.post($scope.app.host+'endOrder',{
                orderNo:orderNo,
                token:tokenSession,
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $scope.nurseStatus();
                        $scope.modalDrop=false;
                        $scope.modalDialog=false;
                        $scope.Isedituser=false;
                        $scope.Isoperation=false;
                        $scope.IsOverorder=false;
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
        }
    }
    $scope.cancel=function(){
        $scope.modalDrop=false;
        $scope.modalDialog=false;
        $scope.Isedituser=false;
        $scope.Isoperation=false;
        $scope.Isfinish=false;
        $scope.IsOverorder=false;
    }
    /*退回更改end*/
}]);
/*护士工作台end*/

/*护士工作台查看订单页start*/
app.controller('nursecheckController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $scope.checkPrint=function(){
        var headstr = "<html><head><title></title></head><body>";  //打印头部
        var footstr = "</body></html>";  //打印尾部
        var printData = document.getElementById("print").innerHTML; //获得id 里的所有 html 数据
        var oldstr = document.body.innerHTML;
        //document.body.innerHTML = headstr+printData+footstr;
        document.body.innerHTML = headstr+printData+footstr;
        window.print();
        document.body.innerHTML = oldstr;   //保持原页面格式
        location.reload();
    }
        //查看订单接口对接
    $http.post($scope.app.host+'orderDetail',
        {
            token:tokenSession,
            orderNo:GetQueryString("orderNo")
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.orsList=response.data;//头部数据
                    $scope.markList=response.data.list;//展示数据
                    $scope.printText=response.data.orderStatus;//打印状态显示
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
    });
    $scope.cancel=function () {
        history.go(-1);
    }
}]);
/*护士工作台查看订单页end*/


/*护士今日预约名单start*/
app.controller('todaypreController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var pageNo=1;
    $scope.todayPre=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'todayAppoint',{
            pageSize:5,
            token:tokenSession,
            pageNo:pageNo
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.noTable=true;
                        $scope.todaypreList=false;
                    }else{
                        $scope.noTable=false;
                        $scope.todaypreList=true;
                        $scope.todaypreList=response.data.list;
                        $scope.detailPages=response.data.totalPages;//总共多少页
                       $scope.detailPager= {
                           totalElements: response.data.totalRecords,
                           pageSize:10,
                           pageNo:response.data.pageNo
                       }
                    } 
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.todayPre();    //初始化执行函数
     /**今日预约名单信息分页切换**/
     $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'todayAppoint',
            {
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
                $scope.todaypreList=response.data.list;//接待记录列表信息
        });
    }
}]);
/*护士今日预约名单end*/

/*护士未来订单start*/
app.controller('futureorderController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var pageNo=1;
    $scope.futureOrder=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'pendingAppoint',{
            pageSize:5,
            token:tokenSession,
            pageNo:pageNo
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.noTable=true;
                        $scope.todaypreList=false;
                    }else{
                        $scope.noTable=false;
                        $scope.todaypreList=true;
                        $scope.futureList=response.data.list;
                        $scope.detailPages=response.data.totalPages;//总共多少页
                        $scope.detailPager= {
                            totalElements: response.data.totalRecords,
                            pageSize:10,
                            pageNo:response.data.pageNo
                        }
                    } 
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.futureOrder();    //初始化执行函数
     /**未来订单信息分页切换**/
     $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'todayAppoint',
            {
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
                $scope.todaypreList=response.data.list;//接待记录列表信息
        });
    }
}]);
/*护士未来订单end*/

/*护士预约管理订单详情start*/
app.controller('orderdetailController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var pageNo=1;
    var custoid=GetQueryString("customerid");
    $scope.futureOrder=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'detailCustomer',{
            token:tokenSession,
            customerid:GetQueryString("customerid")
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.noTable=false;
                    $scope.todaypreList=true;
                    $scope.list=response.data;
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });

        /*展开列表*/
        $scope.zk=true;
        $scope.sq=false;
        $scope.openTableList=function(){
            $scope.zk=false;
            $scope.sq=true;
            /*近期预约情况查询*/
            $http.post($scope.app.host+'appointmentQuery',{
                token:tokenSession,
                customerId:custoid,
                pageNo:pageNo,
                pageSize:10
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.queryStatus=="1"){
                        if(response.data.list.length==0){
                            $scope.prelist=false;
                            $scope.noTable=true;
                        }else{
                            $scope.noTable=false;
                            $scope.prelist=true;
                            $scope.preList=response.data.list;
                            $scope.detailPages=response.data.totalPages;//总共多少页
                            $scope.detailPager= {
                                totalElements: response.data.totalRecords,
                                pageSize:10,
                                pageNo:response.data.pageNo
                            }
                        }
                    }
                }else{
                    $scope.authError = response.msg;
                    if(response.msg=="登陆超时,请重新登陆"){
                        $state.go('access.signin');
                    }
                }
            });
            /*分页切换*/
            $scope.cagPage = function (pager) {
                var tokenSession=sessionStorage.getItem("session");
                if(isEmpty(tokenSession)){
                    $state.go('access.signin');
                    return false;
                }
                var curPage = pager.pageNo;
                var ss = {
                    pi: curPage
                }
                $http.post($scope.app.host+'appointmentQuery',
                    {
                        token:tokenSession,
                        pageSize:10,
                        pageNo:ss.pi
                    }).success(function(response) {
                        $scope.recordList=response.data.list;//接待记录列表信息
                });
            }
        }
        $scope.retractlist=function(){
            $scope.zk=true;
            $scope.sq=false;
            $scope.noTable=false;
        }
        
    }
    $scope.futureOrder();    //初始化执行函数
    // $scope.appointmsg=function(){

    // }

     /**未来订单信息分页切换**/
     $scope.cagPage = function (pager) {
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        var curPage = pager.pageNo;
        var ss = {
            pi: curPage
        }
        $http.post($scope.app.host+'todayAppoint',
            {
                token:tokenSession,
                pageSize:10,
                pageNo:ss.pi
            }).success(function(response) {
                $scope.todaypreList=response.data.list;//接待记录列表信息
        });
    }
}]);
/*护士预约管理订单详情end*/

/*护士资料修改start*/
app.controller('nurseEditorController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;
    var tokenSession = sessionStorage.getItem("session");
    if (isEmpty(tokenSession)) {
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'updateDataQuery',
        {
            token:tokenSession,
        }).success(function(response) {
            if(response.status=="200"){
                $scope.datum=response;//资料
                $scope.datumPhone=response.phone;//手机号码
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
    });
    /**-验证码登录-**/
    /**短信验证码倒计时**/
    $scope.codeMsg = "获取验证码";
    $scope.sendCode = function() {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.password)||isEmpty($scope.user.passwords)){
            $scope.authError="密码不能为空";
            return false;
        }
        if(checkIsMobile($scope.datumPhone)){
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $scope.authError="";
                $http.post($scope.app.host+'getAuthCode',{phone:$scope.datumPhone}).success(function(response) {
                    if(response.status=="200"){
                        if(response.auchstatus=="0"){
                            //TODO 点击过了
                            flag = false;
                            $scope.authError =response.msg;
                        }else if(response.auchstatus=="1"){
                            $scope.disable = false;
                            var timer = setInterval(function() {
                                if (time > 0) {
                                    time--;
                                    $scope.$apply(function() {
                                        $scope.codeMsg = time + '秒后再发送';
                                        $scope.disable = false;
                                    });
                                } else {
                                    $scope.$apply(function() {
                                        $scope.codeMsg = "获取验证码";
                                        $scope.disable = true;
                                    });
                                    clearInterval(timer);
                                }
                            }, 1000);
                        }
                    }
                });
            }
        }else{
            $scope.authError = "手机号码格式错误";
        }
    }
    $scope.audit=function () {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if($scope.user.password==$scope.user.passwords){
            $http.post($scope.app.host+'updateData', {
                phone: $scope.datumPhone, 
                password: $scope.user.passwords,
                authCode:$scope.user.authCode,
                token:tokenSession
            })
                .then(function(response) {
                    if(response.data.status == "200"){
                        $scope.authError = response.data.msg;
                    }else{
                        $scope.authError = response.data.msg;
                    }
                }, function(x) {
                    $scope.authError = 'Server Error';
                });
        }else{
            $scope.authError = "两次密码不一致，请重输！";
        }
        //Try to create
    }
}]);
/*护士资料修改end*/
/*客服工作台start*/
app.controller('serviceController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    /*点击刷新*/
    $(".refresh").click(function () {
        $("#re-img").toggleClass("resh");
        $scope.checkHistory();
    });
    var pageNo=1;
    $scope.checkHistory=function(){
        var tokenSession=sessionStorage.getItem("session");
        if(isEmpty(tokenSession)){
            $state.go('access.signin');
            return false;
        }
        $http.post($scope.app.host+'serviceWorkbench',{
            pageSize:5,
            token:tokenSession,
            pageNo:pageNo
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        //$scope.loadingText="暂无更多数据";
                        $scope.noTable=true;
                        $scope.fuList=false;
                    }else{
                        $scope.noTable=false;
                        $scope.fuList=true;
                        $scope.loadingText="加载更多";
                        $scope.serviceList=response.data.list;
                        //$scope.project=response.data.list.project;
                        /*判断是否上传过图片*/
                        for(var i=0;i<$scope.serviceList.length;i++){
                            for(var j=0;j<$scope.serviceList[i].project.length;j++){
                                if($scope.serviceList[i].project[j].isImage=="2"){
                                   $scope.serviceList[i].status="22"; 
                                }else{
                                    $scope.serviceList[i].status="11"; 
                                }
                            }
                        }
                    } 
                }
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }
    $scope.checkHistory();    //初始化执行函数
    $scope.loadingMore=function () {
        pageNo=pageNo+1;
        $http.post($scope.app.host+'serviceWorkbench',
            {
                token:tokenSession,
                pageSize:5,
                pageNo:pageNo
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.serviceList=$scope.serviceList.concat(response.data.list);
                    }
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
        });
    }

    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /*确认打款start*/
    $scope.confirmmoney=function(orderNo){
        $scope.modalDrop=true;
        $scope.modalDialog=true;
        $scope.Ismakemoney=true;
        $scope.confirmmoney=function(){
            $http.post($scope.app.host+'confirmRemitCreate',
            {
                token:tokenSession,
                orderNo:orderNo
            }).success(function(response) {
            if(response.status=="200"){
                if(response.submitStatus=="1"){
                    $scope.checkHistory();    
                    $scope.modalDrop=false;
                    $scope.modalDialog=false;
                    $scope.Ismakemoney=false;
                }
            }else{
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
            });
        }
    }
    /*确认打款end*/

    /*返回start*/
    $scope.cancel=function(){
        $scope.modalDrop=false;
        $scope.modalDialog=false;
        $scope.Ismakemoney=false;
    }
    /*返回end*/
}]);
/*客服工作台end*/
/*照片详情start*/
app.controller('serviceAboutCtrl', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'customerImage',
        {
            token:tokenSession,
            orderNo:GetQueryString("orderNo"),
            appointId:GetQueryString("appointId")
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.detailmsg=response.data;//图片详情展示数据
                    $scope.detImgLis=response.data.list_first;//图片术前
                    $scope.detImgLit=response.data.list_second;//图片术后
                }
            }
    });
}]);
/*照片详情end*/
/*完善客户信息start*/
app.controller('porvemsgController',['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /**-店铺转账查询-**/
    var pageNo=1;//初始化页面第一页
    if(isEmpty(GetQueryString("orderNo"))){
        var orderIdNode="";
    }else{
        orderIdNode=GetQueryString("orderNo");
    }
    $http.post($scope.app.host+'completeManage',
        {
            orderNo:orderIdNode,
            token:tokenSession,
            pageSize:5,
            pageNo:pageNo
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        //$scope.loadingText="暂无更多数据";
                        $scope.noTable=true;
                        $scope.serviceList=false;
                    }else{
                        $scope.noTable=false;
                        $scope.serviceList=true;
                        $scope.loadingText="加载更多";
                        $scope.provemsgList=response.data.list;//店铺转账展示数据
                    }
                }
            }else if(response.status=="800" && response.msg=="登陆超时,请重新登陆"){
                $state.go('access.signin');
            }
    });
    $scope.loadingMore=function () {
        pageNo=pageNo+1;
        $http.post($scope.app.host+'completeManage',
            {
                token:tokenSession,
                pageSize:5,
                pageNo:pageNo
            }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    if(response.data.list.length==0){
                        $scope.loadingText="暂无更多数据";
                    }else{
                        $scope.loadingText="加载更多";
                        $scope.workbenchList=$scope.workbenchList.concat(response.data.list);//店铺转账展示数据
                    }
                }
            }
        });
    }
}]);
/*完善客户信息end*/


/*客服个人设置操作记录start*/
app.controller('sethandleController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter){
   $scope.user = {};
   $scope.authError = null;
   $scope.noRecords=false;
   $scope.isRecords=false;
   var tokenSession=sessionStorage.getItem("session");
   if(isEmpty(tokenSession)){
       $state.go('access.signin');
       return false;
   }
   $http.post($scope.app.host+'operatingRecord',
       {
           token:tokenSession,
           pageSize:10,
           pageNo:1
       }).success(function(response) {
           if(response.status=="200"){
               if(response.data.list.length=="0"){
                   $scope.noRecords=true;
                   $scope.isRecords=false;
               }else{
                   if(response.data.list.length==0){
                       $scope.noRecords=true;
                       $scope.isRecords=false;
                   }else{
                       $scope.noRecords=false;
                        $scope.isRecords=true;
                        $scope.detailList=response.data.list;//列表信息
                        $scope.detailPages=response.data.totalPages;//总共多少页
                        $scope.detailPager= {
                            totalElements: response.data.totalRecords,
                            pageSize:10,
                            pageNo:response.data.pageNo
                        }
                   } 
               }
           }else{
               $scope.authError = response.msg;
               if(response.msg=="登陆超时,请重新登陆"){
                   $state.go('access.signin');
               }
           }
   });
   /**操作记录分页切换页**/
   $scope.cagPage = function (pager) {
       var tokenSession=sessionStorage.getItem("session");
       if(isEmpty(tokenSession)){
           $state.go('access.signin');
           return false;
       }
       var curPage = pager.pageNo;
       var ss = {
           pi: curPage
       }
       $http.post($scope.app.host+'receivingRecord',
           {
               token:tokenSession,
               pageSize:10,
               pageNo:ss.pi
           }).success(function(response) {
               $scope.recordList=response.data.list;//接待记录列表信息
       });
   }
   /**记录详情**/
   $scope.modalDrop=false;
   $scope.modalDialog=false;
   $scope.openRecordsId = function (size) {
       $http.post($scope.app.host+'detailAppoint',
           {
               orderno:$scope.recordList[size].orderNo,
               token:tokenSession,
           }).success(function(response) {
               $scope.modalDrop=true;
               $scope.modalDialog=true;
               $scope.aboutList=response.data;//预约详情
       });
       $http.post($scope.app.host+'detailCustomer',
           {
               customerid:$scope.recordList[size].customerId,
               token:tokenSession,
           }).success(function(response) {
           $scope.modalDrop=true;
           $scope.modalDialog=true;
           $scope.clientDetails=response.data;//客户详情
       });
   };
   /**预约详情返回事件处理**/
   $scope.goBack=function () {
       $scope.modalDrop=false;
       $scope.modalDialog=false;
   }
   /**客户详情返回事件处理**/
   $scope.cancel=function () {
       $scope.modalDrop=false;
       $scope.modalDialog=false;
   }
}]);
/*客服个人设置操作记录end*/

/*客服个人设置资料修改start*/
app.controller('editserviceController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user = {};
    $scope.authError = null;
    $scope.disable = true;
    var tokenSession = sessionStorage.getItem("session");
    if (isEmpty(tokenSession)) {
        $state.go('access.signin');
        return false;
    }
    $http.post($scope.app.host+'updateDataQuery',
        {
            token:tokenSession,
        }).success(function(response) {
            if(response.status=="200"){
                $scope.datum=response;//资料
                $scope.datumPhone=response.phone;//手机号码
            }else{
                $scope.authError = response.msg;
                if(response.msg=="登陆超时,请重新登陆"){
                    $state.go('access.signin');
                }
            }
    });
    /**-验证码登录-**/
    /**短信验证码倒计时**/
    $scope.codeMsg = "获取验证码";
    $scope.sendCode = function() {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if(isEmpty($scope.user.password)||isEmpty($scope.user.passwords)){
            $scope.authError="密码不能为空";
            return false;
        }
        if(checkIsMobile($scope.datumPhone)){
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $scope.authError="";
                $http.post($scope.app.host+'getAuthCode',{phone:$scope.datumPhone}).success(function(response) {
                    if(response.status=="200"){
                        if(response.auchstatus=="0"){
                            //TODO 点击过了
                            flag = false;
                            $scope.authError =response.msg;
                        }else if(response.auchstatus=="1"){
                            $scope.disable = false;
                            var timer = setInterval(function() {
                                if (time > 0) {
                                    time--;
                                    $scope.$apply(function() {
                                        $scope.codeMsg = time + '秒后再发送';
                                        $scope.disable = false;
                                    });
                                } else {
                                    $scope.$apply(function() {
                                        $scope.codeMsg = "获取验证码";
                                        $scope.disable = true;
                                    });
                                    clearInterval(timer);
                                }
                            }, 1000);
                        }
                    }
                });
            }
        }else{
            $scope.authError = "手机号码格式错误";
        }
    }
    $scope.audit=function () {
        var tokenSession = sessionStorage.getItem("session");
        if (isEmpty(tokenSession)) {
            $state.go('access.signin');
            return false;
        }
        if($scope.user.password==$scope.user.passwords){
            $http.post($scope.app.host+'updateData', {
                phone: $scope.datumPhone, 
                password: $scope.user.passwords,
                authCode:$scope.user.authCode,
                token:tokenSession
            })
                .then(function(response) {
                    if(response.data.status == "200"){
                        $scope.authError = response.data.msg;
                    }else{
                        $scope.authError = response.data.msg;
                    }
                }, function(x) {
                    $scope.authError = 'Server Error';
                });
        }else{
            $scope.authError = "两次密码不一致，请重输！";
        }
        //Try to create
    }
}]);
/**
 *
 * 资料修改
/*客服个人设置资料修改end*/

app.controller('navController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.sliberTab={
        station:sessionStorage.getItem("station"),//所属岗位传递
        department:sessionStorage.getItem("department")//所属部门传递
      }
}]);
app.controller('headerController', ['$scope', '$http','$q','$state','$timeout','$filter',function($scope, $http,$q, $state,$timeout,$filter) {
    $scope.user={
        userName:sessionStorage.getItem("userName"),//用户名传递
      }
}]);
