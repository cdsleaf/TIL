### jqxgrid 내에서 selectionmode checkbox 관련 기능.

 - 특정 row의 selection을 해제하고 싶을 때
```
 $('#jqxgrid').jqxGrid('unselectrow', row);
```
 - 모든 row의 selection을 해제하고 싶을 때
```
 $('#jqxgrid').jqxGrid('clearselection');
```

 - 그리드 헤더 및 바디의 체크박스를 체크/체크해제 시 구분하여 처리하는 이벤트 함수 
```
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

            });

            $("#jqxgrid").bind('rowunselect', function (event) {
                var unselectedRowIndex = event.args.rowindex;

                console.log("unselectedRowIndex",unselectedRowIndex );
            });
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
