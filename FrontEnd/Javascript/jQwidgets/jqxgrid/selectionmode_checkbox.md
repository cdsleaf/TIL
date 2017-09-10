### jqxgrid 내에서 selectionmode checkbox 관련 기능.

 - 특정 row의 selection을 해제하고 싶을 때
```
 $('#jqxgrid').jqxGrid('unselectrow', row);
```
 - 모든 row의 selection을 해제하고 싶을 때
```
 $('#jqxgrid').jqxGrid('clearselection');
```
 - 현재 선택되어 있는 row의 총 수
```
$("#jqxgrid").jqxGrid('getselectedrowindexes').length;

$("#jqxgrid").jqxGrid('getselectedrowindexes'); //이럴 경우 선택된 rows 가 array 형태로 return -> [1,2]
```

 - 그리드 헤더 및 바디의 체크박스를 체크/체크해제 시 구분하여 처리하는 이벤트 함수 
```
//헤더를 체크/체크해제 했을 때 와 바디를 체크/해제 했을 때 이벤트는 독립적으로 호출된다. 
//즉, 뭔가 처리하고 싶다면 양쪽에 모두 해당 후처리 함수를 추가 해야한다..
$('#jqxgrid').on('rowselect', function (event) {
                var args = event.args;
                var row = args.rowindex;


                //헤더의 체크박스를 체크 시 전체 row가 array로 넘어옴
                //헤더의 체크박스를 해제 시 [] 비어 있는 array가 넘어옴.
                if($.isArray(row)){
                    if(row.length !== 0){
                        console.log("header rowselect array",row );
                    }else{
                        console.log("header rowunselect array",row );
                    }

                }else{
                    console.log("rowselect",row );
                }
                
                //수정모드가 아닐때 체크박스 disable은 지금까지 찾은 방법은 아래가 다 인듯; ㅠ
                if($('#jqxgrid').jqxGrid('editable') === false ){
                    $('#jqxgrid').jqxGrid('unselectrow', row);

                }
                

            });

            $("#jqxgrid").bind('rowunselect', function (event) {
                var unselectedRowIndex = event.args.rowindex;

                console.log("unselectedRowIndex",unselectedRowIndex );
            });
 ```
 
 - 헤더의 체크박스를 안보이게 할 수도 있다.
```
$("#jqxgrid").jqxGrid({
    width: 750,
    source: dataAdapter,
    columnsresize: true,
    ready: function()
    {
        $("#jqxgrid").find('.jqx-grid-column-header:first').children().hide();
    },
```

 - 아래와 같이 selectionmode 에 checkbox 를 설정하면 그리드 좌측에 체크박스가 생긴다.
```
 $("#jqxgrid").jqxGrid(
                {
                    width: 850,
                    source: dataAdapter,
                    editable: true,
                    enabletooltips: true,
                    selectionmode: 'checkbox',
```
