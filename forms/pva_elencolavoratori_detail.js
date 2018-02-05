/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"2B9D147F-9800-4EDE-AB23-40F3D5BD9454",variableType:-4}
 */
var isFiltered = false;

/**
 * @properties={typeid:24,uuid:"4055E5BF-56D5-4287-BD64-5142896CB175"}
 */
function filter(event)
{
//	globals.ma_utl_enterFindMode(elements.lavoratori_tab.getTabFormNameAt(1));
//	elements.btn_filter.text = 'Cerca';
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"D3B8DFEF-4784-4BAD-8DB8-C0C35C66A03B"}
 */
function search(event)
{
	if(!foundset.isInFind())
		return;
	
	if(controller.search() === 0)
	{
		setStatusWarning('i18n:ma.msg.norecord');
		filter(event);
	}
//	else
//	{
//		elements.btn_filter.text = 'Rimuovi';
//	}
	
	controller.readOnly = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"095A090F-A4EA-4134-A824-A4EB7F5601F7"}
 * @AllowToRunInFind
 */
function unfilter(event) 
{
	if(foundset.isInFind())
		controller.search();
	
	foundset.loadAllRecords();
	
//	elements.btn_filter.text = 'Filtra';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"663C2CE4-F319-4EA9-BE18-785BD1ED0F9C"}
 */
function onActionFilter(event)
{
	if(!foundset.isInFind())
	{
		if(isFiltered)
			unfilter(event);
		else
			filter(event);
	}
	else
		search(event);
}