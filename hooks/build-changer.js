const utils = require("./ar-config");

module.exports = function (context) {
    const confs = utils.getConfigs();
    //const appId = utils.getAppIdentifier(context.opts.projectRoot + confs.configPathAndroid);
    
    utils.logAppFolders(context.opts.projectRoot);
    
    utils.logAppFolders(context.opts.projectRoot + confs.androidAppPath);
    utils.logAppFolders(context.opts.projectRoot + confs.androidMainPath);
    utils.logAppFolders(context.opts.projectRoot + confs.androidPath);
    utils.changeConfigXML();
    utils.generateUnityLibrary();
    utils.changeSettingsGradle();
    utils.changeProjectProperties();
    utils.changeGradleProperties();
    utils.changeAndroidBuildGradle();
    utils.changeAppBuildGradle();

    utils.logAppFolders(context.opts.projectRoot + confs.androidRootPath);
    utils.logFile(context.opts.projectRoot + confs.androidRootPath + "/settings.gradle");
    
    //Removal of unused resources
    //utils.removeUnusedFolders(context.opts.projectRoot, context.opts.projectRoot + confs.androidPath, appId, true);

    //utils.moveGSFiles(context.opts.projectRoot + confs.androidPath + appId + confs.firebaseSuffix +'/google-services.json', context.opts.projectRoot + confs.androidAppPath + 'google-services.json')
}
