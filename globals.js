/**
 * @param {JSRecord<db:/ma_richieste/tab_richiestedettaglio>} record
 *
 * @properties={typeid:24,uuid:"FBA66E87-616F-4C58-8B71-75322730752E"}
 * @AllowToRunInFind
 */
function validateRequestOrder(record)
{
	// Skip the check if no order is specified (null can have duplicates)
	if
	(
		!record 												  || 
		!record.tab_richiestedettaglio_to_ditte_gestionerichieste || 
		!record.tab_richiestedettaglio_to_ditte_gestionerichieste.ordine
	)
		return true;
	
	var fs 	  = record.foundset;
	for(var r = 1; r <= fs.getSize(); r++)
	{
		var currRecord = fs.getRecord(r).tab_richiestedettaglio_to_ditte_gestionerichieste;
		if 
		(
			currRecord 																	&&
			currRecord.idtabrichiestadettaglio !== record.idtabrichiestadettaglio 	    && 
			currRecord.ordine															&& 
			currRecord.ordine === record.tab_richiestedettaglio_to_ditte_gestionerichieste.ordine
		)
			throw new Error('Ordinamento duplicato, controllare i dati inseriti');
	}
	
	return true;
	
//	var fs = record.foundset.duplicateFoundSet();
//	if (fs && fs.find())
//	{
//		fs.idtabrichiestadettaglio 									 = globals.ComparisonOperator.NE + record.idtabrichiestadettaglio;
//		fs.tab_richiestedettaglio_to_ditte_gestionerichieste.idditta = globals.vCurrentEmployerID;
//		fs.tab_richiestedettaglio_to_ditte_gestionerichieste.ordine  = record.tab_richiestedettaglio_to_ditte_gestionerichieste.ordine;
//		
//		if(fs.search() > 0)
//			throw new Error('Ordinamento duplicato, controllare i dati inseriti');
//		
//		return true;
//	}
//	
//	return false;
}

/**
 * @properties={typeid:24,uuid:"EC464BC8-8A8F-489B-9AF0-4BCD485A738A"}
 */
function openGestioneCommesse()
{
	var idditta = globals._filtroSuDitta;
	if(!idditta) 
	{
		idditta = globals.ma_utl_showLkpWindow
		(
			{
				lookup						: 'AG_Lkp_Ditta',
				methodToAddFoundsetFilter	: 'filtraDittaStandard',
				allowInBrowse				: true
			}
		);
	}
	
	if(idditta)
	{
		var form = globals.openProgram('PV_Commesse');
		lookup(idditta, form);
	}
}