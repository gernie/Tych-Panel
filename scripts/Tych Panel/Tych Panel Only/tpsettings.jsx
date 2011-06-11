﻿//@include PSSettings.jsx

var settings = new Settings();
settings.setUID("TychPanelSettingsUniqueId");
settings.setMSG("TychPanelSettings");
settings.setType(SettingsType.SINGLE);
settings.loadSettings();

/**
 * Loads settings.
 */
function tpGetSettings()
{
	var tpSettings = {};

	if (settings.numEntries() > 0)
		tpSettings = settings.getEntryAt(0);

	for (setting in defaults)
		if (tpSettings[setting] == undefined)
			tpSettings[setting] = defaults[setting];

	return tpSettings;
}