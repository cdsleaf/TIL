## custom cellsrender cell에서 클릭 이벤트로 데이터 꺼내오고 다시 셋팅하는 방법

아래와 셀 렌더링이 a 태그로 되어 있는 경우,
a 태그에 클릭 이벤트를 바인딩하고 해당 이벤트 발생 시, row 데이터를 가져오려면
a 태그 클릭 이벤트에 바인딩할 함수에 row 값을 넘겨준다.

아래 셀 렌더링은 그리드가 수정모드일때와 아닐때를 구분해서 셀 렌더링을 한다.
콘솔에서 $('#jqxgrid').jqxGrid('editable',true); 이렇게 그리드 전체의 수정모드를 키고 끌때 마다
각 셀의 cellsrender에 매핑된 함수가 호출되어 각 셀 렌더링을 다시 할 수가 있다.

```
{ text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120,
                            cellsrenderer: function (row, columnfield, value, defaulthtml, columnproperties) {

                                if($('#jqxgrid').jqxGrid('editable') === true ){
                                    return value + '<a href="#" onclick="javascript:clickAtag('+row+');return false;" >click!!</a>';

                                }else{
                                    return value
                                }

                            }
                        },
                        

function clickAtag(row){
        console.log("rowdata:",$('#jqxgrid').jqxGrid('getrowdata', row));
    }

```

가져온 데이터를 다시 그리드에 셋 하고 싶으면 아래의 코드를 호출한다 이때 row 를 당연히 알고 있어야 한다.
```
// @param row index.
// @param column datafield.
// @param cell value
 $("#jqxGrid").jqxGrid('setcellvalue', 0, "firstname", "New Value");
 ```
