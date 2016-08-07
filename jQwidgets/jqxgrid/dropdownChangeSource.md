## jqxgrid

###  jqxgrid에서 A dropdownList의 value change event 발생 시, B dropdownList 의 source 변경 가능 샘플

우선 두개 이상의 dataAdapter를 생성한다.
```
var countries = [
        { value: "AF", label: "Afghanistan" },
        { value: "AL", label: "Albania" },
        { value: "DZ", label: "Algeria" },
        { value: "AR", label: "Argentina" }
    ];

    var countriesSource =
    {
        datatype: "array",
        datafields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' }
        ],
        localdata: countries
    };

    var changedCountries = [
        { value: "AF", label: "1Afghanistan" },
        { value: "AL", label: "1Albania" },
        { value: "DZ", label: "1Algeria" },
        { value: "AR", label: "1Argentina" }
    ];

    var changedCountriesSource =
    {
        datatype: "array",
        datafields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' }
        ],
        localdata: changedCountries
    };

    var countriesAdapter = new $.jqx.dataAdapter(countriesSource, {
        autoBind: true
    });

    var countriesAdapterB = new $.jqx.dataAdapter(changedCountriesSource, {
        autoBind: true
    });

```
jqxgrid의 컬럼 정의하는 부분에서 B dropdownList의 initeditor 에 A dropdownList 값이 변경 시, source 에 매핑될
dataAdapter를 조건에 따라설정한다.

이렇게 하면 A 드롭박스의 값을 변경 후에 B 드롭박스를 수정하기 위해 선택했을 때 initeditor에서 A 드롭박스의 값을 체크하여
B 드롭박스의 매핑 dataAdapter를 조건에 따라 설정할 수 있다.
```
{ text: 'testList', columntype: 'dropdownlist', datafield: 'testList', width: 195 , initeditor: function (row, value, editor) {
                                console.log("check,row",row);
                                console.log('row data', $('#jqxgrid').jqxGrid('getrowdata', row));
                                var listSource;
                                var rowData = $('#jqxgrid').jqxGrid('getrowdata', row);

                                if(rowData.productname === "Black Tea"){
                                    listSource = countriesAdapter;
                                }else{
                                    listSource = countriesAdapterB;
                                }


                                editor.jqxDropDownList({ source: listSource, displayMember: 'label', valueMember: 'value' });
                                });
                            }
                        }
```

