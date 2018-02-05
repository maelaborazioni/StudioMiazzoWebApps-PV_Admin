
/**
 * Called before the form component is rendered.
 *
 * @param {JSRenderEvent} event the render event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"CDEC97C6-84EF-40EC-A866-9E3C9AB74D2A"}
 */
function onRender(event)
{
	var record	   = event.getRecord();
	var renderable = event.getRenderable();
	
	if(globals.nav.mode !== globals.Status.BROWSE && record && record['codice'] === globals.CodiceRegola.GENERALE)
		renderable.enabled = false;
}

/**
 * @properties={typeid:24,uuid:"49FB50BA-B280-452F-A00E-DB16262FFB20"}
 */
function getButtonObject()
{
	var btnObj 			  = _super.getButtonObject();
		btnObj.btn_edit   =
		btnObj.btn_delete = { enabled: codice !== globals.CodiceRegola.GENERALE };
	
	return btnObj;
}

/**
 * @properties={typeid:24,uuid:"27136EC8-1ECC-4B44-9C01-B1A6E4F03EEA"}
 */
function dc_save_validate(fs, program)
{
	try
	{
		var success = _super.dc_save_validate(fs, 'PVA_RR_DettaglioRegole') !== -1;
			success = success && globals.validateRule(fs.getSelectedRecord());
		
		if(success)
			return 0;
		else	
			return -1;
	}
	catch(ex)
	{
		application.output(ex.message, LOGGINGLEVEL.ERROR);
		globals.ma_utl_showErrorDialog(ex.message);
		
		return -1;
	}
}

/**
 * @properties={typeid:24,uuid:"C6452E21-F3EF-459A-B842-32610D74DC8E"}
 */
function dc_delete_pre(fs, multiDelete)
{
	var success = _super.dc_delete_pre(fs, multiDelete) !== -1;
		success = success && fs.codice !== globals.CodiceRegola.GENERALE;
		
	if(success)
		return 0;
	else
		return -1;
}