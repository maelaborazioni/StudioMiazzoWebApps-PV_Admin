/**
 * @properties={typeid:24,uuid:"86AF2521-7049-40CA-BCCF-3E6D8218A50E"}
 */
function getButtonObject()
{
	var btnObj 		   = _super.getButtonObject();
		btnObj.btn_new = 
		{
			enabled: forms.pva_regole_tbl.codice !== globals.CodiceRegola.GENERALE 
		};
	
	return btnObj;
}
