### jqxgrid 내에서 selectionmode checkbox 관련 기능.

 - 특정 row의 selection을 해제하고 싶을 때
```
 $('#jqxgrid').jqxGrid('unselectrow', row);
```
 - 모든 row의 selection을 해제하고 싶을 때
```
 $('#jqxgrid').jqxGrid('clearselection');
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
