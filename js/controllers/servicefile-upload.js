// 完善客户信息上传照片
app.controller('serviceFileUploadCtrl', ['$scope','$http','$q','$state','$timeout','$filter','FileUploader',function($scope, $http,$q, $state,$timeout,$filter,FileUploader) {
    // CALLBACKS
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /**-完善客户信息查询-start**/
    $http.post($scope.app.host+'completeDetail',
        {
            token:tokenSession,
            orderNo:GetQueryString("orderNo"),
            appointId:GetQueryString("appointId")
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.detailmsg=response.data;//完善信息详情展示数据
                }
            }
    });
    /**-完善客户信息-end**/

    var uploader = $scope.uploader = new FileUploader({});
    uploader.filters.push({
        name: 'customFilter',
        fn: function(item, options) {
        return this.queue.length < 10;
        }
    });
     /*术前照片*/
    $scope.oneUpload=function(){
        uploader.onAfterAddingFile = function(fileItems) {
            $scope.fileItem = fileItems;
            var str="";
            var reader = new FileReader();
            reader.addEventListener("load", function (e) {
                //文件加载完之后，更新angular绑定
                $scope.$apply(function(){
                    $scope.iconUrl = e.target.result;
                    str += '<div style="width:150px;height:150px;float: left;margin-right: 10px;position: relative;" class="inline bg-white wrapper-sm b-a"><img type="'+fileItems._file.type+'" src="'+$scope.iconUrl+'" alt="" width="100%" height="100%" /></div>';
                });
                $("#ques").append(str);
                $("#result").find("li:gt(0)").hide();
            }, false);
            reader.readAsDataURL($scope.fileItem._file);
        };
    }
        /*术后照片*/
    $scope.twoUpload=function(){
        uploader.onAfterAddingFile = function(fileItrs) {
            $scope.fileItrs = fileItrs;
            var str="";
            var reader = new FileReader();
            reader.addEventListener("load", function (e) {
                //文件加载完之后，更新angular绑定
                $scope.$apply(function(){
                    $scope.iconUrl = e.target.result;
                    str += '<div style="width:150px;height:150px;float: left;margin-right: 10px;position: relative;" class="inline bg-white wrapper-sm b-a"><img type="'+fileItrs._file.type+'" src="'+$scope.iconUrl+'" alt="" width="100%" height="100%" /></div>';
                });
                $("#ques-second").append(str);
                $("#result-second").find("li:gt(0)").hide();
            }, false);
            reader.readAsDataURL($scope.fileItrs._file);
        };
    }
    $scope.eliminate=function(item){
        item.splice(0,item.length);
    }
    $scope.transferComplete=function(){
        var inLen=$("#ques").find(".inline");/*术前照片*/
        var inLength=$("#ques-second").find(".inline");/*术后照片*/
        var itemImage=[];
        /*术前照片*/
        for(var i=0,t=inLen.length;i<t;i++){
            var imgObject={};
            imgObject["imageMessage"]=$(inLen[i]).find("img").attr("src");
            imgObject["imageName"]=GetQueryString("orderNo");
            imgObject["imageFormat"]=$(inLen[i]).find("img").attr("type");
            imgObject["imageType"]=2;
            itemImage.push(imgObject);
        }
        /*术后照片*/
        for(var j=0,y=inLength.length;j<y;j++){
            var imgObjet={};
            imgObjet["imageMessage"]=$(inLength[j]).find("img").attr("src");
            imgObjet["imageName"]=GetQueryString("orderNo");
            imgObjet["imageFormat"]=$(inLength[j]).find("img").attr("type");
            imgObjet["imageType"]=3;
            itemImage.push(imgObjet);
        }
        $http.post($scope.app.host+'customerImageDowload',
            {
                token:tokenSession,
                orderNo:GetQueryString("orderNo"),
                itemImage:itemImage,
                appointId:GetQueryString("appointId")
            }).success(function(response) {
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $state.go('app.servicemanager.pmsg');
                    }
                }else{
                    alert(response.msg);
                }
        });
    }
    /**返回**/
    $scope.gmBack=function () {
        $state.go('app.servicemanager.pmsg');
    }
}]);
