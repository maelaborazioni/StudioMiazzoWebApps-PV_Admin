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
 * @properties={typeid:24,uuid:"E1D4D5BF-9F75-47BD-B6CD-C4E9AD61FCA9"}
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
