/**
 * @properties={typeid:24,uuid:"830DF532-87FC-49DE-9E51-79A100EA4470"}
 * @AllowToRunInFind
 */
function gotoBrowse()
{
	_super.gotoBrowse();
	if(!globals.ma_utl_isFoundSetNullOrEmpty(foundset))
		foundset.sort(sortFunction);
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"6F0D87CF-54D6-4444-92FC-F766800C128F"}
 */
function filterData()
{
	/** @type {JSFoundset<db:/ma_richieste/tab_richieste>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_RICHIESTE, globals.Table.CATEGORIE_RICHIESTE);
	if (fs && fs.find())
	{
		fs.codice = globals.CategoriaRichiesta.MONETARIA;
		fs.search();
	}
	
	// Recupera le richieste disponibili per la ditta corrente
	var idditta  = globals.vCurrentEmployerID;
	var requests = globals.getAvailableRequests(idditta);
	
	if(requests && foundset && foundset.find())
	{
		foundset.idtabrichiestadettaglio = requests;
		foundset.search();
	}
	else
		foundset.clear();
}

/**
 * @properties={typeid:24,uuid:"DABA2251-F491-46B0-AB2C-54B9A5CB15C1"}
 */
function sortFunction(first, second)
{
	// Order by 'ordine' (null values come last), then by 'descrizione'
	var    order  = globals.nullLastComparator(first, second, 'tab_richiestedettaglio_to_ditte_gestionerichieste.ordine');
	return order || (first.descrizione < second.descrizione ? -1 : 1);
}

/**
 * @properties={typeid:24,uuid:"6CCCA031-5171-455C-A887-21241B0DDE16"}
 */
function dc_save_validate(fs, program, multiple)
{
	return _super.dc_save_validate
	(
			  fs
			, program
			, true
			, globals.validateRequestOrder
	);
}