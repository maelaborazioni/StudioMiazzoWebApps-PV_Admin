dataSource:"db:/ma_anagrafiche/lavoratori",
extendsID:"3C076162-6D45-4034-9F27-2ADA00E4841B",
items:[
{
anchors:11,
dataProviderID:"_to_tab_richiestedettagliocampi.descrizione_estesa",
formIndex:12,
labelFor:"fld_valore",
location:"280,25",
name:"lbl_valore",
size:"390,20",
styleClass:"big_font",
text:"Campo",
transparent:true,
typeid:7,
uuid:"0CD0E305-D350-40C4-9017-203C3305BF07"
},
{
anchors:13,
beanClassName:"com.servoy.extensions.beans.dbtreeview.DBTreeView",
beanXML:"<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<java version=\"1.7.0_25\" class=\"java.beans.XMLDecoder\">
 <object class=\"com.servoy.extensions.beans.dbtreeview.DBTreeView\">
  <void property=\"background\">
   <object class=\"java.awt.Color\">
    <int>255<\/int>
    <int>255<\/int>
    <int>255<\/int>
    <int>255<\/int>
   <\/object>
  <\/void>
  <void property=\"borderType\">
   <object class=\"com.servoy.j2db.util.gui.SpecialMatteBorder\">
    <float>0.0<\/float>
    <float>0.0<\/float>
    <float>0.0<\/float>
    <float>1.0<\/float>
    <object class=\"java.awt.Color\" id=\"Color0\">
     <int>0<\/int>
     <int>0<\/int>
     <int>0<\/int>
     <int>255<\/int>
    <\/object>
    <object idref=\"Color0\"/>
    <object idref=\"Color0\"/>
    <object class=\"java.awt.Color\">
     <int>67<\/int>
     <int>67<\/int>
     <int>67<\/int>
     <int>255<\/int>
    <\/object>
   <\/object>
  <\/void>
  <void property=\"transparent\">
   <boolean>false<\/boolean>
  <\/void>
 <\/object>
<\/java>
",
formIndex:11,
location:"0,20",
name:"requests_tree",
size:"270,310",
typeid:12,
uuid:"0F78BB77-32A7-479C-93B2-E65AC5549CF4"
},
{
height:480,
partType:5,
typeid:19,
uuid:"6CD89642-3D90-4EA1-A9B8-3D391439F839"
},
{
extendsID:"AAAC08F8-0270-4E48-995F-E7066E036521",
height:330,
typeid:19,
uuid:"70C4217C-7C49-49C7-A669-AC9DA7064707"
},
{
formIndex:9,
groupID:null,
location:"0,0",
size:"150,20",
styleClass:"title_text",
tabSeq:0,
text:"Campi",
transparent:true,
typeid:7,
uuid:"8B854B04-03C9-4DD9-95DA-2ABA1B60D9F3"
},
{
anchors:11,
dataProviderID:"lavoratori_to_tab_richiestedettagliocampi_valoriadipendente$idcampo.valore",
editable:true,
format:"#0.00###",
groupID:null,
horizontalAlignment:4,
location:"280,50",
name:"fld_valore",
onDataChangeMethodID:"75284115-3314-4EE7-BF35-4596B6D05936",
size:"390,40",
styleClass:"big_font",
tabSeq:0,
typeid:4,
uuid:"B7609E1C-1856-4674-BC30-6274CF502291"
},
{
anchors:11,
borderType:"SpecialMatteBorder,0.0,0.0,1.0,0.0,#000000,#000000,#000000,#000000,0.0,",
formIndex:7,
groupID:null,
location:"0,0",
mediaOptions:6,
size:"680,20",
styleClass:"title_bar",
tabSeq:0,
typeid:7,
uuid:"EA3BFCBD-1BFE-44EE-8380-5C04038996EB"
}
],
name:"pva_valoriadipendente_detail",
size:"680,480",
styleName:"leaf_style",
typeid:3,
uuid:"5C8FFC3C-276B-4134-9E4B-5EDCE7C2A8FD"