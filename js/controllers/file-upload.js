// 确认转账查询-图片上传
app.controller('FileUploadCtrl', ['$scope','$http','$q','$state','$timeout','$filter','FileUploader',function($scope, $http,$q, $state,$timeout,$filter,FileUploader) {
    // CALLBACKS
    var tokenSession=sessionStorage.getItem("session");
    if(isEmpty(tokenSession)){
        $state.go('access.signin');
        return false;
    }
    /**-确认转账查询-start**/
    $http.post($scope.app.host+'confirmTransferQuery',
        {
            token:tokenSession,
            orderNo:GetQueryString("orderNo")
        }).success(function(response) {
            if(response.status=="200"){
                if(response.queryStatus=="1"){
                    $scope.transfer=response.data;//店铺转账展示数据
                }
            }
    });
    /**-确认转账查询-end**/
    var uploader = $scope.uploader = new FileUploader({});
    uploader.filters.push({
        name: 'customFilter',
        fn: function(item, options) {
        return this.queue.length < 10;
        }
    });
    uploader.onAfterAddingFile = function(fileItems) {
        $scope.fileItem = fileItems;
        var str="";
        var reader = new FileReader();
        reader.addEventListener("load", function (e) {
            //文件加载完之后，更新angular绑定
            $scope.$apply(function(){
                $scope.iconUrl = e.target.result;
                str += '<div style="width:150px;height:150px;float: left;margin-right: 10px;position: relative;" class="inline bg-white wrapper-sm b-a"><div class="bg-light" style="height:130px"><img type="'+fileItems._file.type+'" src="'+$scope.iconUrl+'" alt="" width="100%" height="100%" /></div></div>';
            });
            $("#ques").append(str);
            $("#result").find("li:gt(0)").hide();
        }, false);
        reader.readAsDataURL($scope.fileItem._file);
    };
    $scope.eliminate=function(item){
        item.splice(0,item.length);
    }
    $scope.transferComplete=function(){
        var inLen=$("#ques .inline");
        var itemImage=[];
        for(var i=0,t=inLen.length;i<t;i++){
            var imgObject={};
            imgObject["imageMessage"]=$(inLen[i]).find("img").attr("src");
            imgObject["imageName"]=GetQueryString("orderNo");
            imgObject["imageFormat"]=$(inLen[i]).find("img").attr("type");
            imgObject["imageType"]=1;
            itemImage.push(imgObject);
        }
        if(isEmpty($scope.receiptRemark)){
            alert("未填写备注");
            return false;
        }else{
            $http.post($scope.app.host+'storeImageDowload',
                {
                    token:tokenSession,
                    orderNo:GetQueryString("orderNo"),
                    itemImage:itemImage,
                    receiptRemark:$scope.receiptRemark
                }).success(function(response) {
                console.log(response);
                if(response.status=="200"){
                    if(response.submitStatus=="1"){
                        $state.go('app.business.translist');
                    }
                }else{
                    alert(response.msg);
                }
            });
        }
    }
    /**返回**/
    $scope.gmBack=function () {
        $state.go('app.business.translist');
    }
}]);
