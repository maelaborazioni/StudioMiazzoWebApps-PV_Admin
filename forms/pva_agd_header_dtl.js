/**
 * @properties={typeid:24,uuid:"38B16350-66B9-4ECA-8C28-FB47DC201C85"}
 */
function onRecordSelection(event, form)
{
	_super.onRecordSelection(event, form);
	forms.pva_gestionerichieste_tbl.filterData();
}