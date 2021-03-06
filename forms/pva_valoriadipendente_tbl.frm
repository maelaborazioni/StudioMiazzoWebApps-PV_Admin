dataSource:"db:/ma_richieste/tab_richiestedettagliocampi",
extendsID:"-1",
items:[
{
labelFor:"fld_valore",
location:"270,0",
name:"lbl_valore",
size:"100,20",
styleClass:"table_header",
text:"Valore",
transparent:false,
typeid:7,
uuid:"13CBD424-7B3D-49AA-BE0C-88930ABF589E"
},
{
height:40,
partType:5,
typeid:19,
uuid:"23AA6C46-5909-4471-AC4E-D11265F0DA8F"
},
{
dataProviderID:"tab_richiestedettagliocampi_to_tab_richiestedettagliocampi_valoriadipendente.valore",
editable:true,
location:"270,20",
name:"fld_valore",
size:"100,20",
styleClass:"table",
typeid:4,
uuid:"266D2F5B-DE83-42B1-914E-4DA8B7498E0D"
},
{
groupID:null,
labelFor:"fld_descrizione",
location:"0,0",
name:"lbl_descrizione",
size:"270,20",
styleClass:"table_header",
tabSeq:0,
text:"Campo",
transparent:false,
typeid:7,
uuid:"3806A593-5941-4FA4-BC80-6FFAFEDA7721"
},
{
dataProviderID:"descrizione",
editable:true,
groupID:null,
location:"0,20",
name:"fld_descrizione",
size:"270,20",
styleClass:"table",
tabSeq:0,
typeid:4,
uuid:"57916092-3108-4D9A-9744-A09820F0DF16"
}
],
name:"pva_valoriadipendente_tbl",
showInMenu:true,
size:"370,40",
styleName:"leaf_style",
typeid:3,
uuid:"2593A1AD-EA4C-4863-8875-C59A60A689B7",
view:3