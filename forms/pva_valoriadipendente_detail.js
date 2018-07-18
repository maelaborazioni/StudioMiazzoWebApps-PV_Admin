/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1E9B5518-35EC-4B43-AFDC-6B5BD16DF33B",variableType:4}
 */
var idCampoCorrente;

/**
 * @type {Object<Array>}
 *
 * @properties={typeid:35,uuid:"5855F32C-A919-44AD-94B4-D157BDB538D9",variableType:-4}
 */
var campiAmmessi = { };

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"5B49EF9C-AC68-4746-A7D3-AAD35CF5DB63",variableType:-4}
 */
var selectionPath = [];

/**
 * @properties={typeid:24,uuid:"CD6260EE-3EB8-4AB9-B6BB-E5AE2A67884B"}
 */
function onRecordSelection(event, form)
{
	_super.onRecordSelection(event, form);
	updateValue(idCampoCorrente);
}

/**
 * @properties={typeid:24,uuid:"2829821A-7DAD-4EB6-B84A-A5B87151F7A6"}
 * @AllowToRunInFind
 */
function refreshTree(company_ID)
{	
	/** @type {JSFoundSet<db:/ma_richieste/tab_richieste>} */
	var categorieFs = databaseManager.getFoundSet(globals.Server.MA_RICHIESTE, globals.Table.CATEGORIE_RICHIESTE);
	if (categorieFs && categorieFs.find())
	{
		categorieFs.codice = globals.CategoriaRichiesta.MONETARIA;
		categorieFs.search();
	}
	else
		throw new Error(i18n.getI18NMessage('ma.err.findmode'));
	
	/** @type {JSFoundSet<db:/ma_richieste/tab_richiestedettaglio>} */
	var richiesteFs = databaseManager.getFoundSet(globals.Server.MA_RICHIESTE, globals.Table.DETTAGLIO_RICHIESTE);
	if (richiesteFs && richiesteFs.find())
	{
		richiesteFs.idtabrichiestadettaglio = globals.getAvailableRequests(company_ID);
		richiesteFs.idtabrichiesta = categorieFs.idtabrichiesta;
		
		richiesteFs.search();
	}
	else
		throw new Error(i18n.getI18NMessage('ma.err.findmode'));
	
	var sqlQuery 		 = "SELECT DISTINCT idRichiesta, idTabRichiestaDettaglioCampo, Campo FROM [dbo].[F_Ditta_CampiRichiesta](?,'', 1) WHERE Disponibile = 1";	
	var dataset			 = databaseManager.getDataSetByQuery(globals.Server.MA_RICHIESTE, sqlQuery, [company_ID], -1);
	var fieldsDataSource = databaseManager.createDataSourceByQuery('pv_valoriadipendente_availablefields', globals.Server.MA_RICHIESTE, sqlQuery, [company_ID], -1);
	
	// Keep track of what fields are available to update the detail label on the record selection
	campiAmmessi[company_ID] = dataset.getColumnAsArray(2);
	
	var relName = 'tab_richiestedettaglio_to_tab_richiestedettagliocampi_availablefields';
	var rel     = solutionModel.getRelation(relName);
	if(!rel)
	{
		rel = solutionModel.newRelation(relName, globals.ma_utl_getDataSource(globals.Server.MA_RICHIESTE, globals.Table.DETTAGLIO_RICHIESTE), fieldsDataSource, JSRelation.LEFT_OUTER_JOIN);
		rel.newRelationItem('idtabrichiestadettaglio', globals.ComparisonOperator.EQ, 'idrichiesta');
	}
	
	databaseManager.refreshRecordFromDatabase(richiesteFs[relName], -1);
	
	var binding = elements.requests_tree.createBinding(richiesteFs.getDataSource());
		binding.setTextDataprovider('descrizione');
		binding.setNRelationName(relName);
	
		binding = elements.requests_tree.createBinding(fieldsDataSource);
		binding.setTextDataprovider('campo');
		
		binding.setMethodToCallOnClick(onFieldClick, 'idtabrichiestadettagliocampo');
		
	elements.requests_tree.removeAllRoots();
	elements.requests_tree.addRoots(richiesteFs);
}

/**
 * @properties={typeid:24,uuid:"2FCE052D-5A5D-40EA-9560-96E706B64C7D"}
 */
function onFieldClick(idcampo)
{
	selectionPath = elements.requests_tree.selectionPath;
	updateValue(idcampo);
}

/**
 * @properties={typeid:24,uuid:"CC1B1463-C577-4A1F-AEC3-9D9CEE973B34"}
 * @AllowToRunInFind
 */
function updateValue(idcampo)
{
	if(!campiAmmessi[idditta_sede] || campiAmmessi[idditta_sede].indexOf(idcampo) < 0)
	{
		elements.requests_tree.selectionPath = [];
		globals.ma_pv_to_tab_richiestedettagliocampi_valoriadipendente$idcampo = null;
	}
	else
	{
		idCampoCorrente = idcampo;
		globals.ma_pv_to_tab_richiestedettagliocampi_valoriadipendente$idcampo = idcampo;
	}	
}

/**
 * @properties={typeid:24,uuid:"53054363-1FD6-4A38-B735-86FDD10FBE28"}
 */
function deleteValue()
{
	/** @type {JSFoundSet<db:/ma_richieste/tab_richiestedettagliocampi_valoriadipendente>} */
	var fs = lavoratori_to_tab_richiestedettagliocampi_valoriadipendente$idcampo;
	globals.deleteRecord(fs);
}

/**
 * @properties={typeid:24,uuid:"14E85C1D-5234-4FF6-B5BD-3C05383D9EA0"}
 */
function gotoEdit()
{
	_super.gotoEdit();
	
// TODO gotoEdit : verificare se da eliminare 	
//	var fs = lavoratori_to_tab_richiestedettagliocampi_valoriadipendente$idcampo
//	if (fs.getSize() === 0)
//		var record = fs.getRecord(fs.newRecord());
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"75284115-3314-4EE7-BF35-4596B6D05936"}
 */
function validateValue(oldValue, newValue, event) 
{
	var isPositive = !globals.ma_utl_isNullOrUndefined(newValue) && newValue > 0;
	if (!isPositive)
		setStatusWarning(i18n.getI18NMessage('ma.msg.enter_positive_value'));
	else
		resetStatus();
	
	return isPositive;
}
