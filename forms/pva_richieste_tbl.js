
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6E37DCB9-538E-4F7D-92F4-03A785C2EFD6"}
 */
function onActionAddRule(event) 
{
	addRule();
}

/**
 * @properties={typeid:24,uuid:"0B5A00F7-C748-4BD9-92BB-8D9F11F9A24D"}
 */
function addRule()
{
	var fs = foundset;
	if (fs)
		fs.tab_richiestedettaglio_to_tab_richiestedettagliocondizioni.newRecord();
}

/**
 * @param {JSFoundset<db:/ma_richieste/tab_richiestedettaglio>} fs
 * 
 * @properties={typeid:24,uuid:"BACD540A-D7D3-4A47-B99F-DF778EBD5709"}
 */
function dc_new_post(fs)
{
	_super.dc_new_post(fs);
	
	/**
	 * Automatically create a standard rule
	 */
	var ruleFs = fs.tab_richiestedettaglio_to_tab_richiestedettagliocondizioni;
	if (ruleFs)
	{
		var stdRule 				= ruleFs.getRecord(ruleFs.newRecord());
			stdRule.iniziovalidita 	= new Date();
			stdRule.codice 			= 'STD';
			stdRule.descrizione 	= 'Standard';
	}
}
