/**
 * @properties={typeid:24,uuid:"BF5EABA8-A638-44B6-9864-C74866896196"}
 */
function onLoad(event)
{
	_super.onLoad(event);
	
	elements.defaultvalues_tab.dividerLocation = 0.5;
	
	forms.pva_valoriadipendente_detail.registerListener(['warning'], function(warning){ setStatusWarning(warning.message); });
	forms.pva_valoriadipendente_detail.registerListener(['reset'],   function(warning){ resetStatus(); });
}

/**
 * @properties={typeid:24,uuid:"AA6A0EFB-1E18-43D3-A71F-A6330B829A9C"}
 */
function onRecordSelection(event, form)
{
	_super.onRecordSelection(event, form);
	refreshTree();
}

/**
 * @properties={typeid:24,uuid:"F0FA575B-30FC-4655-9A1A-F79F3272515C"}
 */
function refreshTree()
{
	/** @type {RuntimeForm<pva_valoriadipendente_detail>}*/
	var frm = elements.defaultvalues_tab.getRightForm();
	frm.refreshTree(idditta_sede);
}

/**
 * @properties={typeid:24,uuid:"389DE69D-BCEC-4D5C-A1B7-3A28E23F0CB2"}
 */
function dc_delete(event, triggerForm, forceForm, noConfirm)
{
	/** @type {RuntimeForm<pva_valoriadipendente_detail>}*/
	var frm = elements.defaultvalues_tab.getRightForm();
	frm.deleteValue();
}