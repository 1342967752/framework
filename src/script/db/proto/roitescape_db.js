/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.roitescape = (function() {

    /**
     * Namespace roitescape.
     * @exports roitescape
     * @namespace
     */
    var roitescape = {};

    /**
     * BaseConfigIDs enum.
     * @name roitescape.BaseConfigIDs
     * @enum {string}
     * @property {number} BC_NET_ADDR=1 BC_NET_ADDR value
     * @property {number} BC_SHOT_NAME=2 BC_SHOT_NAME value
     * @property {number} BC_HTTP_ADDR_OF_SERVER=3 BC_HTTP_ADDR_OF_SERVER value
     * @property {number} BC_HTTP_ADDR_OF_PATCH_PACKAGE=4 BC_HTTP_ADDR_OF_PATCH_PACKAGE value
     * @property {number} BC_HTTP_ADDR_OF_ASSET_VERSION=5 BC_HTTP_ADDR_OF_ASSET_VERSION value
     * @property {number} BC_HTTP_ADDR_OF_ASSET_ROOT=6 BC_HTTP_ADDR_OF_ASSET_ROOT value
     * @property {number} BC_APP_VERSION=7 BC_APP_VERSION value
     * @property {number} BC_PATCH_VERSION=8 BC_PATCH_VERSION value
     * @property {number} BC_MINI_PROGRAM_ID=9 BC_MINI_PROGRAM_ID value
     * @property {number} BC_MINI_PROGRAM_APP_ID=10 BC_MINI_PROGRAM_APP_ID value
     * @property {number} BC_MINI_PROGRAM_APP_SECRET=11 BC_MINI_PROGRAM_APP_SECRET value
     * @property {number} BC_QQ_MINI_PROGRAM_APP_ID=12 BC_QQ_MINI_PROGRAM_APP_ID value
     * @property {number} BC_QQ_MINI_PROGRAM_APP_SECRET=13 BC_QQ_MINI_PROGRAM_APP_SECRET value
     * @property {number} BC_OPPO_MINI_PROGRAM_APP_ID=14 BC_OPPO_MINI_PROGRAM_APP_ID value
     * @property {number} BC_OPPO_MINI_PROGRAM_APP_SECRET=15 BC_OPPO_MINI_PROGRAM_APP_SECRET value
     * @property {number} BC_VIVO_MINI_PROGRAM_APP_ID=16 BC_VIVO_MINI_PROGRAM_APP_ID value
     * @property {number} BC_VIVO_MINI_PROGRAM_APP_SECRET=17 BC_VIVO_MINI_PROGRAM_APP_SECRET value
     * @property {number} BC_TT_MINI_PROGRAM_APP_ID=18 BC_TT_MINI_PROGRAM_APP_ID value
     * @property {number} BC_TT_MINI_PROGRAM_APP_SECRET=19 BC_TT_MINI_PROGRAM_APP_SECRET value
     * @property {number} BC_QTT_MINI_PROGRAM_APP_ID=20 BC_QTT_MINI_PROGRAM_APP_ID value
     * @property {number} BC_QTT_MINI_PROGRAM_APP_SECRET=21 BC_QTT_MINI_PROGRAM_APP_SECRET value
     * @property {number} BC_QTT_MINI_PROGRAM_APP_NAME=22 BC_QTT_MINI_PROGRAM_APP_NAME value
     * @property {number} BC_MZ_MINI_PROGRAM_APP_ID=23 BC_MZ_MINI_PROGRAM_APP_ID value
     * @property {number} BC_HW_MINI_PROGRAM_APP_ID=24 BC_HW_MINI_PROGRAM_APP_ID value
     * @property {number} BC_NATIVE_MINI_PROGRAM_APP_ID=25 BC_NATIVE_MINI_PROGRAM_APP_ID value
     * @property {number} BC_NATIVE_MINI_PROGRAM_UNIVERSAL_LINKS=26 BC_NATIVE_MINI_PROGRAM_UNIVERSAL_LINKS value
     * @property {number} BC_MAX_ADV_TIMES_OF_ONE_DAY=27 BC_MAX_ADV_TIMES_OF_ONE_DAY value
     * @property {number} BC_BORN_COIN_NUM=101 BC_BORN_COIN_NUM value
     * @property {number} BC_MAX_POWER_NUM=102 BC_MAX_POWER_NUM value
     * @property {number} BC_BORN_POWER_NUM=103 BC_BORN_POWER_NUM value
     * @property {number} BC_NEED_TIME_TO_RESTORE_POWER=104 BC_NEED_TIME_TO_RESTORE_POWER value
     * @property {number} BC_OPENCAPTER_USE_POWER=105 BC_OPENCAPTER_USE_POWER value
     * @property {number} BC_SEE_AD_ADD_POWER=106 BC_SEE_AD_ADD_POWER value
     * @property {number} BC_WANTED_POWER_NUM=107 BC_WANTED_POWER_NUM value
     * @property {number} BC_SHOW_AD_GET_GOLD=108 BC_SHOW_AD_GET_GOLD value
     * @property {number} BC_CONTINUE_OVER_LEVEL_GET_GOLD=109 BC_CONTINUE_OVER_LEVEL_GET_GOLD value
     */
    roitescape.BaseConfigIDs = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "BC_NET_ADDR"] = 1;
        values[valuesById[2] = "BC_SHOT_NAME"] = 2;
        values[valuesById[3] = "BC_HTTP_ADDR_OF_SERVER"] = 3;
        values[valuesById[4] = "BC_HTTP_ADDR_OF_PATCH_PACKAGE"] = 4;
        values[valuesById[5] = "BC_HTTP_ADDR_OF_ASSET_VERSION"] = 5;
        values[valuesById[6] = "BC_HTTP_ADDR_OF_ASSET_ROOT"] = 6;
        values[valuesById[7] = "BC_APP_VERSION"] = 7;
        values[valuesById[8] = "BC_PATCH_VERSION"] = 8;
        values[valuesById[9] = "BC_MINI_PROGRAM_ID"] = 9;
        values[valuesById[10] = "BC_MINI_PROGRAM_APP_ID"] = 10;
        values[valuesById[11] = "BC_MINI_PROGRAM_APP_SECRET"] = 11;
        values[valuesById[12] = "BC_QQ_MINI_PROGRAM_APP_ID"] = 12;
        values[valuesById[13] = "BC_QQ_MINI_PROGRAM_APP_SECRET"] = 13;
        values[valuesById[14] = "BC_OPPO_MINI_PROGRAM_APP_ID"] = 14;
        values[valuesById[15] = "BC_OPPO_MINI_PROGRAM_APP_SECRET"] = 15;
        values[valuesById[16] = "BC_VIVO_MINI_PROGRAM_APP_ID"] = 16;
        values[valuesById[17] = "BC_VIVO_MINI_PROGRAM_APP_SECRET"] = 17;
        values[valuesById[18] = "BC_TT_MINI_PROGRAM_APP_ID"] = 18;
        values[valuesById[19] = "BC_TT_MINI_PROGRAM_APP_SECRET"] = 19;
        values[valuesById[20] = "BC_QTT_MINI_PROGRAM_APP_ID"] = 20;
        values[valuesById[21] = "BC_QTT_MINI_PROGRAM_APP_SECRET"] = 21;
        values[valuesById[22] = "BC_QTT_MINI_PROGRAM_APP_NAME"] = 22;
        values[valuesById[23] = "BC_MZ_MINI_PROGRAM_APP_ID"] = 23;
        values[valuesById[24] = "BC_HW_MINI_PROGRAM_APP_ID"] = 24;
        values[valuesById[25] = "BC_NATIVE_MINI_PROGRAM_APP_ID"] = 25;
        values[valuesById[26] = "BC_NATIVE_MINI_PROGRAM_UNIVERSAL_LINKS"] = 26;
        values[valuesById[27] = "BC_MAX_ADV_TIMES_OF_ONE_DAY"] = 27;
        values[valuesById[101] = "BC_BORN_COIN_NUM"] = 101;
        values[valuesById[102] = "BC_MAX_POWER_NUM"] = 102;
        values[valuesById[103] = "BC_BORN_POWER_NUM"] = 103;
        values[valuesById[104] = "BC_NEED_TIME_TO_RESTORE_POWER"] = 104;
        values[valuesById[105] = "BC_OPENCAPTER_USE_POWER"] = 105;
        values[valuesById[106] = "BC_SEE_AD_ADD_POWER"] = 106;
        values[valuesById[107] = "BC_WANTED_POWER_NUM"] = 107;
        values[valuesById[108] = "BC_SHOW_AD_GET_GOLD"] = 108;
        values[valuesById[109] = "BC_CONTINUE_OVER_LEVEL_GET_GOLD"] = 109;
        return values;
    })();

    /**
     * UIWordIDs enum.
     * @name roitescape.UIWordIDs
     * @enum {string}
     * @property {number} UIWORD_ID_APP_NAME=1 UIWORD_ID_APP_NAME value
     * @property {number} UIWORD_ID_SYSTEM_ERROR_TITLE=2 UIWORD_ID_SYSTEM_ERROR_TITLE value
     * @property {number} UIWORD_ID_SYSTEM_ERROR_CONTENT=3 UIWORD_ID_SYSTEM_ERROR_CONTENT value
     * @property {number} UIWORD_ID_SYSTEM_ERROR_RELOAD_GAME=4 UIWORD_ID_SYSTEM_ERROR_RELOAD_GAME value
     * @property {number} UIWORD_ID_SYSTEM_ERROR_EXIT_GAME=5 UIWORD_ID_SYSTEM_ERROR_EXIT_GAME value
     * @property {number} UIWORD_ID_QQ_PLATFORM_NAME=6 UIWORD_ID_QQ_PLATFORM_NAME value
     * @property {number} UIWORD_ID_WX_PLATFORM_NAME=7 UIWORD_ID_WX_PLATFORM_NAME value
     * @property {number} UIWORD_ID_SDK_NOT_SUPPORT_FORMAT=8 UIWORD_ID_SDK_NOT_SUPPORT_FORMAT value
     * @property {number} UIWORD_ID_NOT_FINISHED_YET=9 UIWORD_ID_NOT_FINISHED_YET value
     * @property {number} UIWORD_ID_PLAYER_BLOCKED_TITLE=10 UIWORD_ID_PLAYER_BLOCKED_TITLE value
     * @property {number} UIWORD_ID_PLAYER_BLOCKED_CONTENT=11 UIWORD_ID_PLAYER_BLOCKED_CONTENT value
     * @property {number} UIWORD_ID_VIDEO_NOT_SUPPORT=12 UIWORD_ID_VIDEO_NOT_SUPPORT value
     * @property {number} UIWORD_ID_SHARE_SUCCESS=13 UIWORD_ID_SHARE_SUCCESS value
     * @property {number} UIWORD_ID_ADV_SUCCESS=14 UIWORD_ID_ADV_SUCCESS value
     * @property {number} UIWORD_ID_ADV_FAIL=15 UIWORD_ID_ADV_FAIL value
     * @property {number} UIWORD_ID_ADV_NOT_FINISH_CONTENT=16 UIWORD_ID_ADV_NOT_FINISH_CONTENT value
     * @property {number} UIWORD_ID_ADV_NOT_FINISH_CANCEL_TEXT=17 UIWORD_ID_ADV_NOT_FINISH_CANCEL_TEXT value
     * @property {number} UIWORD_ID_ADV_NOT_FINISH_CONFIRM_TEXT=18 UIWORD_ID_ADV_NOT_FINISH_CONFIRM_TEXT value
     * @property {number} UIWORD_ID_SUBSCRIBE_FAIL_CONTENT=19 UIWORD_ID_SUBSCRIBE_FAIL_CONTENT value
     * @property {number} UIWORD_ID_SUBSCRIBE_FAIL_CANCEL_TEXT=20 UIWORD_ID_SUBSCRIBE_FAIL_CANCEL_TEXT value
     * @property {number} UIWORD_ID_SUBSCRIBE_FAIL_CONFIRM_TEXT=21 UIWORD_ID_SUBSCRIBE_FAIL_CONFIRM_TEXT value
     * @property {number} UIWORD_ID_NO_MORE_REWARD=22 UIWORD_ID_NO_MORE_REWARD value
     * @property {number} UIWORD_ID_UNIT_DAY=23 UIWORD_ID_UNIT_DAY value
     * @property {number} UIWORD_ID_UNIT_WEEK=24 UIWORD_ID_UNIT_WEEK value
     * @property {number} UIWORD_ID_UNIT_HOUR=25 UIWORD_ID_UNIT_HOUR value
     * @property {number} UIWORD_ID_UNIT_MINUTE=26 UIWORD_ID_UNIT_MINUTE value
     * @property {number} UIWORD_ID_VIDEO_NOT_READY_YET=27 UIWORD_ID_VIDEO_NOT_READY_YET value
     * @property {number} UIWORD_ID_FORMAT_OF_VIDEO_NOT_READY_YET=28 UIWORD_ID_FORMAT_OF_VIDEO_NOT_READY_YET value
     * @property {number} UIWORD_ID_INSTALL_SHORTCUT_SUCCESS=29 UIWORD_ID_INSTALL_SHORTCUT_SUCCESS value
     * @property {number} UIWORD_ID_NOT_SUPPORT_ON_IOS_PLATFORM=30 UIWORD_ID_NOT_SUPPORT_ON_IOS_PLATFORM value
     * @property {number} UIWORD_ID_SHARE_FAIL_TIPS_ONE=1001 UIWORD_ID_SHARE_FAIL_TIPS_ONE value
     * @property {number} UIWORD_ID_SHARE_FAIL_TIPS_TWO=1002 UIWORD_ID_SHARE_FAIL_TIPS_TWO value
     * @property {number} UIWORD_ID_SHARE_FAIL_TIPS_THREE=1003 UIWORD_ID_SHARE_FAIL_TIPS_THREE value
     * @property {number} UIWORD_ID_SHARE_VIDEO_FAIL_TIPS_ONE=1004 UIWORD_ID_SHARE_VIDEO_FAIL_TIPS_ONE value
     * @property {number} UIWORD_ID_LACK_OF_COIN=101 UIWORD_ID_LACK_OF_COIN value
     * @property {number} UIWORD_ID_POWER_TITLE_PATTAN=10000 UIWORD_ID_POWER_TITLE_PATTAN value
     * @property {number} UIWORD_ID_HAS_SGIN=10001 UIWORD_ID_HAS_SGIN value
     * @property {number} UIWORD_ID_NOT_REACH_DAY=10002 UIWORD_ID_NOT_REACH_DAY value
     * @property {number} UIWORD_ID_GET_GOLD_WANTED=10003 UIWORD_ID_GET_GOLD_WANTED value
     * @property {number} UIWORD_ID_DIAM_TITLE_PATTAN=10004 UIWORD_ID_DIAM_TITLE_PATTAN value
     * @property {number} UIWORD_ID_GET_SKIN_PATTAN=10005 UIWORD_ID_GET_SKIN_PATTAN value
     * @property {number} UIWORD_ID_SGIN_DAY_PATTAN=10006 UIWORD_ID_SGIN_DAY_PATTAN value
     * @property {number} UIWORD_UNLOCK_LEVEL_SUCCESS=10007 UIWORD_UNLOCK_LEVEL_SUCCESS value
     * @property {number} UIWORD_UNLOCK_LEVEL_FAIL=10008 UIWORD_UNLOCK_LEVEL_FAIL value
     * @property {number} UIWORD_PLASE_UNLOCK_BEFORE_LEVEL=10009 UIWORD_PLASE_UNLOCK_BEFORE_LEVEL value
     * @property {number} UIWORD_UNLOCK_LEVEL_USE_DIAM_PATTAN=10010 UIWORD_UNLOCK_LEVEL_USE_DIAM_PATTAN value
     * @property {number} UIWORD_GET_GOLD_TIPS=10011 UIWORD_GET_GOLD_TIPS value
     * @property {number} UIWORD_CONTINE_THROUGHT_LEVEL_TIPS=10012 UIWORD_CONTINE_THROUGHT_LEVEL_TIPS value
     * @property {number} UIWORD_LEVEL_INDEX_PATTAN=10013 UIWORD_LEVEL_INDEX_PATTAN value
     * @property {number} UIWORD_OPEN_BOX_TIPS01=10014 UIWORD_OPEN_BOX_TIPS01 value
     * @property {number} UIWORD_SKIN_NOT_OPEN=10015 UIWORD_SKIN_NOT_OPEN value
     */
    roitescape.UIWordIDs = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "UIWORD_ID_APP_NAME"] = 1;
        values[valuesById[2] = "UIWORD_ID_SYSTEM_ERROR_TITLE"] = 2;
        values[valuesById[3] = "UIWORD_ID_SYSTEM_ERROR_CONTENT"] = 3;
        values[valuesById[4] = "UIWORD_ID_SYSTEM_ERROR_RELOAD_GAME"] = 4;
        values[valuesById[5] = "UIWORD_ID_SYSTEM_ERROR_EXIT_GAME"] = 5;
        values[valuesById[6] = "UIWORD_ID_QQ_PLATFORM_NAME"] = 6;
        values[valuesById[7] = "UIWORD_ID_WX_PLATFORM_NAME"] = 7;
        values[valuesById[8] = "UIWORD_ID_SDK_NOT_SUPPORT_FORMAT"] = 8;
        values[valuesById[9] = "UIWORD_ID_NOT_FINISHED_YET"] = 9;
        values[valuesById[10] = "UIWORD_ID_PLAYER_BLOCKED_TITLE"] = 10;
        values[valuesById[11] = "UIWORD_ID_PLAYER_BLOCKED_CONTENT"] = 11;
        values[valuesById[12] = "UIWORD_ID_VIDEO_NOT_SUPPORT"] = 12;
        values[valuesById[13] = "UIWORD_ID_SHARE_SUCCESS"] = 13;
        values[valuesById[14] = "UIWORD_ID_ADV_SUCCESS"] = 14;
        values[valuesById[15] = "UIWORD_ID_ADV_FAIL"] = 15;
        values[valuesById[16] = "UIWORD_ID_ADV_NOT_FINISH_CONTENT"] = 16;
        values[valuesById[17] = "UIWORD_ID_ADV_NOT_FINISH_CANCEL_TEXT"] = 17;
        values[valuesById[18] = "UIWORD_ID_ADV_NOT_FINISH_CONFIRM_TEXT"] = 18;
        values[valuesById[19] = "UIWORD_ID_SUBSCRIBE_FAIL_CONTENT"] = 19;
        values[valuesById[20] = "UIWORD_ID_SUBSCRIBE_FAIL_CANCEL_TEXT"] = 20;
        values[valuesById[21] = "UIWORD_ID_SUBSCRIBE_FAIL_CONFIRM_TEXT"] = 21;
        values[valuesById[22] = "UIWORD_ID_NO_MORE_REWARD"] = 22;
        values[valuesById[23] = "UIWORD_ID_UNIT_DAY"] = 23;
        values[valuesById[24] = "UIWORD_ID_UNIT_WEEK"] = 24;
        values[valuesById[25] = "UIWORD_ID_UNIT_HOUR"] = 25;
        values[valuesById[26] = "UIWORD_ID_UNIT_MINUTE"] = 26;
        values[valuesById[27] = "UIWORD_ID_VIDEO_NOT_READY_YET"] = 27;
        values[valuesById[28] = "UIWORD_ID_FORMAT_OF_VIDEO_NOT_READY_YET"] = 28;
        values[valuesById[29] = "UIWORD_ID_INSTALL_SHORTCUT_SUCCESS"] = 29;
        values[valuesById[30] = "UIWORD_ID_NOT_SUPPORT_ON_IOS_PLATFORM"] = 30;
        values[valuesById[1001] = "UIWORD_ID_SHARE_FAIL_TIPS_ONE"] = 1001;
        values[valuesById[1002] = "UIWORD_ID_SHARE_FAIL_TIPS_TWO"] = 1002;
        values[valuesById[1003] = "UIWORD_ID_SHARE_FAIL_TIPS_THREE"] = 1003;
        values[valuesById[1004] = "UIWORD_ID_SHARE_VIDEO_FAIL_TIPS_ONE"] = 1004;
        values[valuesById[101] = "UIWORD_ID_LACK_OF_COIN"] = 101;
        values[valuesById[10000] = "UIWORD_ID_POWER_TITLE_PATTAN"] = 10000;
        values[valuesById[10001] = "UIWORD_ID_HAS_SGIN"] = 10001;
        values[valuesById[10002] = "UIWORD_ID_NOT_REACH_DAY"] = 10002;
        values[valuesById[10003] = "UIWORD_ID_GET_GOLD_WANTED"] = 10003;
        values[valuesById[10004] = "UIWORD_ID_DIAM_TITLE_PATTAN"] = 10004;
        values[valuesById[10005] = "UIWORD_ID_GET_SKIN_PATTAN"] = 10005;
        values[valuesById[10006] = "UIWORD_ID_SGIN_DAY_PATTAN"] = 10006;
        values[valuesById[10007] = "UIWORD_UNLOCK_LEVEL_SUCCESS"] = 10007;
        values[valuesById[10008] = "UIWORD_UNLOCK_LEVEL_FAIL"] = 10008;
        values[valuesById[10009] = "UIWORD_PLASE_UNLOCK_BEFORE_LEVEL"] = 10009;
        values[valuesById[10010] = "UIWORD_UNLOCK_LEVEL_USE_DIAM_PATTAN"] = 10010;
        values[valuesById[10011] = "UIWORD_GET_GOLD_TIPS"] = 10011;
        values[valuesById[10012] = "UIWORD_CONTINE_THROUGHT_LEVEL_TIPS"] = 10012;
        values[valuesById[10013] = "UIWORD_LEVEL_INDEX_PATTAN"] = 10013;
        values[valuesById[10014] = "UIWORD_OPEN_BOX_TIPS01"] = 10014;
        values[valuesById[10015] = "UIWORD_SKIN_NOT_OPEN"] = 10015;
        return values;
    })();

    roitescape.BaseConfig = (function() {

        /**
         * Properties of a BaseConfig.
         * @memberof roitescape
         * @interface IBaseConfig
         * @property {number} id BaseConfig id
         * @property {number|null} [num] BaseConfig num
         * @property {number|null} [decimal] BaseConfig decimal
         * @property {string|null} [str] BaseConfig str
         */

        /**
         * Constructs a new BaseConfig.
         * @memberof roitescape
         * @classdesc Represents a BaseConfig.
         * @implements IBaseConfig
         * @constructor
         * @param {roitescape.IBaseConfig=} [properties] Properties to set
         */
        function BaseConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BaseConfig id.
         * @member {number} id
         * @memberof roitescape.BaseConfig
         * @instance
         */
        BaseConfig.prototype.id = 0;

        /**
         * BaseConfig num.
         * @member {number} num
         * @memberof roitescape.BaseConfig
         * @instance
         */
        BaseConfig.prototype.num = 0;

        /**
         * BaseConfig decimal.
         * @member {number} decimal
         * @memberof roitescape.BaseConfig
         * @instance
         */
        BaseConfig.prototype.decimal = 0;

        /**
         * BaseConfig str.
         * @member {string} str
         * @memberof roitescape.BaseConfig
         * @instance
         */
        BaseConfig.prototype.str = "";

        /**
         * Creates a new BaseConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.BaseConfig
         * @static
         * @param {roitescape.IBaseConfig=} [properties] Properties to set
         * @returns {roitescape.BaseConfig} BaseConfig instance
         */
        BaseConfig.create = function create(properties) {
            return new BaseConfig(properties);
        };

        /**
         * Encodes the specified BaseConfig message. Does not implicitly {@link roitescape.BaseConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.BaseConfig
         * @static
         * @param {roitescape.IBaseConfig} message BaseConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.num != null && message.hasOwnProperty("num"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.num);
            if (message.decimal != null && message.hasOwnProperty("decimal"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.decimal);
            if (message.str != null && message.hasOwnProperty("str"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.str);
            return writer;
        };

        /**
         * Encodes the specified BaseConfig message, length delimited. Does not implicitly {@link roitescape.BaseConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.BaseConfig
         * @static
         * @param {roitescape.IBaseConfig} message BaseConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BaseConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BaseConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.BaseConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.BaseConfig} BaseConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.BaseConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.num = reader.uint32();
                    break;
                case 3:
                    message.decimal = reader.uint32();
                    break;
                case 4:
                    message.str = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a BaseConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.BaseConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.BaseConfig} BaseConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BaseConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BaseConfig message.
         * @function verify
         * @memberof roitescape.BaseConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BaseConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.num != null && message.hasOwnProperty("num"))
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
            if (message.decimal != null && message.hasOwnProperty("decimal"))
                if (!$util.isInteger(message.decimal))
                    return "decimal: integer expected";
            if (message.str != null && message.hasOwnProperty("str"))
                if (!$util.isString(message.str))
                    return "str: string expected";
            return null;
        };

        /**
         * Creates a BaseConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.BaseConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.BaseConfig} BaseConfig
         */
        BaseConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.BaseConfig)
                return object;
            var message = new $root.roitescape.BaseConfig();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.num != null)
                message.num = object.num >>> 0;
            if (object.decimal != null)
                message.decimal = object.decimal >>> 0;
            if (object.str != null)
                message.str = String(object.str);
            return message;
        };

        /**
         * Creates a plain object from a BaseConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.BaseConfig
         * @static
         * @param {roitescape.BaseConfig} message BaseConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BaseConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.num = 0;
                object.decimal = 0;
                object.str = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.decimal != null && message.hasOwnProperty("decimal"))
                object.decimal = message.decimal;
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = message.str;
            return object;
        };

        /**
         * Converts this BaseConfig to JSON.
         * @function toJSON
         * @memberof roitescape.BaseConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BaseConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BaseConfig;
    })();

    roitescape.TBBaseConfig = (function() {

        /**
         * Properties of a TBBaseConfig.
         * @memberof roitescape
         * @interface ITBBaseConfig
         * @property {Array.<roitescape.IBaseConfig>|null} [list] TBBaseConfig list
         */

        /**
         * Constructs a new TBBaseConfig.
         * @memberof roitescape
         * @classdesc Represents a TBBaseConfig.
         * @implements ITBBaseConfig
         * @constructor
         * @param {roitescape.ITBBaseConfig=} [properties] Properties to set
         */
        function TBBaseConfig(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBBaseConfig list.
         * @member {Array.<roitescape.IBaseConfig>} list
         * @memberof roitescape.TBBaseConfig
         * @instance
         */
        TBBaseConfig.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBBaseConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.TBBaseConfig
         * @static
         * @param {roitescape.ITBBaseConfig=} [properties] Properties to set
         * @returns {roitescape.TBBaseConfig} TBBaseConfig instance
         */
        TBBaseConfig.create = function create(properties) {
            return new TBBaseConfig(properties);
        };

        /**
         * Encodes the specified TBBaseConfig message. Does not implicitly {@link roitescape.TBBaseConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBBaseConfig
         * @static
         * @param {roitescape.ITBBaseConfig} message TBBaseConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBBaseConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.BaseConfig.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBBaseConfig message, length delimited. Does not implicitly {@link roitescape.TBBaseConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBBaseConfig
         * @static
         * @param {roitescape.ITBBaseConfig} message TBBaseConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBBaseConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBBaseConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBBaseConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBBaseConfig} TBBaseConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBBaseConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBBaseConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.BaseConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBBaseConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBBaseConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBBaseConfig} TBBaseConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBBaseConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBBaseConfig message.
         * @function verify
         * @memberof roitescape.TBBaseConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBBaseConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.BaseConfig.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBBaseConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBBaseConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBBaseConfig} TBBaseConfig
         */
        TBBaseConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBBaseConfig)
                return object;
            var message = new $root.roitescape.TBBaseConfig();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBBaseConfig.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBBaseConfig.list: object expected");
                    message.list[i] = $root.roitescape.BaseConfig.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBBaseConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBBaseConfig
         * @static
         * @param {roitescape.TBBaseConfig} message TBBaseConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBBaseConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.BaseConfig.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBBaseConfig to JSON.
         * @function toJSON
         * @memberof roitescape.TBBaseConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBBaseConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBBaseConfig;
    })();

    roitescape.UIWord = (function() {

        /**
         * Properties of a UIWord.
         * @memberof roitescape
         * @interface IUIWord
         * @property {number} id UIWord id
         * @property {string} word UIWord word
         */

        /**
         * Constructs a new UIWord.
         * @memberof roitescape
         * @classdesc Represents a UIWord.
         * @implements IUIWord
         * @constructor
         * @param {roitescape.IUIWord=} [properties] Properties to set
         */
        function UIWord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UIWord id.
         * @member {number} id
         * @memberof roitescape.UIWord
         * @instance
         */
        UIWord.prototype.id = 0;

        /**
         * UIWord word.
         * @member {string} word
         * @memberof roitescape.UIWord
         * @instance
         */
        UIWord.prototype.word = "";

        /**
         * Creates a new UIWord instance using the specified properties.
         * @function create
         * @memberof roitescape.UIWord
         * @static
         * @param {roitescape.IUIWord=} [properties] Properties to set
         * @returns {roitescape.UIWord} UIWord instance
         */
        UIWord.create = function create(properties) {
            return new UIWord(properties);
        };

        /**
         * Encodes the specified UIWord message. Does not implicitly {@link roitescape.UIWord.verify|verify} messages.
         * @function encode
         * @memberof roitescape.UIWord
         * @static
         * @param {roitescape.IUIWord} message UIWord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UIWord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.word);
            return writer;
        };

        /**
         * Encodes the specified UIWord message, length delimited. Does not implicitly {@link roitescape.UIWord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.UIWord
         * @static
         * @param {roitescape.IUIWord} message UIWord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UIWord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UIWord message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.UIWord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.UIWord} UIWord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UIWord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.UIWord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.word = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("word"))
                throw $util.ProtocolError("missing required 'word'", { instance: message });
            return message;
        };

        /**
         * Decodes a UIWord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.UIWord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.UIWord} UIWord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UIWord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UIWord message.
         * @function verify
         * @memberof roitescape.UIWord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UIWord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.word))
                return "word: string expected";
            return null;
        };

        /**
         * Creates a UIWord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.UIWord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.UIWord} UIWord
         */
        UIWord.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.UIWord)
                return object;
            var message = new $root.roitescape.UIWord();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.word != null)
                message.word = String(object.word);
            return message;
        };

        /**
         * Creates a plain object from a UIWord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.UIWord
         * @static
         * @param {roitescape.UIWord} message UIWord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UIWord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.word = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.word != null && message.hasOwnProperty("word"))
                object.word = message.word;
            return object;
        };

        /**
         * Converts this UIWord to JSON.
         * @function toJSON
         * @memberof roitescape.UIWord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UIWord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UIWord;
    })();

    roitescape.TBUIWord = (function() {

        /**
         * Properties of a TBUIWord.
         * @memberof roitescape
         * @interface ITBUIWord
         * @property {Array.<roitescape.IUIWord>|null} [list] TBUIWord list
         */

        /**
         * Constructs a new TBUIWord.
         * @memberof roitescape
         * @classdesc Represents a TBUIWord.
         * @implements ITBUIWord
         * @constructor
         * @param {roitescape.ITBUIWord=} [properties] Properties to set
         */
        function TBUIWord(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBUIWord list.
         * @member {Array.<roitescape.IUIWord>} list
         * @memberof roitescape.TBUIWord
         * @instance
         */
        TBUIWord.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBUIWord instance using the specified properties.
         * @function create
         * @memberof roitescape.TBUIWord
         * @static
         * @param {roitescape.ITBUIWord=} [properties] Properties to set
         * @returns {roitescape.TBUIWord} TBUIWord instance
         */
        TBUIWord.create = function create(properties) {
            return new TBUIWord(properties);
        };

        /**
         * Encodes the specified TBUIWord message. Does not implicitly {@link roitescape.TBUIWord.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBUIWord
         * @static
         * @param {roitescape.ITBUIWord} message TBUIWord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBUIWord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.UIWord.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBUIWord message, length delimited. Does not implicitly {@link roitescape.TBUIWord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBUIWord
         * @static
         * @param {roitescape.ITBUIWord} message TBUIWord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBUIWord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBUIWord message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBUIWord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBUIWord} TBUIWord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBUIWord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBUIWord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.UIWord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBUIWord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBUIWord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBUIWord} TBUIWord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBUIWord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBUIWord message.
         * @function verify
         * @memberof roitescape.TBUIWord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBUIWord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.UIWord.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBUIWord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBUIWord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBUIWord} TBUIWord
         */
        TBUIWord.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBUIWord)
                return object;
            var message = new $root.roitescape.TBUIWord();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBUIWord.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBUIWord.list: object expected");
                    message.list[i] = $root.roitescape.UIWord.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBUIWord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBUIWord
         * @static
         * @param {roitescape.TBUIWord} message TBUIWord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBUIWord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.UIWord.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBUIWord to JSON.
         * @function toJSON
         * @memberof roitescape.TBUIWord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBUIWord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBUIWord;
    })();

    roitescape.NetError = (function() {

        /**
         * Properties of a NetError.
         * @memberof roitescape
         * @interface INetError
         * @property {number} id NetError id
         * @property {string} word NetError word
         */

        /**
         * Constructs a new NetError.
         * @memberof roitescape
         * @classdesc Represents a NetError.
         * @implements INetError
         * @constructor
         * @param {roitescape.INetError=} [properties] Properties to set
         */
        function NetError(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NetError id.
         * @member {number} id
         * @memberof roitescape.NetError
         * @instance
         */
        NetError.prototype.id = 0;

        /**
         * NetError word.
         * @member {string} word
         * @memberof roitescape.NetError
         * @instance
         */
        NetError.prototype.word = "";

        /**
         * Creates a new NetError instance using the specified properties.
         * @function create
         * @memberof roitescape.NetError
         * @static
         * @param {roitescape.INetError=} [properties] Properties to set
         * @returns {roitescape.NetError} NetError instance
         */
        NetError.create = function create(properties) {
            return new NetError(properties);
        };

        /**
         * Encodes the specified NetError message. Does not implicitly {@link roitescape.NetError.verify|verify} messages.
         * @function encode
         * @memberof roitescape.NetError
         * @static
         * @param {roitescape.INetError} message NetError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.word);
            return writer;
        };

        /**
         * Encodes the specified NetError message, length delimited. Does not implicitly {@link roitescape.NetError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.NetError
         * @static
         * @param {roitescape.INetError} message NetError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NetError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NetError message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.NetError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.NetError} NetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.NetError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.word = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("word"))
                throw $util.ProtocolError("missing required 'word'", { instance: message });
            return message;
        };

        /**
         * Decodes a NetError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.NetError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.NetError} NetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NetError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NetError message.
         * @function verify
         * @memberof roitescape.NetError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NetError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.word))
                return "word: string expected";
            return null;
        };

        /**
         * Creates a NetError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.NetError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.NetError} NetError
         */
        NetError.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.NetError)
                return object;
            var message = new $root.roitescape.NetError();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.word != null)
                message.word = String(object.word);
            return message;
        };

        /**
         * Creates a plain object from a NetError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.NetError
         * @static
         * @param {roitescape.NetError} message NetError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NetError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.word = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.word != null && message.hasOwnProperty("word"))
                object.word = message.word;
            return object;
        };

        /**
         * Converts this NetError to JSON.
         * @function toJSON
         * @memberof roitescape.NetError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NetError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NetError;
    })();

    roitescape.TBNetError = (function() {

        /**
         * Properties of a TBNetError.
         * @memberof roitescape
         * @interface ITBNetError
         * @property {Array.<roitescape.INetError>|null} [list] TBNetError list
         */

        /**
         * Constructs a new TBNetError.
         * @memberof roitescape
         * @classdesc Represents a TBNetError.
         * @implements ITBNetError
         * @constructor
         * @param {roitescape.ITBNetError=} [properties] Properties to set
         */
        function TBNetError(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBNetError list.
         * @member {Array.<roitescape.INetError>} list
         * @memberof roitescape.TBNetError
         * @instance
         */
        TBNetError.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBNetError instance using the specified properties.
         * @function create
         * @memberof roitescape.TBNetError
         * @static
         * @param {roitescape.ITBNetError=} [properties] Properties to set
         * @returns {roitescape.TBNetError} TBNetError instance
         */
        TBNetError.create = function create(properties) {
            return new TBNetError(properties);
        };

        /**
         * Encodes the specified TBNetError message. Does not implicitly {@link roitescape.TBNetError.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBNetError
         * @static
         * @param {roitescape.ITBNetError} message TBNetError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNetError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.NetError.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBNetError message, length delimited. Does not implicitly {@link roitescape.TBNetError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBNetError
         * @static
         * @param {roitescape.ITBNetError} message TBNetError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBNetError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBNetError message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBNetError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBNetError} TBNetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNetError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBNetError();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.NetError.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBNetError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBNetError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBNetError} TBNetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBNetError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBNetError message.
         * @function verify
         * @memberof roitescape.TBNetError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBNetError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.NetError.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBNetError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBNetError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBNetError} TBNetError
         */
        TBNetError.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBNetError)
                return object;
            var message = new $root.roitescape.TBNetError();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBNetError.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBNetError.list: object expected");
                    message.list[i] = $root.roitescape.NetError.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBNetError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBNetError
         * @static
         * @param {roitescape.TBNetError} message TBNetError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBNetError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.NetError.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBNetError to JSON.
         * @function toJSON
         * @memberof roitescape.TBNetError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBNetError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBNetError;
    })();

    roitescape.SettingConfig = (function() {

        /**
         * Properties of a SettingConfig.
         * @memberof roitescape
         * @interface ISettingConfig
         * @property {boolean} isSoundOn SettingConfig isSoundOn
         * @property {boolean} isMuteOn SettingConfig isMuteOn
         */

        /**
         * Constructs a new SettingConfig.
         * @memberof roitescape
         * @classdesc Represents a SettingConfig.
         * @implements ISettingConfig
         * @constructor
         * @param {roitescape.ISettingConfig=} [properties] Properties to set
         */
        function SettingConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SettingConfig isSoundOn.
         * @member {boolean} isSoundOn
         * @memberof roitescape.SettingConfig
         * @instance
         */
        SettingConfig.prototype.isSoundOn = false;

        /**
         * SettingConfig isMuteOn.
         * @member {boolean} isMuteOn
         * @memberof roitescape.SettingConfig
         * @instance
         */
        SettingConfig.prototype.isMuteOn = false;

        /**
         * Creates a new SettingConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.SettingConfig
         * @static
         * @param {roitescape.ISettingConfig=} [properties] Properties to set
         * @returns {roitescape.SettingConfig} SettingConfig instance
         */
        SettingConfig.create = function create(properties) {
            return new SettingConfig(properties);
        };

        /**
         * Encodes the specified SettingConfig message. Does not implicitly {@link roitescape.SettingConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.SettingConfig
         * @static
         * @param {roitescape.ISettingConfig} message SettingConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isSoundOn);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isMuteOn);
            return writer;
        };

        /**
         * Encodes the specified SettingConfig message, length delimited. Does not implicitly {@link roitescape.SettingConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.SettingConfig
         * @static
         * @param {roitescape.ISettingConfig} message SettingConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettingConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SettingConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.SettingConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.SettingConfig} SettingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.SettingConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isSoundOn = reader.bool();
                    break;
                case 2:
                    message.isMuteOn = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("isSoundOn"))
                throw $util.ProtocolError("missing required 'isSoundOn'", { instance: message });
            if (!message.hasOwnProperty("isMuteOn"))
                throw $util.ProtocolError("missing required 'isMuteOn'", { instance: message });
            return message;
        };

        /**
         * Decodes a SettingConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.SettingConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.SettingConfig} SettingConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettingConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SettingConfig message.
         * @function verify
         * @memberof roitescape.SettingConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SettingConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (typeof message.isSoundOn !== "boolean")
                return "isSoundOn: boolean expected";
            if (typeof message.isMuteOn !== "boolean")
                return "isMuteOn: boolean expected";
            return null;
        };

        /**
         * Creates a SettingConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.SettingConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.SettingConfig} SettingConfig
         */
        SettingConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.SettingConfig)
                return object;
            var message = new $root.roitescape.SettingConfig();
            if (object.isSoundOn != null)
                message.isSoundOn = Boolean(object.isSoundOn);
            if (object.isMuteOn != null)
                message.isMuteOn = Boolean(object.isMuteOn);
            return message;
        };

        /**
         * Creates a plain object from a SettingConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.SettingConfig
         * @static
         * @param {roitescape.SettingConfig} message SettingConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SettingConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isSoundOn = false;
                object.isMuteOn = false;
            }
            if (message.isSoundOn != null && message.hasOwnProperty("isSoundOn"))
                object.isSoundOn = message.isSoundOn;
            if (message.isMuteOn != null && message.hasOwnProperty("isMuteOn"))
                object.isMuteOn = message.isMuteOn;
            return object;
        };

        /**
         * Converts this SettingConfig to JSON.
         * @function toJSON
         * @memberof roitescape.SettingConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SettingConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettingConfig;
    })();

    roitescape.RedGiftConfig = (function() {

        /**
         * Properties of a RedGiftConfig.
         * @memberof roitescape
         * @interface IRedGiftConfig
         * @property {number} money RedGiftConfig money
         * @property {number} totalWithdrawMoney RedGiftConfig totalWithdrawMoney
         * @property {number} totalWithdrawMoneyTimes RedGiftConfig totalWithdrawMoneyTimes
         * @property {number} totalGotRedPackageCount RedGiftConfig totalGotRedPackageCount
         * @property {boolean} isWithdrawEverydayMoneyToday RedGiftConfig isWithdrawEverydayMoneyToday
         * @property {number} recordDayOfEverydayMoney RedGiftConfig recordDayOfEverydayMoney
         * @property {number} totalWithdrawEverydayMoney RedGiftConfig totalWithdrawEverydayMoney
         */

        /**
         * Constructs a new RedGiftConfig.
         * @memberof roitescape
         * @classdesc Represents a RedGiftConfig.
         * @implements IRedGiftConfig
         * @constructor
         * @param {roitescape.IRedGiftConfig=} [properties] Properties to set
         */
        function RedGiftConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedGiftConfig money.
         * @member {number} money
         * @memberof roitescape.RedGiftConfig
         * @instance
         */
        RedGiftConfig.prototype.money = 0;

        /**
         * RedGiftConfig totalWithdrawMoney.
         * @member {number} totalWithdrawMoney
         * @memberof roitescape.RedGiftConfig
         * @instance
         */
        RedGiftConfig.prototype.totalWithdrawMoney = 0;

        /**
         * RedGiftConfig totalWithdrawMoneyTimes.
         * @member {number} totalWithdrawMoneyTimes
         * @memberof roitescape.RedGiftConfig
         * @instance
         */
        RedGiftConfig.prototype.totalWithdrawMoneyTimes = 0;

        /**
         * RedGiftConfig totalGotRedPackageCount.
         * @member {number} totalGotRedPackageCount
         * @memberof roitescape.RedGiftConfig
         * @instance
         */
        RedGiftConfig.prototype.totalGotRedPackageCount = 0;

        /**
         * RedGiftConfig isWithdrawEverydayMoneyToday.
         * @member {boolean} isWithdrawEverydayMoneyToday
         * @memberof roitescape.RedGiftConfig
         * @instance
         */
        RedGiftConfig.prototype.isWithdrawEverydayMoneyToday = false;

        /**
         * RedGiftConfig recordDayOfEverydayMoney.
         * @member {number} recordDayOfEverydayMoney
         * @memberof roitescape.RedGiftConfig
         * @instance
         */
        RedGiftConfig.prototype.recordDayOfEverydayMoney = 0;

        /**
         * RedGiftConfig totalWithdrawEverydayMoney.
         * @member {number} totalWithdrawEverydayMoney
         * @memberof roitescape.RedGiftConfig
         * @instance
         */
        RedGiftConfig.prototype.totalWithdrawEverydayMoney = 0;

        /**
         * Creates a new RedGiftConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.RedGiftConfig
         * @static
         * @param {roitescape.IRedGiftConfig=} [properties] Properties to set
         * @returns {roitescape.RedGiftConfig} RedGiftConfig instance
         */
        RedGiftConfig.create = function create(properties) {
            return new RedGiftConfig(properties);
        };

        /**
         * Encodes the specified RedGiftConfig message. Does not implicitly {@link roitescape.RedGiftConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.RedGiftConfig
         * @static
         * @param {roitescape.IRedGiftConfig} message RedGiftConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedGiftConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.money);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.totalWithdrawMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.totalWithdrawMoneyTimes);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.totalGotRedPackageCount);
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isWithdrawEverydayMoneyToday);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.recordDayOfEverydayMoney);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.totalWithdrawEverydayMoney);
            return writer;
        };

        /**
         * Encodes the specified RedGiftConfig message, length delimited. Does not implicitly {@link roitescape.RedGiftConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.RedGiftConfig
         * @static
         * @param {roitescape.IRedGiftConfig} message RedGiftConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedGiftConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedGiftConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.RedGiftConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.RedGiftConfig} RedGiftConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedGiftConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.RedGiftConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.money = reader.uint32();
                    break;
                case 2:
                    message.totalWithdrawMoney = reader.uint32();
                    break;
                case 3:
                    message.totalWithdrawMoneyTimes = reader.uint32();
                    break;
                case 4:
                    message.totalGotRedPackageCount = reader.uint32();
                    break;
                case 5:
                    message.isWithdrawEverydayMoneyToday = reader.bool();
                    break;
                case 6:
                    message.recordDayOfEverydayMoney = reader.uint32();
                    break;
                case 7:
                    message.totalWithdrawEverydayMoney = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("money"))
                throw $util.ProtocolError("missing required 'money'", { instance: message });
            if (!message.hasOwnProperty("totalWithdrawMoney"))
                throw $util.ProtocolError("missing required 'totalWithdrawMoney'", { instance: message });
            if (!message.hasOwnProperty("totalWithdrawMoneyTimes"))
                throw $util.ProtocolError("missing required 'totalWithdrawMoneyTimes'", { instance: message });
            if (!message.hasOwnProperty("totalGotRedPackageCount"))
                throw $util.ProtocolError("missing required 'totalGotRedPackageCount'", { instance: message });
            if (!message.hasOwnProperty("isWithdrawEverydayMoneyToday"))
                throw $util.ProtocolError("missing required 'isWithdrawEverydayMoneyToday'", { instance: message });
            if (!message.hasOwnProperty("recordDayOfEverydayMoney"))
                throw $util.ProtocolError("missing required 'recordDayOfEverydayMoney'", { instance: message });
            if (!message.hasOwnProperty("totalWithdrawEverydayMoney"))
                throw $util.ProtocolError("missing required 'totalWithdrawEverydayMoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a RedGiftConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.RedGiftConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.RedGiftConfig} RedGiftConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedGiftConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RedGiftConfig message.
         * @function verify
         * @memberof roitescape.RedGiftConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RedGiftConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.money))
                return "money: integer expected";
            if (!$util.isInteger(message.totalWithdrawMoney))
                return "totalWithdrawMoney: integer expected";
            if (!$util.isInteger(message.totalWithdrawMoneyTimes))
                return "totalWithdrawMoneyTimes: integer expected";
            if (!$util.isInteger(message.totalGotRedPackageCount))
                return "totalGotRedPackageCount: integer expected";
            if (typeof message.isWithdrawEverydayMoneyToday !== "boolean")
                return "isWithdrawEverydayMoneyToday: boolean expected";
            if (!$util.isInteger(message.recordDayOfEverydayMoney))
                return "recordDayOfEverydayMoney: integer expected";
            if (!$util.isInteger(message.totalWithdrawEverydayMoney))
                return "totalWithdrawEverydayMoney: integer expected";
            return null;
        };

        /**
         * Creates a RedGiftConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.RedGiftConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.RedGiftConfig} RedGiftConfig
         */
        RedGiftConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.RedGiftConfig)
                return object;
            var message = new $root.roitescape.RedGiftConfig();
            if (object.money != null)
                message.money = object.money >>> 0;
            if (object.totalWithdrawMoney != null)
                message.totalWithdrawMoney = object.totalWithdrawMoney >>> 0;
            if (object.totalWithdrawMoneyTimes != null)
                message.totalWithdrawMoneyTimes = object.totalWithdrawMoneyTimes >>> 0;
            if (object.totalGotRedPackageCount != null)
                message.totalGotRedPackageCount = object.totalGotRedPackageCount >>> 0;
            if (object.isWithdrawEverydayMoneyToday != null)
                message.isWithdrawEverydayMoneyToday = Boolean(object.isWithdrawEverydayMoneyToday);
            if (object.recordDayOfEverydayMoney != null)
                message.recordDayOfEverydayMoney = object.recordDayOfEverydayMoney >>> 0;
            if (object.totalWithdrawEverydayMoney != null)
                message.totalWithdrawEverydayMoney = object.totalWithdrawEverydayMoney >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RedGiftConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.RedGiftConfig
         * @static
         * @param {roitescape.RedGiftConfig} message RedGiftConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedGiftConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.money = 0;
                object.totalWithdrawMoney = 0;
                object.totalWithdrawMoneyTimes = 0;
                object.totalGotRedPackageCount = 0;
                object.isWithdrawEverydayMoneyToday = false;
                object.recordDayOfEverydayMoney = 0;
                object.totalWithdrawEverydayMoney = 0;
            }
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = message.money;
            if (message.totalWithdrawMoney != null && message.hasOwnProperty("totalWithdrawMoney"))
                object.totalWithdrawMoney = message.totalWithdrawMoney;
            if (message.totalWithdrawMoneyTimes != null && message.hasOwnProperty("totalWithdrawMoneyTimes"))
                object.totalWithdrawMoneyTimes = message.totalWithdrawMoneyTimes;
            if (message.totalGotRedPackageCount != null && message.hasOwnProperty("totalGotRedPackageCount"))
                object.totalGotRedPackageCount = message.totalGotRedPackageCount;
            if (message.isWithdrawEverydayMoneyToday != null && message.hasOwnProperty("isWithdrawEverydayMoneyToday"))
                object.isWithdrawEverydayMoneyToday = message.isWithdrawEverydayMoneyToday;
            if (message.recordDayOfEverydayMoney != null && message.hasOwnProperty("recordDayOfEverydayMoney"))
                object.recordDayOfEverydayMoney = message.recordDayOfEverydayMoney;
            if (message.totalWithdrawEverydayMoney != null && message.hasOwnProperty("totalWithdrawEverydayMoney"))
                object.totalWithdrawEverydayMoney = message.totalWithdrawEverydayMoney;
            return object;
        };

        /**
         * Converts this RedGiftConfig to JSON.
         * @function toJSON
         * @memberof roitescape.RedGiftConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedGiftConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RedGiftConfig;
    })();

    roitescape.LevelConfig = (function() {

        /**
         * Properties of a LevelConfig.
         * @memberof roitescape
         * @interface ILevelConfig
         * @property {number} id LevelConfig id
         * @property {string} cameraStartPos LevelConfig cameraStartPos
         * @property {string} cameraStartRot LevelConfig cameraStartRot
         * @property {string} config LevelConfig config
         * @property {number} goldReward LevelConfig goldReward
         * @property {number} lvType LevelConfig lvType
         * @property {number} floorId LevelConfig floorId
         * @property {string} hurtPoint LevelConfig hurtPoint
         * @property {string} fallHoney LevelConfig fallHoney
         */

        /**
         * Constructs a new LevelConfig.
         * @memberof roitescape
         * @classdesc Represents a LevelConfig.
         * @implements ILevelConfig
         * @constructor
         * @param {roitescape.ILevelConfig=} [properties] Properties to set
         */
        function LevelConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LevelConfig id.
         * @member {number} id
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.id = 0;

        /**
         * LevelConfig cameraStartPos.
         * @member {string} cameraStartPos
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.cameraStartPos = "";

        /**
         * LevelConfig cameraStartRot.
         * @member {string} cameraStartRot
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.cameraStartRot = "";

        /**
         * LevelConfig config.
         * @member {string} config
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.config = "";

        /**
         * LevelConfig goldReward.
         * @member {number} goldReward
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.goldReward = 0;

        /**
         * LevelConfig lvType.
         * @member {number} lvType
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.lvType = 0;

        /**
         * LevelConfig floorId.
         * @member {number} floorId
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.floorId = 0;

        /**
         * LevelConfig hurtPoint.
         * @member {string} hurtPoint
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.hurtPoint = "";

        /**
         * LevelConfig fallHoney.
         * @member {string} fallHoney
         * @memberof roitescape.LevelConfig
         * @instance
         */
        LevelConfig.prototype.fallHoney = "";

        /**
         * Creates a new LevelConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.LevelConfig
         * @static
         * @param {roitescape.ILevelConfig=} [properties] Properties to set
         * @returns {roitescape.LevelConfig} LevelConfig instance
         */
        LevelConfig.create = function create(properties) {
            return new LevelConfig(properties);
        };

        /**
         * Encodes the specified LevelConfig message. Does not implicitly {@link roitescape.LevelConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.LevelConfig
         * @static
         * @param {roitescape.ILevelConfig} message LevelConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LevelConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.cameraStartPos);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.cameraStartRot);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.config);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.goldReward);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.lvType);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.floorId);
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.hurtPoint);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.fallHoney);
            return writer;
        };

        /**
         * Encodes the specified LevelConfig message, length delimited. Does not implicitly {@link roitescape.LevelConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.LevelConfig
         * @static
         * @param {roitescape.ILevelConfig} message LevelConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LevelConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LevelConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.LevelConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.LevelConfig} LevelConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LevelConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.LevelConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.cameraStartPos = reader.string();
                    break;
                case 3:
                    message.cameraStartRot = reader.string();
                    break;
                case 4:
                    message.config = reader.string();
                    break;
                case 5:
                    message.goldReward = reader.uint32();
                    break;
                case 6:
                    message.lvType = reader.uint32();
                    break;
                case 7:
                    message.floorId = reader.uint32();
                    break;
                case 8:
                    message.hurtPoint = reader.string();
                    break;
                case 9:
                    message.fallHoney = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("cameraStartPos"))
                throw $util.ProtocolError("missing required 'cameraStartPos'", { instance: message });
            if (!message.hasOwnProperty("cameraStartRot"))
                throw $util.ProtocolError("missing required 'cameraStartRot'", { instance: message });
            if (!message.hasOwnProperty("config"))
                throw $util.ProtocolError("missing required 'config'", { instance: message });
            if (!message.hasOwnProperty("goldReward"))
                throw $util.ProtocolError("missing required 'goldReward'", { instance: message });
            if (!message.hasOwnProperty("lvType"))
                throw $util.ProtocolError("missing required 'lvType'", { instance: message });
            if (!message.hasOwnProperty("floorId"))
                throw $util.ProtocolError("missing required 'floorId'", { instance: message });
            if (!message.hasOwnProperty("hurtPoint"))
                throw $util.ProtocolError("missing required 'hurtPoint'", { instance: message });
            if (!message.hasOwnProperty("fallHoney"))
                throw $util.ProtocolError("missing required 'fallHoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a LevelConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.LevelConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.LevelConfig} LevelConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LevelConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LevelConfig message.
         * @function verify
         * @memberof roitescape.LevelConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LevelConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.cameraStartPos))
                return "cameraStartPos: string expected";
            if (!$util.isString(message.cameraStartRot))
                return "cameraStartRot: string expected";
            if (!$util.isString(message.config))
                return "config: string expected";
            if (!$util.isInteger(message.goldReward))
                return "goldReward: integer expected";
            if (!$util.isInteger(message.lvType))
                return "lvType: integer expected";
            if (!$util.isInteger(message.floorId))
                return "floorId: integer expected";
            if (!$util.isString(message.hurtPoint))
                return "hurtPoint: string expected";
            if (!$util.isString(message.fallHoney))
                return "fallHoney: string expected";
            return null;
        };

        /**
         * Creates a LevelConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.LevelConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.LevelConfig} LevelConfig
         */
        LevelConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.LevelConfig)
                return object;
            var message = new $root.roitescape.LevelConfig();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.cameraStartPos != null)
                message.cameraStartPos = String(object.cameraStartPos);
            if (object.cameraStartRot != null)
                message.cameraStartRot = String(object.cameraStartRot);
            if (object.config != null)
                message.config = String(object.config);
            if (object.goldReward != null)
                message.goldReward = object.goldReward >>> 0;
            if (object.lvType != null)
                message.lvType = object.lvType >>> 0;
            if (object.floorId != null)
                message.floorId = object.floorId >>> 0;
            if (object.hurtPoint != null)
                message.hurtPoint = String(object.hurtPoint);
            if (object.fallHoney != null)
                message.fallHoney = String(object.fallHoney);
            return message;
        };

        /**
         * Creates a plain object from a LevelConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.LevelConfig
         * @static
         * @param {roitescape.LevelConfig} message LevelConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LevelConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.cameraStartPos = "";
                object.cameraStartRot = "";
                object.config = "";
                object.goldReward = 0;
                object.lvType = 0;
                object.floorId = 0;
                object.hurtPoint = "";
                object.fallHoney = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.cameraStartPos != null && message.hasOwnProperty("cameraStartPos"))
                object.cameraStartPos = message.cameraStartPos;
            if (message.cameraStartRot != null && message.hasOwnProperty("cameraStartRot"))
                object.cameraStartRot = message.cameraStartRot;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = message.config;
            if (message.goldReward != null && message.hasOwnProperty("goldReward"))
                object.goldReward = message.goldReward;
            if (message.lvType != null && message.hasOwnProperty("lvType"))
                object.lvType = message.lvType;
            if (message.floorId != null && message.hasOwnProperty("floorId"))
                object.floorId = message.floorId;
            if (message.hurtPoint != null && message.hasOwnProperty("hurtPoint"))
                object.hurtPoint = message.hurtPoint;
            if (message.fallHoney != null && message.hasOwnProperty("fallHoney"))
                object.fallHoney = message.fallHoney;
            return object;
        };

        /**
         * Converts this LevelConfig to JSON.
         * @function toJSON
         * @memberof roitescape.LevelConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LevelConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LevelConfig;
    })();

    roitescape.TBLevelConfig = (function() {

        /**
         * Properties of a TBLevelConfig.
         * @memberof roitescape
         * @interface ITBLevelConfig
         * @property {Array.<roitescape.ILevelConfig>|null} [list] TBLevelConfig list
         */

        /**
         * Constructs a new TBLevelConfig.
         * @memberof roitescape
         * @classdesc Represents a TBLevelConfig.
         * @implements ITBLevelConfig
         * @constructor
         * @param {roitescape.ITBLevelConfig=} [properties] Properties to set
         */
        function TBLevelConfig(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBLevelConfig list.
         * @member {Array.<roitescape.ILevelConfig>} list
         * @memberof roitescape.TBLevelConfig
         * @instance
         */
        TBLevelConfig.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBLevelConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.TBLevelConfig
         * @static
         * @param {roitescape.ITBLevelConfig=} [properties] Properties to set
         * @returns {roitescape.TBLevelConfig} TBLevelConfig instance
         */
        TBLevelConfig.create = function create(properties) {
            return new TBLevelConfig(properties);
        };

        /**
         * Encodes the specified TBLevelConfig message. Does not implicitly {@link roitescape.TBLevelConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBLevelConfig
         * @static
         * @param {roitescape.ITBLevelConfig} message TBLevelConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBLevelConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.LevelConfig.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBLevelConfig message, length delimited. Does not implicitly {@link roitescape.TBLevelConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBLevelConfig
         * @static
         * @param {roitescape.ITBLevelConfig} message TBLevelConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBLevelConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBLevelConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBLevelConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBLevelConfig} TBLevelConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBLevelConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBLevelConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.LevelConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBLevelConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBLevelConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBLevelConfig} TBLevelConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBLevelConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBLevelConfig message.
         * @function verify
         * @memberof roitescape.TBLevelConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBLevelConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.LevelConfig.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBLevelConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBLevelConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBLevelConfig} TBLevelConfig
         */
        TBLevelConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBLevelConfig)
                return object;
            var message = new $root.roitescape.TBLevelConfig();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBLevelConfig.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBLevelConfig.list: object expected");
                    message.list[i] = $root.roitescape.LevelConfig.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBLevelConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBLevelConfig
         * @static
         * @param {roitescape.TBLevelConfig} message TBLevelConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBLevelConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.LevelConfig.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBLevelConfig to JSON.
         * @function toJSON
         * @memberof roitescape.TBLevelConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBLevelConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBLevelConfig;
    })();

    roitescape.PlayerConfig = (function() {

        /**
         * Properties of a PlayerConfig.
         * @memberof roitescape
         * @interface IPlayerConfig
         * @property {number} id PlayerConfig id
         * @property {string} model PlayerConfig model
         * @property {number} mass PlayerConfig mass
         * @property {number} quality PlayerConfig quality
         * @property {string} icon PlayerConfig icon
         * @property {string} name PlayerConfig name
         * @property {string} unLockCount PlayerConfig unLockCount
         * @property {number} isNew PlayerConfig isNew
         * @property {number} sellPrice PlayerConfig sellPrice
         * @property {number} isOpen PlayerConfig isOpen
         * @property {number} recomedRate PlayerConfig recomedRate
         * @property {number} killGold PlayerConfig killGold
         * @property {number} maxLv PlayerConfig maxLv
         * @property {number} combineChip PlayerConfig combineChip
         */

        /**
         * Constructs a new PlayerConfig.
         * @memberof roitescape
         * @classdesc Represents a PlayerConfig.
         * @implements IPlayerConfig
         * @constructor
         * @param {roitescape.IPlayerConfig=} [properties] Properties to set
         */
        function PlayerConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerConfig id.
         * @member {number} id
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.id = 0;

        /**
         * PlayerConfig model.
         * @member {string} model
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.model = "";

        /**
         * PlayerConfig mass.
         * @member {number} mass
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.mass = 0;

        /**
         * PlayerConfig quality.
         * @member {number} quality
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.quality = 0;

        /**
         * PlayerConfig icon.
         * @member {string} icon
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.icon = "";

        /**
         * PlayerConfig name.
         * @member {string} name
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.name = "";

        /**
         * PlayerConfig unLockCount.
         * @member {string} unLockCount
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.unLockCount = "";

        /**
         * PlayerConfig isNew.
         * @member {number} isNew
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.isNew = 0;

        /**
         * PlayerConfig sellPrice.
         * @member {number} sellPrice
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.sellPrice = 0;

        /**
         * PlayerConfig isOpen.
         * @member {number} isOpen
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.isOpen = 0;

        /**
         * PlayerConfig recomedRate.
         * @member {number} recomedRate
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.recomedRate = 0;

        /**
         * PlayerConfig killGold.
         * @member {number} killGold
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.killGold = 0;

        /**
         * PlayerConfig maxLv.
         * @member {number} maxLv
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.maxLv = 0;

        /**
         * PlayerConfig combineChip.
         * @member {number} combineChip
         * @memberof roitescape.PlayerConfig
         * @instance
         */
        PlayerConfig.prototype.combineChip = 0;

        /**
         * Creates a new PlayerConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.PlayerConfig
         * @static
         * @param {roitescape.IPlayerConfig=} [properties] Properties to set
         * @returns {roitescape.PlayerConfig} PlayerConfig instance
         */
        PlayerConfig.create = function create(properties) {
            return new PlayerConfig(properties);
        };

        /**
         * Encodes the specified PlayerConfig message. Does not implicitly {@link roitescape.PlayerConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.PlayerConfig
         * @static
         * @param {roitescape.IPlayerConfig} message PlayerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.model);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.mass);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.quality);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.unLockCount);
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.isNew);
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.sellPrice);
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.isOpen);
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.recomedRate);
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.killGold);
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.maxLv);
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.combineChip);
            return writer;
        };

        /**
         * Encodes the specified PlayerConfig message, length delimited. Does not implicitly {@link roitescape.PlayerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.PlayerConfig
         * @static
         * @param {roitescape.IPlayerConfig} message PlayerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.PlayerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.PlayerConfig} PlayerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.PlayerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.model = reader.string();
                    break;
                case 3:
                    message.mass = reader.uint32();
                    break;
                case 4:
                    message.quality = reader.uint32();
                    break;
                case 5:
                    message.icon = reader.string();
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                case 7:
                    message.unLockCount = reader.string();
                    break;
                case 8:
                    message.isNew = reader.uint32();
                    break;
                case 9:
                    message.sellPrice = reader.uint32();
                    break;
                case 10:
                    message.isOpen = reader.uint32();
                    break;
                case 11:
                    message.recomedRate = reader.uint32();
                    break;
                case 12:
                    message.killGold = reader.uint32();
                    break;
                case 13:
                    message.maxLv = reader.uint32();
                    break;
                case 14:
                    message.combineChip = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("model"))
                throw $util.ProtocolError("missing required 'model'", { instance: message });
            if (!message.hasOwnProperty("mass"))
                throw $util.ProtocolError("missing required 'mass'", { instance: message });
            if (!message.hasOwnProperty("quality"))
                throw $util.ProtocolError("missing required 'quality'", { instance: message });
            if (!message.hasOwnProperty("icon"))
                throw $util.ProtocolError("missing required 'icon'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("unLockCount"))
                throw $util.ProtocolError("missing required 'unLockCount'", { instance: message });
            if (!message.hasOwnProperty("isNew"))
                throw $util.ProtocolError("missing required 'isNew'", { instance: message });
            if (!message.hasOwnProperty("sellPrice"))
                throw $util.ProtocolError("missing required 'sellPrice'", { instance: message });
            if (!message.hasOwnProperty("isOpen"))
                throw $util.ProtocolError("missing required 'isOpen'", { instance: message });
            if (!message.hasOwnProperty("recomedRate"))
                throw $util.ProtocolError("missing required 'recomedRate'", { instance: message });
            if (!message.hasOwnProperty("killGold"))
                throw $util.ProtocolError("missing required 'killGold'", { instance: message });
            if (!message.hasOwnProperty("maxLv"))
                throw $util.ProtocolError("missing required 'maxLv'", { instance: message });
            if (!message.hasOwnProperty("combineChip"))
                throw $util.ProtocolError("missing required 'combineChip'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.PlayerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.PlayerConfig} PlayerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerConfig message.
         * @function verify
         * @memberof roitescape.PlayerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.model))
                return "model: string expected";
            if (!$util.isInteger(message.mass))
                return "mass: integer expected";
            if (!$util.isInteger(message.quality))
                return "quality: integer expected";
            if (!$util.isString(message.icon))
                return "icon: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.unLockCount))
                return "unLockCount: string expected";
            if (!$util.isInteger(message.isNew))
                return "isNew: integer expected";
            if (!$util.isInteger(message.sellPrice))
                return "sellPrice: integer expected";
            if (!$util.isInteger(message.isOpen))
                return "isOpen: integer expected";
            if (!$util.isInteger(message.recomedRate))
                return "recomedRate: integer expected";
            if (!$util.isInteger(message.killGold))
                return "killGold: integer expected";
            if (!$util.isInteger(message.maxLv))
                return "maxLv: integer expected";
            if (!$util.isInteger(message.combineChip))
                return "combineChip: integer expected";
            return null;
        };

        /**
         * Creates a PlayerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.PlayerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.PlayerConfig} PlayerConfig
         */
        PlayerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.PlayerConfig)
                return object;
            var message = new $root.roitescape.PlayerConfig();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.model != null)
                message.model = String(object.model);
            if (object.mass != null)
                message.mass = object.mass >>> 0;
            if (object.quality != null)
                message.quality = object.quality >>> 0;
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.name != null)
                message.name = String(object.name);
            if (object.unLockCount != null)
                message.unLockCount = String(object.unLockCount);
            if (object.isNew != null)
                message.isNew = object.isNew >>> 0;
            if (object.sellPrice != null)
                message.sellPrice = object.sellPrice >>> 0;
            if (object.isOpen != null)
                message.isOpen = object.isOpen >>> 0;
            if (object.recomedRate != null)
                message.recomedRate = object.recomedRate >>> 0;
            if (object.killGold != null)
                message.killGold = object.killGold >>> 0;
            if (object.maxLv != null)
                message.maxLv = object.maxLv >>> 0;
            if (object.combineChip != null)
                message.combineChip = object.combineChip >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.PlayerConfig
         * @static
         * @param {roitescape.PlayerConfig} message PlayerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.model = "";
                object.mass = 0;
                object.quality = 0;
                object.icon = "";
                object.name = "";
                object.unLockCount = "";
                object.isNew = 0;
                object.sellPrice = 0;
                object.isOpen = 0;
                object.recomedRate = 0;
                object.killGold = 0;
                object.maxLv = 0;
                object.combineChip = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.mass != null && message.hasOwnProperty("mass"))
                object.mass = message.mass;
            if (message.quality != null && message.hasOwnProperty("quality"))
                object.quality = message.quality;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.unLockCount != null && message.hasOwnProperty("unLockCount"))
                object.unLockCount = message.unLockCount;
            if (message.isNew != null && message.hasOwnProperty("isNew"))
                object.isNew = message.isNew;
            if (message.sellPrice != null && message.hasOwnProperty("sellPrice"))
                object.sellPrice = message.sellPrice;
            if (message.isOpen != null && message.hasOwnProperty("isOpen"))
                object.isOpen = message.isOpen;
            if (message.recomedRate != null && message.hasOwnProperty("recomedRate"))
                object.recomedRate = message.recomedRate;
            if (message.killGold != null && message.hasOwnProperty("killGold"))
                object.killGold = message.killGold;
            if (message.maxLv != null && message.hasOwnProperty("maxLv"))
                object.maxLv = message.maxLv;
            if (message.combineChip != null && message.hasOwnProperty("combineChip"))
                object.combineChip = message.combineChip;
            return object;
        };

        /**
         * Converts this PlayerConfig to JSON.
         * @function toJSON
         * @memberof roitescape.PlayerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerConfig;
    })();

    roitescape.TBPlayerConfig = (function() {

        /**
         * Properties of a TBPlayerConfig.
         * @memberof roitescape
         * @interface ITBPlayerConfig
         * @property {Array.<roitescape.IPlayerConfig>|null} [list] TBPlayerConfig list
         */

        /**
         * Constructs a new TBPlayerConfig.
         * @memberof roitescape
         * @classdesc Represents a TBPlayerConfig.
         * @implements ITBPlayerConfig
         * @constructor
         * @param {roitescape.ITBPlayerConfig=} [properties] Properties to set
         */
        function TBPlayerConfig(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBPlayerConfig list.
         * @member {Array.<roitescape.IPlayerConfig>} list
         * @memberof roitescape.TBPlayerConfig
         * @instance
         */
        TBPlayerConfig.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBPlayerConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.TBPlayerConfig
         * @static
         * @param {roitescape.ITBPlayerConfig=} [properties] Properties to set
         * @returns {roitescape.TBPlayerConfig} TBPlayerConfig instance
         */
        TBPlayerConfig.create = function create(properties) {
            return new TBPlayerConfig(properties);
        };

        /**
         * Encodes the specified TBPlayerConfig message. Does not implicitly {@link roitescape.TBPlayerConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBPlayerConfig
         * @static
         * @param {roitescape.ITBPlayerConfig} message TBPlayerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBPlayerConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.PlayerConfig.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBPlayerConfig message, length delimited. Does not implicitly {@link roitescape.TBPlayerConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBPlayerConfig
         * @static
         * @param {roitescape.ITBPlayerConfig} message TBPlayerConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBPlayerConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBPlayerConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBPlayerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBPlayerConfig} TBPlayerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBPlayerConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBPlayerConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.PlayerConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBPlayerConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBPlayerConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBPlayerConfig} TBPlayerConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBPlayerConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBPlayerConfig message.
         * @function verify
         * @memberof roitescape.TBPlayerConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBPlayerConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.PlayerConfig.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBPlayerConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBPlayerConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBPlayerConfig} TBPlayerConfig
         */
        TBPlayerConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBPlayerConfig)
                return object;
            var message = new $root.roitescape.TBPlayerConfig();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBPlayerConfig.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBPlayerConfig.list: object expected");
                    message.list[i] = $root.roitescape.PlayerConfig.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBPlayerConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBPlayerConfig
         * @static
         * @param {roitescape.TBPlayerConfig} message TBPlayerConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBPlayerConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.PlayerConfig.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBPlayerConfig to JSON.
         * @function toJSON
         * @memberof roitescape.TBPlayerConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBPlayerConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBPlayerConfig;
    })();

    roitescape.Quality = (function() {

        /**
         * Properties of a Quality.
         * @memberof roitescape
         * @interface IQuality
         * @property {number} id Quality id
         * @property {string} hpRate Quality hpRate
         * @property {string} hurtRate Quality hurtRate
         * @property {string} defRate Quality defRate
         * @property {string} name Quality name
         * @property {string} speedRate Quality speedRate
         * @property {string} rareBg Quality rareBg
         */

        /**
         * Constructs a new Quality.
         * @memberof roitescape
         * @classdesc Represents a Quality.
         * @implements IQuality
         * @constructor
         * @param {roitescape.IQuality=} [properties] Properties to set
         */
        function Quality(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Quality id.
         * @member {number} id
         * @memberof roitescape.Quality
         * @instance
         */
        Quality.prototype.id = 0;

        /**
         * Quality hpRate.
         * @member {string} hpRate
         * @memberof roitescape.Quality
         * @instance
         */
        Quality.prototype.hpRate = "";

        /**
         * Quality hurtRate.
         * @member {string} hurtRate
         * @memberof roitescape.Quality
         * @instance
         */
        Quality.prototype.hurtRate = "";

        /**
         * Quality defRate.
         * @member {string} defRate
         * @memberof roitescape.Quality
         * @instance
         */
        Quality.prototype.defRate = "";

        /**
         * Quality name.
         * @member {string} name
         * @memberof roitescape.Quality
         * @instance
         */
        Quality.prototype.name = "";

        /**
         * Quality speedRate.
         * @member {string} speedRate
         * @memberof roitescape.Quality
         * @instance
         */
        Quality.prototype.speedRate = "";

        /**
         * Quality rareBg.
         * @member {string} rareBg
         * @memberof roitescape.Quality
         * @instance
         */
        Quality.prototype.rareBg = "";

        /**
         * Creates a new Quality instance using the specified properties.
         * @function create
         * @memberof roitescape.Quality
         * @static
         * @param {roitescape.IQuality=} [properties] Properties to set
         * @returns {roitescape.Quality} Quality instance
         */
        Quality.create = function create(properties) {
            return new Quality(properties);
        };

        /**
         * Encodes the specified Quality message. Does not implicitly {@link roitescape.Quality.verify|verify} messages.
         * @function encode
         * @memberof roitescape.Quality
         * @static
         * @param {roitescape.IQuality} message Quality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quality.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.hpRate);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.hurtRate);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.defRate);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.name);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.speedRate);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.rareBg);
            return writer;
        };

        /**
         * Encodes the specified Quality message, length delimited. Does not implicitly {@link roitescape.Quality.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.Quality
         * @static
         * @param {roitescape.IQuality} message Quality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quality.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Quality message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.Quality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.Quality} Quality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quality.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.Quality();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.hpRate = reader.string();
                    break;
                case 3:
                    message.hurtRate = reader.string();
                    break;
                case 4:
                    message.defRate = reader.string();
                    break;
                case 5:
                    message.name = reader.string();
                    break;
                case 6:
                    message.speedRate = reader.string();
                    break;
                case 7:
                    message.rareBg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("hpRate"))
                throw $util.ProtocolError("missing required 'hpRate'", { instance: message });
            if (!message.hasOwnProperty("hurtRate"))
                throw $util.ProtocolError("missing required 'hurtRate'", { instance: message });
            if (!message.hasOwnProperty("defRate"))
                throw $util.ProtocolError("missing required 'defRate'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("speedRate"))
                throw $util.ProtocolError("missing required 'speedRate'", { instance: message });
            if (!message.hasOwnProperty("rareBg"))
                throw $util.ProtocolError("missing required 'rareBg'", { instance: message });
            return message;
        };

        /**
         * Decodes a Quality message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.Quality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.Quality} Quality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quality.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Quality message.
         * @function verify
         * @memberof roitescape.Quality
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Quality.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.hpRate))
                return "hpRate: string expected";
            if (!$util.isString(message.hurtRate))
                return "hurtRate: string expected";
            if (!$util.isString(message.defRate))
                return "defRate: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.speedRate))
                return "speedRate: string expected";
            if (!$util.isString(message.rareBg))
                return "rareBg: string expected";
            return null;
        };

        /**
         * Creates a Quality message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.Quality
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.Quality} Quality
         */
        Quality.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.Quality)
                return object;
            var message = new $root.roitescape.Quality();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.hpRate != null)
                message.hpRate = String(object.hpRate);
            if (object.hurtRate != null)
                message.hurtRate = String(object.hurtRate);
            if (object.defRate != null)
                message.defRate = String(object.defRate);
            if (object.name != null)
                message.name = String(object.name);
            if (object.speedRate != null)
                message.speedRate = String(object.speedRate);
            if (object.rareBg != null)
                message.rareBg = String(object.rareBg);
            return message;
        };

        /**
         * Creates a plain object from a Quality message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.Quality
         * @static
         * @param {roitescape.Quality} message Quality
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Quality.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.hpRate = "";
                object.hurtRate = "";
                object.defRate = "";
                object.name = "";
                object.speedRate = "";
                object.rareBg = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.hpRate != null && message.hasOwnProperty("hpRate"))
                object.hpRate = message.hpRate;
            if (message.hurtRate != null && message.hasOwnProperty("hurtRate"))
                object.hurtRate = message.hurtRate;
            if (message.defRate != null && message.hasOwnProperty("defRate"))
                object.defRate = message.defRate;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.speedRate != null && message.hasOwnProperty("speedRate"))
                object.speedRate = message.speedRate;
            if (message.rareBg != null && message.hasOwnProperty("rareBg"))
                object.rareBg = message.rareBg;
            return object;
        };

        /**
         * Converts this Quality to JSON.
         * @function toJSON
         * @memberof roitescape.Quality
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Quality.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Quality;
    })();

    roitescape.TBQuality = (function() {

        /**
         * Properties of a TBQuality.
         * @memberof roitescape
         * @interface ITBQuality
         * @property {Array.<roitescape.IQuality>|null} [list] TBQuality list
         */

        /**
         * Constructs a new TBQuality.
         * @memberof roitescape
         * @classdesc Represents a TBQuality.
         * @implements ITBQuality
         * @constructor
         * @param {roitescape.ITBQuality=} [properties] Properties to set
         */
        function TBQuality(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBQuality list.
         * @member {Array.<roitescape.IQuality>} list
         * @memberof roitescape.TBQuality
         * @instance
         */
        TBQuality.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBQuality instance using the specified properties.
         * @function create
         * @memberof roitescape.TBQuality
         * @static
         * @param {roitescape.ITBQuality=} [properties] Properties to set
         * @returns {roitescape.TBQuality} TBQuality instance
         */
        TBQuality.create = function create(properties) {
            return new TBQuality(properties);
        };

        /**
         * Encodes the specified TBQuality message. Does not implicitly {@link roitescape.TBQuality.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBQuality
         * @static
         * @param {roitescape.ITBQuality} message TBQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBQuality.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.Quality.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBQuality message, length delimited. Does not implicitly {@link roitescape.TBQuality.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBQuality
         * @static
         * @param {roitescape.ITBQuality} message TBQuality message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBQuality.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBQuality message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBQuality} TBQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBQuality.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBQuality();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.Quality.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBQuality message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBQuality
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBQuality} TBQuality
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBQuality.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBQuality message.
         * @function verify
         * @memberof roitescape.TBQuality
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBQuality.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.Quality.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBQuality message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBQuality
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBQuality} TBQuality
         */
        TBQuality.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBQuality)
                return object;
            var message = new $root.roitescape.TBQuality();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBQuality.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBQuality.list: object expected");
                    message.list[i] = $root.roitescape.Quality.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBQuality message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBQuality
         * @static
         * @param {roitescape.TBQuality} message TBQuality
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBQuality.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.Quality.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBQuality to JSON.
         * @function toJSON
         * @memberof roitescape.TBQuality
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBQuality.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBQuality;
    })();

    roitescape.SginConfig = (function() {

        /**
         * Properties of a SginConfig.
         * @memberof roitescape
         * @interface ISginConfig
         * @property {number} id SginConfig id
         * @property {string} type SginConfig type
         * @property {string} count SginConfig count
         * @property {string} isDouble SginConfig isDouble
         * @property {string} param1 SginConfig param1
         * @property {string} name SginConfig name
         */

        /**
         * Constructs a new SginConfig.
         * @memberof roitescape
         * @classdesc Represents a SginConfig.
         * @implements ISginConfig
         * @constructor
         * @param {roitescape.ISginConfig=} [properties] Properties to set
         */
        function SginConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SginConfig id.
         * @member {number} id
         * @memberof roitescape.SginConfig
         * @instance
         */
        SginConfig.prototype.id = 0;

        /**
         * SginConfig type.
         * @member {string} type
         * @memberof roitescape.SginConfig
         * @instance
         */
        SginConfig.prototype.type = "";

        /**
         * SginConfig count.
         * @member {string} count
         * @memberof roitescape.SginConfig
         * @instance
         */
        SginConfig.prototype.count = "";

        /**
         * SginConfig isDouble.
         * @member {string} isDouble
         * @memberof roitescape.SginConfig
         * @instance
         */
        SginConfig.prototype.isDouble = "";

        /**
         * SginConfig param1.
         * @member {string} param1
         * @memberof roitescape.SginConfig
         * @instance
         */
        SginConfig.prototype.param1 = "";

        /**
         * SginConfig name.
         * @member {string} name
         * @memberof roitescape.SginConfig
         * @instance
         */
        SginConfig.prototype.name = "";

        /**
         * Creates a new SginConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.SginConfig
         * @static
         * @param {roitescape.ISginConfig=} [properties] Properties to set
         * @returns {roitescape.SginConfig} SginConfig instance
         */
        SginConfig.create = function create(properties) {
            return new SginConfig(properties);
        };

        /**
         * Encodes the specified SginConfig message. Does not implicitly {@link roitescape.SginConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.SginConfig
         * @static
         * @param {roitescape.ISginConfig} message SginConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SginConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.type);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.count);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.isDouble);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.param1);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified SginConfig message, length delimited. Does not implicitly {@link roitescape.SginConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.SginConfig
         * @static
         * @param {roitescape.ISginConfig} message SginConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SginConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SginConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.SginConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.SginConfig} SginConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SginConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.SginConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.count = reader.string();
                    break;
                case 4:
                    message.isDouble = reader.string();
                    break;
                case 5:
                    message.param1 = reader.string();
                    break;
                case 6:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            if (!message.hasOwnProperty("isDouble"))
                throw $util.ProtocolError("missing required 'isDouble'", { instance: message });
            if (!message.hasOwnProperty("param1"))
                throw $util.ProtocolError("missing required 'param1'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a SginConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.SginConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.SginConfig} SginConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SginConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SginConfig message.
         * @function verify
         * @memberof roitescape.SginConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SginConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.type))
                return "type: string expected";
            if (!$util.isString(message.count))
                return "count: string expected";
            if (!$util.isString(message.isDouble))
                return "isDouble: string expected";
            if (!$util.isString(message.param1))
                return "param1: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        /**
         * Creates a SginConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.SginConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.SginConfig} SginConfig
         */
        SginConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.SginConfig)
                return object;
            var message = new $root.roitescape.SginConfig();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.type != null)
                message.type = String(object.type);
            if (object.count != null)
                message.count = String(object.count);
            if (object.isDouble != null)
                message.isDouble = String(object.isDouble);
            if (object.param1 != null)
                message.param1 = String(object.param1);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a SginConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.SginConfig
         * @static
         * @param {roitescape.SginConfig} message SginConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SginConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.type = "";
                object.count = "";
                object.isDouble = "";
                object.param1 = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.isDouble != null && message.hasOwnProperty("isDouble"))
                object.isDouble = message.isDouble;
            if (message.param1 != null && message.hasOwnProperty("param1"))
                object.param1 = message.param1;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this SginConfig to JSON.
         * @function toJSON
         * @memberof roitescape.SginConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SginConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SginConfig;
    })();

    roitescape.TBSginConfig = (function() {

        /**
         * Properties of a TBSginConfig.
         * @memberof roitescape
         * @interface ITBSginConfig
         * @property {Array.<roitescape.ISginConfig>|null} [list] TBSginConfig list
         */

        /**
         * Constructs a new TBSginConfig.
         * @memberof roitescape
         * @classdesc Represents a TBSginConfig.
         * @implements ITBSginConfig
         * @constructor
         * @param {roitescape.ITBSginConfig=} [properties] Properties to set
         */
        function TBSginConfig(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBSginConfig list.
         * @member {Array.<roitescape.ISginConfig>} list
         * @memberof roitescape.TBSginConfig
         * @instance
         */
        TBSginConfig.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBSginConfig instance using the specified properties.
         * @function create
         * @memberof roitescape.TBSginConfig
         * @static
         * @param {roitescape.ITBSginConfig=} [properties] Properties to set
         * @returns {roitescape.TBSginConfig} TBSginConfig instance
         */
        TBSginConfig.create = function create(properties) {
            return new TBSginConfig(properties);
        };

        /**
         * Encodes the specified TBSginConfig message. Does not implicitly {@link roitescape.TBSginConfig.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBSginConfig
         * @static
         * @param {roitescape.ITBSginConfig} message TBSginConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBSginConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.SginConfig.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBSginConfig message, length delimited. Does not implicitly {@link roitescape.TBSginConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBSginConfig
         * @static
         * @param {roitescape.ITBSginConfig} message TBSginConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBSginConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBSginConfig message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBSginConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBSginConfig} TBSginConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBSginConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBSginConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.SginConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBSginConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBSginConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBSginConfig} TBSginConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBSginConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBSginConfig message.
         * @function verify
         * @memberof roitescape.TBSginConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBSginConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.SginConfig.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBSginConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBSginConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBSginConfig} TBSginConfig
         */
        TBSginConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBSginConfig)
                return object;
            var message = new $root.roitescape.TBSginConfig();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBSginConfig.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBSginConfig.list: object expected");
                    message.list[i] = $root.roitescape.SginConfig.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBSginConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBSginConfig
         * @static
         * @param {roitescape.TBSginConfig} message TBSginConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBSginConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.SginConfig.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBSginConfig to JSON.
         * @function toJSON
         * @memberof roitescape.TBSginConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBSginConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBSginConfig;
    })();

    roitescape.PlayerProp = (function() {

        /**
         * Properties of a PlayerProp.
         * @memberof roitescape
         * @interface IPlayerProp
         * @property {number} hpLv PlayerProp hpLv
         * @property {number} defLv PlayerProp defLv
         * @property {number} hurtLv PlayerProp hurtLv
         * @property {number} speedLv PlayerProp speedLv
         */

        /**
         * Constructs a new PlayerProp.
         * @memberof roitescape
         * @classdesc Represents a PlayerProp.
         * @implements IPlayerProp
         * @constructor
         * @param {roitescape.IPlayerProp=} [properties] Properties to set
         */
        function PlayerProp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerProp hpLv.
         * @member {number} hpLv
         * @memberof roitescape.PlayerProp
         * @instance
         */
        PlayerProp.prototype.hpLv = 0;

        /**
         * PlayerProp defLv.
         * @member {number} defLv
         * @memberof roitescape.PlayerProp
         * @instance
         */
        PlayerProp.prototype.defLv = 0;

        /**
         * PlayerProp hurtLv.
         * @member {number} hurtLv
         * @memberof roitescape.PlayerProp
         * @instance
         */
        PlayerProp.prototype.hurtLv = 0;

        /**
         * PlayerProp speedLv.
         * @member {number} speedLv
         * @memberof roitescape.PlayerProp
         * @instance
         */
        PlayerProp.prototype.speedLv = 0;

        /**
         * Creates a new PlayerProp instance using the specified properties.
         * @function create
         * @memberof roitescape.PlayerProp
         * @static
         * @param {roitescape.IPlayerProp=} [properties] Properties to set
         * @returns {roitescape.PlayerProp} PlayerProp instance
         */
        PlayerProp.create = function create(properties) {
            return new PlayerProp(properties);
        };

        /**
         * Encodes the specified PlayerProp message. Does not implicitly {@link roitescape.PlayerProp.verify|verify} messages.
         * @function encode
         * @memberof roitescape.PlayerProp
         * @static
         * @param {roitescape.IPlayerProp} message PlayerProp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerProp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.hpLv);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.defLv);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.hurtLv);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.speedLv);
            return writer;
        };

        /**
         * Encodes the specified PlayerProp message, length delimited. Does not implicitly {@link roitescape.PlayerProp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.PlayerProp
         * @static
         * @param {roitescape.IPlayerProp} message PlayerProp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerProp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerProp message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.PlayerProp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.PlayerProp} PlayerProp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerProp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.PlayerProp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.hpLv = reader.uint32();
                    break;
                case 2:
                    message.defLv = reader.uint32();
                    break;
                case 3:
                    message.hurtLv = reader.uint32();
                    break;
                case 4:
                    message.speedLv = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("hpLv"))
                throw $util.ProtocolError("missing required 'hpLv'", { instance: message });
            if (!message.hasOwnProperty("defLv"))
                throw $util.ProtocolError("missing required 'defLv'", { instance: message });
            if (!message.hasOwnProperty("hurtLv"))
                throw $util.ProtocolError("missing required 'hurtLv'", { instance: message });
            if (!message.hasOwnProperty("speedLv"))
                throw $util.ProtocolError("missing required 'speedLv'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerProp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.PlayerProp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.PlayerProp} PlayerProp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerProp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerProp message.
         * @function verify
         * @memberof roitescape.PlayerProp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerProp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.hpLv))
                return "hpLv: integer expected";
            if (!$util.isInteger(message.defLv))
                return "defLv: integer expected";
            if (!$util.isInteger(message.hurtLv))
                return "hurtLv: integer expected";
            if (!$util.isInteger(message.speedLv))
                return "speedLv: integer expected";
            return null;
        };

        /**
         * Creates a PlayerProp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.PlayerProp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.PlayerProp} PlayerProp
         */
        PlayerProp.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.PlayerProp)
                return object;
            var message = new $root.roitescape.PlayerProp();
            if (object.hpLv != null)
                message.hpLv = object.hpLv >>> 0;
            if (object.defLv != null)
                message.defLv = object.defLv >>> 0;
            if (object.hurtLv != null)
                message.hurtLv = object.hurtLv >>> 0;
            if (object.speedLv != null)
                message.speedLv = object.speedLv >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerProp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.PlayerProp
         * @static
         * @param {roitescape.PlayerProp} message PlayerProp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerProp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.hpLv = 0;
                object.defLv = 0;
                object.hurtLv = 0;
                object.speedLv = 0;
            }
            if (message.hpLv != null && message.hasOwnProperty("hpLv"))
                object.hpLv = message.hpLv;
            if (message.defLv != null && message.hasOwnProperty("defLv"))
                object.defLv = message.defLv;
            if (message.hurtLv != null && message.hasOwnProperty("hurtLv"))
                object.hurtLv = message.hurtLv;
            if (message.speedLv != null && message.hasOwnProperty("speedLv"))
                object.speedLv = message.speedLv;
            return object;
        };

        /**
         * Converts this PlayerProp to JSON.
         * @function toJSON
         * @memberof roitescape.PlayerProp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerProp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerProp;
    })();

    roitescape.SkinData = (function() {

        /**
         * Properties of a SkinData.
         * @memberof roitescape
         * @interface ISkinData
         * @property {number} id SkinData id
         * @property {number} viewAdTimes SkinData viewAdTimes
         * @property {number} isOwner SkinData isOwner
         * @property {roitescape.IPlayerProp} playerProp SkinData playerProp
         * @property {number|null} [skinChip] SkinData skinChip
         * @property {number|null} [star] SkinData star
         */

        /**
         * Constructs a new SkinData.
         * @memberof roitescape
         * @classdesc Represents a SkinData.
         * @implements ISkinData
         * @constructor
         * @param {roitescape.ISkinData=} [properties] Properties to set
         */
        function SkinData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkinData id.
         * @member {number} id
         * @memberof roitescape.SkinData
         * @instance
         */
        SkinData.prototype.id = 0;

        /**
         * SkinData viewAdTimes.
         * @member {number} viewAdTimes
         * @memberof roitescape.SkinData
         * @instance
         */
        SkinData.prototype.viewAdTimes = 0;

        /**
         * SkinData isOwner.
         * @member {number} isOwner
         * @memberof roitescape.SkinData
         * @instance
         */
        SkinData.prototype.isOwner = 0;

        /**
         * SkinData playerProp.
         * @member {roitescape.IPlayerProp} playerProp
         * @memberof roitescape.SkinData
         * @instance
         */
        SkinData.prototype.playerProp = null;

        /**
         * SkinData skinChip.
         * @member {number} skinChip
         * @memberof roitescape.SkinData
         * @instance
         */
        SkinData.prototype.skinChip = 0;

        /**
         * SkinData star.
         * @member {number} star
         * @memberof roitescape.SkinData
         * @instance
         */
        SkinData.prototype.star = 0;

        /**
         * Creates a new SkinData instance using the specified properties.
         * @function create
         * @memberof roitescape.SkinData
         * @static
         * @param {roitescape.ISkinData=} [properties] Properties to set
         * @returns {roitescape.SkinData} SkinData instance
         */
        SkinData.create = function create(properties) {
            return new SkinData(properties);
        };

        /**
         * Encodes the specified SkinData message. Does not implicitly {@link roitescape.SkinData.verify|verify} messages.
         * @function encode
         * @memberof roitescape.SkinData
         * @static
         * @param {roitescape.ISkinData} message SkinData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkinData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.viewAdTimes);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.isOwner);
            $root.roitescape.PlayerProp.encode(message.playerProp, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.skinChip != null && message.hasOwnProperty("skinChip"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.skinChip);
            if (message.star != null && message.hasOwnProperty("star"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.star);
            return writer;
        };

        /**
         * Encodes the specified SkinData message, length delimited. Does not implicitly {@link roitescape.SkinData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.SkinData
         * @static
         * @param {roitescape.ISkinData} message SkinData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkinData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkinData message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.SkinData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.SkinData} SkinData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkinData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.SkinData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.viewAdTimes = reader.uint32();
                    break;
                case 3:
                    message.isOwner = reader.uint32();
                    break;
                case 4:
                    message.playerProp = $root.roitescape.PlayerProp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.skinChip = reader.uint32();
                    break;
                case 6:
                    message.star = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("viewAdTimes"))
                throw $util.ProtocolError("missing required 'viewAdTimes'", { instance: message });
            if (!message.hasOwnProperty("isOwner"))
                throw $util.ProtocolError("missing required 'isOwner'", { instance: message });
            if (!message.hasOwnProperty("playerProp"))
                throw $util.ProtocolError("missing required 'playerProp'", { instance: message });
            return message;
        };

        /**
         * Decodes a SkinData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.SkinData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.SkinData} SkinData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkinData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkinData message.
         * @function verify
         * @memberof roitescape.SkinData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkinData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.viewAdTimes))
                return "viewAdTimes: integer expected";
            if (!$util.isInteger(message.isOwner))
                return "isOwner: integer expected";
            {
                var error = $root.roitescape.PlayerProp.verify(message.playerProp);
                if (error)
                    return "playerProp." + error;
            }
            if (message.skinChip != null && message.hasOwnProperty("skinChip"))
                if (!$util.isInteger(message.skinChip))
                    return "skinChip: integer expected";
            if (message.star != null && message.hasOwnProperty("star"))
                if (!$util.isInteger(message.star))
                    return "star: integer expected";
            return null;
        };

        /**
         * Creates a SkinData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.SkinData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.SkinData} SkinData
         */
        SkinData.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.SkinData)
                return object;
            var message = new $root.roitescape.SkinData();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.viewAdTimes != null)
                message.viewAdTimes = object.viewAdTimes >>> 0;
            if (object.isOwner != null)
                message.isOwner = object.isOwner >>> 0;
            if (object.playerProp != null) {
                if (typeof object.playerProp !== "object")
                    throw TypeError(".roitescape.SkinData.playerProp: object expected");
                message.playerProp = $root.roitescape.PlayerProp.fromObject(object.playerProp);
            }
            if (object.skinChip != null)
                message.skinChip = object.skinChip >>> 0;
            if (object.star != null)
                message.star = object.star >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SkinData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.SkinData
         * @static
         * @param {roitescape.SkinData} message SkinData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkinData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.viewAdTimes = 0;
                object.isOwner = 0;
                object.playerProp = null;
                object.skinChip = 0;
                object.star = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.viewAdTimes != null && message.hasOwnProperty("viewAdTimes"))
                object.viewAdTimes = message.viewAdTimes;
            if (message.isOwner != null && message.hasOwnProperty("isOwner"))
                object.isOwner = message.isOwner;
            if (message.playerProp != null && message.hasOwnProperty("playerProp"))
                object.playerProp = $root.roitescape.PlayerProp.toObject(message.playerProp, options);
            if (message.skinChip != null && message.hasOwnProperty("skinChip"))
                object.skinChip = message.skinChip;
            if (message.star != null && message.hasOwnProperty("star"))
                object.star = message.star;
            return object;
        };

        /**
         * Converts this SkinData to JSON.
         * @function toJSON
         * @memberof roitescape.SkinData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkinData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SkinData;
    })();

    roitescape.LevelData = (function() {

        /**
         * Properties of a LevelData.
         * @memberof roitescape
         * @interface ILevelData
         * @property {number} id LevelData id
         * @property {number} playTimes LevelData playTimes
         * @property {number} passTimes LevelData passTimes
         * @property {number} failTimes LevelData failTimes
         * @property {number} activeExitTimes LevelData activeExitTimes
         * @property {number} rebornTimes LevelData rebornTimes
         */

        /**
         * Constructs a new LevelData.
         * @memberof roitescape
         * @classdesc Represents a LevelData.
         * @implements ILevelData
         * @constructor
         * @param {roitescape.ILevelData=} [properties] Properties to set
         */
        function LevelData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LevelData id.
         * @member {number} id
         * @memberof roitescape.LevelData
         * @instance
         */
        LevelData.prototype.id = 0;

        /**
         * LevelData playTimes.
         * @member {number} playTimes
         * @memberof roitescape.LevelData
         * @instance
         */
        LevelData.prototype.playTimes = 0;

        /**
         * LevelData passTimes.
         * @member {number} passTimes
         * @memberof roitescape.LevelData
         * @instance
         */
        LevelData.prototype.passTimes = 0;

        /**
         * LevelData failTimes.
         * @member {number} failTimes
         * @memberof roitescape.LevelData
         * @instance
         */
        LevelData.prototype.failTimes = 0;

        /**
         * LevelData activeExitTimes.
         * @member {number} activeExitTimes
         * @memberof roitescape.LevelData
         * @instance
         */
        LevelData.prototype.activeExitTimes = 0;

        /**
         * LevelData rebornTimes.
         * @member {number} rebornTimes
         * @memberof roitescape.LevelData
         * @instance
         */
        LevelData.prototype.rebornTimes = 0;

        /**
         * Creates a new LevelData instance using the specified properties.
         * @function create
         * @memberof roitescape.LevelData
         * @static
         * @param {roitescape.ILevelData=} [properties] Properties to set
         * @returns {roitescape.LevelData} LevelData instance
         */
        LevelData.create = function create(properties) {
            return new LevelData(properties);
        };

        /**
         * Encodes the specified LevelData message. Does not implicitly {@link roitescape.LevelData.verify|verify} messages.
         * @function encode
         * @memberof roitescape.LevelData
         * @static
         * @param {roitescape.ILevelData} message LevelData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LevelData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.playTimes);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.passTimes);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.failTimes);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.activeExitTimes);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.rebornTimes);
            return writer;
        };

        /**
         * Encodes the specified LevelData message, length delimited. Does not implicitly {@link roitescape.LevelData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.LevelData
         * @static
         * @param {roitescape.ILevelData} message LevelData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LevelData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LevelData message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.LevelData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.LevelData} LevelData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LevelData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.LevelData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.playTimes = reader.uint32();
                    break;
                case 3:
                    message.passTimes = reader.uint32();
                    break;
                case 4:
                    message.failTimes = reader.uint32();
                    break;
                case 5:
                    message.activeExitTimes = reader.uint32();
                    break;
                case 6:
                    message.rebornTimes = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("playTimes"))
                throw $util.ProtocolError("missing required 'playTimes'", { instance: message });
            if (!message.hasOwnProperty("passTimes"))
                throw $util.ProtocolError("missing required 'passTimes'", { instance: message });
            if (!message.hasOwnProperty("failTimes"))
                throw $util.ProtocolError("missing required 'failTimes'", { instance: message });
            if (!message.hasOwnProperty("activeExitTimes"))
                throw $util.ProtocolError("missing required 'activeExitTimes'", { instance: message });
            if (!message.hasOwnProperty("rebornTimes"))
                throw $util.ProtocolError("missing required 'rebornTimes'", { instance: message });
            return message;
        };

        /**
         * Decodes a LevelData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.LevelData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.LevelData} LevelData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LevelData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LevelData message.
         * @function verify
         * @memberof roitescape.LevelData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LevelData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.playTimes))
                return "playTimes: integer expected";
            if (!$util.isInteger(message.passTimes))
                return "passTimes: integer expected";
            if (!$util.isInteger(message.failTimes))
                return "failTimes: integer expected";
            if (!$util.isInteger(message.activeExitTimes))
                return "activeExitTimes: integer expected";
            if (!$util.isInteger(message.rebornTimes))
                return "rebornTimes: integer expected";
            return null;
        };

        /**
         * Creates a LevelData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.LevelData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.LevelData} LevelData
         */
        LevelData.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.LevelData)
                return object;
            var message = new $root.roitescape.LevelData();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.playTimes != null)
                message.playTimes = object.playTimes >>> 0;
            if (object.passTimes != null)
                message.passTimes = object.passTimes >>> 0;
            if (object.failTimes != null)
                message.failTimes = object.failTimes >>> 0;
            if (object.activeExitTimes != null)
                message.activeExitTimes = object.activeExitTimes >>> 0;
            if (object.rebornTimes != null)
                message.rebornTimes = object.rebornTimes >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LevelData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.LevelData
         * @static
         * @param {roitescape.LevelData} message LevelData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LevelData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.playTimes = 0;
                object.passTimes = 0;
                object.failTimes = 0;
                object.activeExitTimes = 0;
                object.rebornTimes = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.playTimes != null && message.hasOwnProperty("playTimes"))
                object.playTimes = message.playTimes;
            if (message.passTimes != null && message.hasOwnProperty("passTimes"))
                object.passTimes = message.passTimes;
            if (message.failTimes != null && message.hasOwnProperty("failTimes"))
                object.failTimes = message.failTimes;
            if (message.activeExitTimes != null && message.hasOwnProperty("activeExitTimes"))
                object.activeExitTimes = message.activeExitTimes;
            if (message.rebornTimes != null && message.hasOwnProperty("rebornTimes"))
                object.rebornTimes = message.rebornTimes;
            return object;
        };

        /**
         * Converts this LevelData to JSON.
         * @function toJSON
         * @memberof roitescape.LevelData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LevelData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LevelData;
    })();

    roitescape.Teach = (function() {

        /**
         * Properties of a Teach.
         * @memberof roitescape
         * @interface ITeach
         * @property {number} id Teach id
         * @property {number} isForce Teach isForce
         * @property {number} isMask Teach isMask
         * @property {number} isFinger Teach isFinger
         * @property {string} tips Teach tips
         * @property {string} btnKey Teach btnKey
         * @property {number} enableClick Teach enableClick
         * @property {number} nextId Teach nextId
         * @property {string} tipsPos Teach tipsPos
         * @property {number} fingerRot Teach fingerRot
         * @property {string} fingerOffect Teach fingerOffect
         * @property {number} clickMaskToNext Teach clickMaskToNext
         * @property {number} isPause Teach isPause
         * @property {number} needTipsBg Teach needTipsBg
         * @property {number} clickHintMask Teach clickHintMask
         * @property {string} otherKey Teach otherKey
         * @property {number} bgForward Teach bgForward
         */

        /**
         * Constructs a new Teach.
         * @memberof roitescape
         * @classdesc Represents a Teach.
         * @implements ITeach
         * @constructor
         * @param {roitescape.ITeach=} [properties] Properties to set
         */
        function Teach(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Teach id.
         * @member {number} id
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.id = 0;

        /**
         * Teach isForce.
         * @member {number} isForce
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.isForce = 0;

        /**
         * Teach isMask.
         * @member {number} isMask
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.isMask = 0;

        /**
         * Teach isFinger.
         * @member {number} isFinger
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.isFinger = 0;

        /**
         * Teach tips.
         * @member {string} tips
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.tips = "";

        /**
         * Teach btnKey.
         * @member {string} btnKey
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.btnKey = "";

        /**
         * Teach enableClick.
         * @member {number} enableClick
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.enableClick = 0;

        /**
         * Teach nextId.
         * @member {number} nextId
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.nextId = 0;

        /**
         * Teach tipsPos.
         * @member {string} tipsPos
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.tipsPos = "";

        /**
         * Teach fingerRot.
         * @member {number} fingerRot
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.fingerRot = 0;

        /**
         * Teach fingerOffect.
         * @member {string} fingerOffect
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.fingerOffect = "";

        /**
         * Teach clickMaskToNext.
         * @member {number} clickMaskToNext
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.clickMaskToNext = 0;

        /**
         * Teach isPause.
         * @member {number} isPause
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.isPause = 0;

        /**
         * Teach needTipsBg.
         * @member {number} needTipsBg
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.needTipsBg = 0;

        /**
         * Teach clickHintMask.
         * @member {number} clickHintMask
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.clickHintMask = 0;

        /**
         * Teach otherKey.
         * @member {string} otherKey
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.otherKey = "";

        /**
         * Teach bgForward.
         * @member {number} bgForward
         * @memberof roitescape.Teach
         * @instance
         */
        Teach.prototype.bgForward = 0;

        /**
         * Creates a new Teach instance using the specified properties.
         * @function create
         * @memberof roitescape.Teach
         * @static
         * @param {roitescape.ITeach=} [properties] Properties to set
         * @returns {roitescape.Teach} Teach instance
         */
        Teach.create = function create(properties) {
            return new Teach(properties);
        };

        /**
         * Encodes the specified Teach message. Does not implicitly {@link roitescape.Teach.verify|verify} messages.
         * @function encode
         * @memberof roitescape.Teach
         * @static
         * @param {roitescape.ITeach} message Teach message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Teach.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.isForce);
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.isMask);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.isFinger);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.tips);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.btnKey);
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.enableClick);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.nextId);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.tipsPos);
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.fingerRot);
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.fingerOffect);
            writer.uint32(/* id 12, wireType 0 =*/96).uint32(message.clickMaskToNext);
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.isPause);
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.needTipsBg);
            writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.clickHintMask);
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.otherKey);
            writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.bgForward);
            return writer;
        };

        /**
         * Encodes the specified Teach message, length delimited. Does not implicitly {@link roitescape.Teach.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.Teach
         * @static
         * @param {roitescape.ITeach} message Teach message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Teach.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Teach message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.Teach
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.Teach} Teach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Teach.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.Teach();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.isForce = reader.uint32();
                    break;
                case 3:
                    message.isMask = reader.uint32();
                    break;
                case 4:
                    message.isFinger = reader.uint32();
                    break;
                case 5:
                    message.tips = reader.string();
                    break;
                case 6:
                    message.btnKey = reader.string();
                    break;
                case 7:
                    message.enableClick = reader.uint32();
                    break;
                case 8:
                    message.nextId = reader.int32();
                    break;
                case 9:
                    message.tipsPos = reader.string();
                    break;
                case 10:
                    message.fingerRot = reader.uint32();
                    break;
                case 11:
                    message.fingerOffect = reader.string();
                    break;
                case 12:
                    message.clickMaskToNext = reader.uint32();
                    break;
                case 13:
                    message.isPause = reader.uint32();
                    break;
                case 14:
                    message.needTipsBg = reader.uint32();
                    break;
                case 15:
                    message.clickHintMask = reader.uint32();
                    break;
                case 16:
                    message.otherKey = reader.string();
                    break;
                case 17:
                    message.bgForward = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("isForce"))
                throw $util.ProtocolError("missing required 'isForce'", { instance: message });
            if (!message.hasOwnProperty("isMask"))
                throw $util.ProtocolError("missing required 'isMask'", { instance: message });
            if (!message.hasOwnProperty("isFinger"))
                throw $util.ProtocolError("missing required 'isFinger'", { instance: message });
            if (!message.hasOwnProperty("tips"))
                throw $util.ProtocolError("missing required 'tips'", { instance: message });
            if (!message.hasOwnProperty("btnKey"))
                throw $util.ProtocolError("missing required 'btnKey'", { instance: message });
            if (!message.hasOwnProperty("enableClick"))
                throw $util.ProtocolError("missing required 'enableClick'", { instance: message });
            if (!message.hasOwnProperty("nextId"))
                throw $util.ProtocolError("missing required 'nextId'", { instance: message });
            if (!message.hasOwnProperty("tipsPos"))
                throw $util.ProtocolError("missing required 'tipsPos'", { instance: message });
            if (!message.hasOwnProperty("fingerRot"))
                throw $util.ProtocolError("missing required 'fingerRot'", { instance: message });
            if (!message.hasOwnProperty("fingerOffect"))
                throw $util.ProtocolError("missing required 'fingerOffect'", { instance: message });
            if (!message.hasOwnProperty("clickMaskToNext"))
                throw $util.ProtocolError("missing required 'clickMaskToNext'", { instance: message });
            if (!message.hasOwnProperty("isPause"))
                throw $util.ProtocolError("missing required 'isPause'", { instance: message });
            if (!message.hasOwnProperty("needTipsBg"))
                throw $util.ProtocolError("missing required 'needTipsBg'", { instance: message });
            if (!message.hasOwnProperty("clickHintMask"))
                throw $util.ProtocolError("missing required 'clickHintMask'", { instance: message });
            if (!message.hasOwnProperty("otherKey"))
                throw $util.ProtocolError("missing required 'otherKey'", { instance: message });
            if (!message.hasOwnProperty("bgForward"))
                throw $util.ProtocolError("missing required 'bgForward'", { instance: message });
            return message;
        };

        /**
         * Decodes a Teach message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.Teach
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.Teach} Teach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Teach.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Teach message.
         * @function verify
         * @memberof roitescape.Teach
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Teach.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.isForce))
                return "isForce: integer expected";
            if (!$util.isInteger(message.isMask))
                return "isMask: integer expected";
            if (!$util.isInteger(message.isFinger))
                return "isFinger: integer expected";
            if (!$util.isString(message.tips))
                return "tips: string expected";
            if (!$util.isString(message.btnKey))
                return "btnKey: string expected";
            if (!$util.isInteger(message.enableClick))
                return "enableClick: integer expected";
            if (!$util.isInteger(message.nextId))
                return "nextId: integer expected";
            if (!$util.isString(message.tipsPos))
                return "tipsPos: string expected";
            if (!$util.isInteger(message.fingerRot))
                return "fingerRot: integer expected";
            if (!$util.isString(message.fingerOffect))
                return "fingerOffect: string expected";
            if (!$util.isInteger(message.clickMaskToNext))
                return "clickMaskToNext: integer expected";
            if (!$util.isInteger(message.isPause))
                return "isPause: integer expected";
            if (!$util.isInteger(message.needTipsBg))
                return "needTipsBg: integer expected";
            if (!$util.isInteger(message.clickHintMask))
                return "clickHintMask: integer expected";
            if (!$util.isString(message.otherKey))
                return "otherKey: string expected";
            if (!$util.isInteger(message.bgForward))
                return "bgForward: integer expected";
            return null;
        };

        /**
         * Creates a Teach message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.Teach
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.Teach} Teach
         */
        Teach.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.Teach)
                return object;
            var message = new $root.roitescape.Teach();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.isForce != null)
                message.isForce = object.isForce >>> 0;
            if (object.isMask != null)
                message.isMask = object.isMask >>> 0;
            if (object.isFinger != null)
                message.isFinger = object.isFinger >>> 0;
            if (object.tips != null)
                message.tips = String(object.tips);
            if (object.btnKey != null)
                message.btnKey = String(object.btnKey);
            if (object.enableClick != null)
                message.enableClick = object.enableClick >>> 0;
            if (object.nextId != null)
                message.nextId = object.nextId | 0;
            if (object.tipsPos != null)
                message.tipsPos = String(object.tipsPos);
            if (object.fingerRot != null)
                message.fingerRot = object.fingerRot >>> 0;
            if (object.fingerOffect != null)
                message.fingerOffect = String(object.fingerOffect);
            if (object.clickMaskToNext != null)
                message.clickMaskToNext = object.clickMaskToNext >>> 0;
            if (object.isPause != null)
                message.isPause = object.isPause >>> 0;
            if (object.needTipsBg != null)
                message.needTipsBg = object.needTipsBg >>> 0;
            if (object.clickHintMask != null)
                message.clickHintMask = object.clickHintMask >>> 0;
            if (object.otherKey != null)
                message.otherKey = String(object.otherKey);
            if (object.bgForward != null)
                message.bgForward = object.bgForward >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Teach message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.Teach
         * @static
         * @param {roitescape.Teach} message Teach
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Teach.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.isForce = 0;
                object.isMask = 0;
                object.isFinger = 0;
                object.tips = "";
                object.btnKey = "";
                object.enableClick = 0;
                object.nextId = 0;
                object.tipsPos = "";
                object.fingerRot = 0;
                object.fingerOffect = "";
                object.clickMaskToNext = 0;
                object.isPause = 0;
                object.needTipsBg = 0;
                object.clickHintMask = 0;
                object.otherKey = "";
                object.bgForward = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.isForce != null && message.hasOwnProperty("isForce"))
                object.isForce = message.isForce;
            if (message.isMask != null && message.hasOwnProperty("isMask"))
                object.isMask = message.isMask;
            if (message.isFinger != null && message.hasOwnProperty("isFinger"))
                object.isFinger = message.isFinger;
            if (message.tips != null && message.hasOwnProperty("tips"))
                object.tips = message.tips;
            if (message.btnKey != null && message.hasOwnProperty("btnKey"))
                object.btnKey = message.btnKey;
            if (message.enableClick != null && message.hasOwnProperty("enableClick"))
                object.enableClick = message.enableClick;
            if (message.nextId != null && message.hasOwnProperty("nextId"))
                object.nextId = message.nextId;
            if (message.tipsPos != null && message.hasOwnProperty("tipsPos"))
                object.tipsPos = message.tipsPos;
            if (message.fingerRot != null && message.hasOwnProperty("fingerRot"))
                object.fingerRot = message.fingerRot;
            if (message.fingerOffect != null && message.hasOwnProperty("fingerOffect"))
                object.fingerOffect = message.fingerOffect;
            if (message.clickMaskToNext != null && message.hasOwnProperty("clickMaskToNext"))
                object.clickMaskToNext = message.clickMaskToNext;
            if (message.isPause != null && message.hasOwnProperty("isPause"))
                object.isPause = message.isPause;
            if (message.needTipsBg != null && message.hasOwnProperty("needTipsBg"))
                object.needTipsBg = message.needTipsBg;
            if (message.clickHintMask != null && message.hasOwnProperty("clickHintMask"))
                object.clickHintMask = message.clickHintMask;
            if (message.otherKey != null && message.hasOwnProperty("otherKey"))
                object.otherKey = message.otherKey;
            if (message.bgForward != null && message.hasOwnProperty("bgForward"))
                object.bgForward = message.bgForward;
            return object;
        };

        /**
         * Converts this Teach to JSON.
         * @function toJSON
         * @memberof roitescape.Teach
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Teach.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Teach;
    })();

    roitescape.TBTeach = (function() {

        /**
         * Properties of a TBTeach.
         * @memberof roitescape
         * @interface ITBTeach
         * @property {Array.<roitescape.ITeach>|null} [list] TBTeach list
         */

        /**
         * Constructs a new TBTeach.
         * @memberof roitescape
         * @classdesc Represents a TBTeach.
         * @implements ITBTeach
         * @constructor
         * @param {roitescape.ITBTeach=} [properties] Properties to set
         */
        function TBTeach(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBTeach list.
         * @member {Array.<roitescape.ITeach>} list
         * @memberof roitescape.TBTeach
         * @instance
         */
        TBTeach.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBTeach instance using the specified properties.
         * @function create
         * @memberof roitescape.TBTeach
         * @static
         * @param {roitescape.ITBTeach=} [properties] Properties to set
         * @returns {roitescape.TBTeach} TBTeach instance
         */
        TBTeach.create = function create(properties) {
            return new TBTeach(properties);
        };

        /**
         * Encodes the specified TBTeach message. Does not implicitly {@link roitescape.TBTeach.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBTeach
         * @static
         * @param {roitescape.ITBTeach} message TBTeach message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBTeach.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.Teach.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBTeach message, length delimited. Does not implicitly {@link roitescape.TBTeach.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBTeach
         * @static
         * @param {roitescape.ITBTeach} message TBTeach message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBTeach.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBTeach message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBTeach
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBTeach} TBTeach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBTeach.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBTeach();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.Teach.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBTeach message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBTeach
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBTeach} TBTeach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBTeach.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBTeach message.
         * @function verify
         * @memberof roitescape.TBTeach
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBTeach.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.Teach.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBTeach message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBTeach
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBTeach} TBTeach
         */
        TBTeach.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBTeach)
                return object;
            var message = new $root.roitescape.TBTeach();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBTeach.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBTeach.list: object expected");
                    message.list[i] = $root.roitescape.Teach.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBTeach message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBTeach
         * @static
         * @param {roitescape.TBTeach} message TBTeach
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBTeach.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.Teach.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBTeach to JSON.
         * @function toJSON
         * @memberof roitescape.TBTeach
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBTeach.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBTeach;
    })();

    roitescape.TaskData = (function() {

        /**
         * Properties of a TaskData.
         * @memberof roitescape
         * @interface ITaskData
         * @property {number} id TaskData id
         * @property {number} state TaskData state
         * @property {number} task TaskData task
         * @property {number} killCount TaskData killCount
         * @property {number} taskTime TaskData taskTime
         */

        /**
         * Constructs a new TaskData.
         * @memberof roitescape
         * @classdesc Represents a TaskData.
         * @implements ITaskData
         * @constructor
         * @param {roitescape.ITaskData=} [properties] Properties to set
         */
        function TaskData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TaskData id.
         * @member {number} id
         * @memberof roitescape.TaskData
         * @instance
         */
        TaskData.prototype.id = 0;

        /**
         * TaskData state.
         * @member {number} state
         * @memberof roitescape.TaskData
         * @instance
         */
        TaskData.prototype.state = 0;

        /**
         * TaskData task.
         * @member {number} task
         * @memberof roitescape.TaskData
         * @instance
         */
        TaskData.prototype.task = 0;

        /**
         * TaskData killCount.
         * @member {number} killCount
         * @memberof roitescape.TaskData
         * @instance
         */
        TaskData.prototype.killCount = 0;

        /**
         * TaskData taskTime.
         * @member {number} taskTime
         * @memberof roitescape.TaskData
         * @instance
         */
        TaskData.prototype.taskTime = 0;

        /**
         * Creates a new TaskData instance using the specified properties.
         * @function create
         * @memberof roitescape.TaskData
         * @static
         * @param {roitescape.ITaskData=} [properties] Properties to set
         * @returns {roitescape.TaskData} TaskData instance
         */
        TaskData.create = function create(properties) {
            return new TaskData(properties);
        };

        /**
         * Encodes the specified TaskData message. Does not implicitly {@link roitescape.TaskData.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TaskData
         * @static
         * @param {roitescape.ITaskData} message TaskData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.state);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.task);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.killCount);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.taskTime);
            return writer;
        };

        /**
         * Encodes the specified TaskData message, length delimited. Does not implicitly {@link roitescape.TaskData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TaskData
         * @static
         * @param {roitescape.ITaskData} message TaskData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TaskData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TaskData message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TaskData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TaskData} TaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TaskData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.state = reader.uint32();
                    break;
                case 3:
                    message.task = reader.int32();
                    break;
                case 4:
                    message.killCount = reader.int32();
                    break;
                case 5:
                    message.taskTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("state"))
                throw $util.ProtocolError("missing required 'state'", { instance: message });
            if (!message.hasOwnProperty("task"))
                throw $util.ProtocolError("missing required 'task'", { instance: message });
            if (!message.hasOwnProperty("killCount"))
                throw $util.ProtocolError("missing required 'killCount'", { instance: message });
            if (!message.hasOwnProperty("taskTime"))
                throw $util.ProtocolError("missing required 'taskTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a TaskData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TaskData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TaskData} TaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TaskData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TaskData message.
         * @function verify
         * @memberof roitescape.TaskData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TaskData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.state))
                return "state: integer expected";
            if (!$util.isInteger(message.task))
                return "task: integer expected";
            if (!$util.isInteger(message.killCount))
                return "killCount: integer expected";
            if (!$util.isInteger(message.taskTime))
                return "taskTime: integer expected";
            return null;
        };

        /**
         * Creates a TaskData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TaskData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TaskData} TaskData
         */
        TaskData.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TaskData)
                return object;
            var message = new $root.roitescape.TaskData();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.state != null)
                message.state = object.state >>> 0;
            if (object.task != null)
                message.task = object.task | 0;
            if (object.killCount != null)
                message.killCount = object.killCount | 0;
            if (object.taskTime != null)
                message.taskTime = object.taskTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a TaskData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TaskData
         * @static
         * @param {roitescape.TaskData} message TaskData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TaskData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.state = 0;
                object.task = 0;
                object.killCount = 0;
                object.taskTime = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            if (message.task != null && message.hasOwnProperty("task"))
                object.task = message.task;
            if (message.killCount != null && message.hasOwnProperty("killCount"))
                object.killCount = message.killCount;
            if (message.taskTime != null && message.hasOwnProperty("taskTime"))
                object.taskTime = message.taskTime;
            return object;
        };

        /**
         * Converts this TaskData to JSON.
         * @function toJSON
         * @memberof roitescape.TaskData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TaskData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TaskData;
    })();

    roitescape.DailyTask = (function() {

        /**
         * Properties of a DailyTask.
         * @memberof roitescape
         * @interface IDailyTask
         * @property {number} id DailyTask id
         * @property {string} taskName DailyTask taskName
         * @property {string} taskDecs DailyTask taskDecs
         * @property {number} para1 DailyTask para1
         * @property {string} para2 DailyTask para2
         * @property {string} taskReward DailyTask taskReward
         * @property {number} taskTime DailyTask taskTime
         * @property {string} nextTask DailyTask nextTask
         */

        /**
         * Constructs a new DailyTask.
         * @memberof roitescape
         * @classdesc Represents a DailyTask.
         * @implements IDailyTask
         * @constructor
         * @param {roitescape.IDailyTask=} [properties] Properties to set
         */
        function DailyTask(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailyTask id.
         * @member {number} id
         * @memberof roitescape.DailyTask
         * @instance
         */
        DailyTask.prototype.id = 0;

        /**
         * DailyTask taskName.
         * @member {string} taskName
         * @memberof roitescape.DailyTask
         * @instance
         */
        DailyTask.prototype.taskName = "";

        /**
         * DailyTask taskDecs.
         * @member {string} taskDecs
         * @memberof roitescape.DailyTask
         * @instance
         */
        DailyTask.prototype.taskDecs = "";

        /**
         * DailyTask para1.
         * @member {number} para1
         * @memberof roitescape.DailyTask
         * @instance
         */
        DailyTask.prototype.para1 = 0;

        /**
         * DailyTask para2.
         * @member {string} para2
         * @memberof roitescape.DailyTask
         * @instance
         */
        DailyTask.prototype.para2 = "";

        /**
         * DailyTask taskReward.
         * @member {string} taskReward
         * @memberof roitescape.DailyTask
         * @instance
         */
        DailyTask.prototype.taskReward = "";

        /**
         * DailyTask taskTime.
         * @member {number} taskTime
         * @memberof roitescape.DailyTask
         * @instance
         */
        DailyTask.prototype.taskTime = 0;

        /**
         * DailyTask nextTask.
         * @member {string} nextTask
         * @memberof roitescape.DailyTask
         * @instance
         */
        DailyTask.prototype.nextTask = "";

        /**
         * Creates a new DailyTask instance using the specified properties.
         * @function create
         * @memberof roitescape.DailyTask
         * @static
         * @param {roitescape.IDailyTask=} [properties] Properties to set
         * @returns {roitescape.DailyTask} DailyTask instance
         */
        DailyTask.create = function create(properties) {
            return new DailyTask(properties);
        };

        /**
         * Encodes the specified DailyTask message. Does not implicitly {@link roitescape.DailyTask.verify|verify} messages.
         * @function encode
         * @memberof roitescape.DailyTask
         * @static
         * @param {roitescape.IDailyTask} message DailyTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailyTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.taskName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.taskDecs);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.para1);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.para2);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.taskReward);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.taskTime);
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.nextTask);
            return writer;
        };

        /**
         * Encodes the specified DailyTask message, length delimited. Does not implicitly {@link roitescape.DailyTask.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.DailyTask
         * @static
         * @param {roitescape.IDailyTask} message DailyTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailyTask.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailyTask message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.DailyTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.DailyTask} DailyTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailyTask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.DailyTask();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.taskName = reader.string();
                    break;
                case 3:
                    message.taskDecs = reader.string();
                    break;
                case 4:
                    message.para1 = reader.int32();
                    break;
                case 5:
                    message.para2 = reader.string();
                    break;
                case 6:
                    message.taskReward = reader.string();
                    break;
                case 7:
                    message.taskTime = reader.int32();
                    break;
                case 8:
                    message.nextTask = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("taskName"))
                throw $util.ProtocolError("missing required 'taskName'", { instance: message });
            if (!message.hasOwnProperty("taskDecs"))
                throw $util.ProtocolError("missing required 'taskDecs'", { instance: message });
            if (!message.hasOwnProperty("para1"))
                throw $util.ProtocolError("missing required 'para1'", { instance: message });
            if (!message.hasOwnProperty("para2"))
                throw $util.ProtocolError("missing required 'para2'", { instance: message });
            if (!message.hasOwnProperty("taskReward"))
                throw $util.ProtocolError("missing required 'taskReward'", { instance: message });
            if (!message.hasOwnProperty("taskTime"))
                throw $util.ProtocolError("missing required 'taskTime'", { instance: message });
            if (!message.hasOwnProperty("nextTask"))
                throw $util.ProtocolError("missing required 'nextTask'", { instance: message });
            return message;
        };

        /**
         * Decodes a DailyTask message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.DailyTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.DailyTask} DailyTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailyTask.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailyTask message.
         * @function verify
         * @memberof roitescape.DailyTask
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailyTask.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.taskName))
                return "taskName: string expected";
            if (!$util.isString(message.taskDecs))
                return "taskDecs: string expected";
            if (!$util.isInteger(message.para1))
                return "para1: integer expected";
            if (!$util.isString(message.para2))
                return "para2: string expected";
            if (!$util.isString(message.taskReward))
                return "taskReward: string expected";
            if (!$util.isInteger(message.taskTime))
                return "taskTime: integer expected";
            if (!$util.isString(message.nextTask))
                return "nextTask: string expected";
            return null;
        };

        /**
         * Creates a DailyTask message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.DailyTask
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.DailyTask} DailyTask
         */
        DailyTask.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.DailyTask)
                return object;
            var message = new $root.roitescape.DailyTask();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.taskName != null)
                message.taskName = String(object.taskName);
            if (object.taskDecs != null)
                message.taskDecs = String(object.taskDecs);
            if (object.para1 != null)
                message.para1 = object.para1 | 0;
            if (object.para2 != null)
                message.para2 = String(object.para2);
            if (object.taskReward != null)
                message.taskReward = String(object.taskReward);
            if (object.taskTime != null)
                message.taskTime = object.taskTime | 0;
            if (object.nextTask != null)
                message.nextTask = String(object.nextTask);
            return message;
        };

        /**
         * Creates a plain object from a DailyTask message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.DailyTask
         * @static
         * @param {roitescape.DailyTask} message DailyTask
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailyTask.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.taskName = "";
                object.taskDecs = "";
                object.para1 = 0;
                object.para2 = "";
                object.taskReward = "";
                object.taskTime = 0;
                object.nextTask = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.taskName != null && message.hasOwnProperty("taskName"))
                object.taskName = message.taskName;
            if (message.taskDecs != null && message.hasOwnProperty("taskDecs"))
                object.taskDecs = message.taskDecs;
            if (message.para1 != null && message.hasOwnProperty("para1"))
                object.para1 = message.para1;
            if (message.para2 != null && message.hasOwnProperty("para2"))
                object.para2 = message.para2;
            if (message.taskReward != null && message.hasOwnProperty("taskReward"))
                object.taskReward = message.taskReward;
            if (message.taskTime != null && message.hasOwnProperty("taskTime"))
                object.taskTime = message.taskTime;
            if (message.nextTask != null && message.hasOwnProperty("nextTask"))
                object.nextTask = message.nextTask;
            return object;
        };

        /**
         * Converts this DailyTask to JSON.
         * @function toJSON
         * @memberof roitescape.DailyTask
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailyTask.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DailyTask;
    })();

    roitescape.TBDailyTask = (function() {

        /**
         * Properties of a TBDailyTask.
         * @memberof roitescape
         * @interface ITBDailyTask
         * @property {Array.<roitescape.IDailyTask>|null} [list] TBDailyTask list
         */

        /**
         * Constructs a new TBDailyTask.
         * @memberof roitescape
         * @classdesc Represents a TBDailyTask.
         * @implements ITBDailyTask
         * @constructor
         * @param {roitescape.ITBDailyTask=} [properties] Properties to set
         */
        function TBDailyTask(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBDailyTask list.
         * @member {Array.<roitescape.IDailyTask>} list
         * @memberof roitescape.TBDailyTask
         * @instance
         */
        TBDailyTask.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBDailyTask instance using the specified properties.
         * @function create
         * @memberof roitescape.TBDailyTask
         * @static
         * @param {roitescape.ITBDailyTask=} [properties] Properties to set
         * @returns {roitescape.TBDailyTask} TBDailyTask instance
         */
        TBDailyTask.create = function create(properties) {
            return new TBDailyTask(properties);
        };

        /**
         * Encodes the specified TBDailyTask message. Does not implicitly {@link roitescape.TBDailyTask.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBDailyTask
         * @static
         * @param {roitescape.ITBDailyTask} message TBDailyTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBDailyTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.DailyTask.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBDailyTask message, length delimited. Does not implicitly {@link roitescape.TBDailyTask.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBDailyTask
         * @static
         * @param {roitescape.ITBDailyTask} message TBDailyTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBDailyTask.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBDailyTask message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBDailyTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBDailyTask} TBDailyTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBDailyTask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBDailyTask();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.DailyTask.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBDailyTask message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBDailyTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBDailyTask} TBDailyTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBDailyTask.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBDailyTask message.
         * @function verify
         * @memberof roitescape.TBDailyTask
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBDailyTask.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.DailyTask.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBDailyTask message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBDailyTask
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBDailyTask} TBDailyTask
         */
        TBDailyTask.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBDailyTask)
                return object;
            var message = new $root.roitescape.TBDailyTask();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBDailyTask.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBDailyTask.list: object expected");
                    message.list[i] = $root.roitescape.DailyTask.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBDailyTask message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBDailyTask
         * @static
         * @param {roitescape.TBDailyTask} message TBDailyTask
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBDailyTask.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.DailyTask.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBDailyTask to JSON.
         * @function toJSON
         * @memberof roitescape.TBDailyTask
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBDailyTask.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBDailyTask;
    })();

    roitescape.BeeData = (function() {

        /**
         * Properties of a BeeData.
         * @memberof roitescape
         * @interface IBeeData
         * @property {number} id BeeData id
         */

        /**
         * Constructs a new BeeData.
         * @memberof roitescape
         * @classdesc Represents a BeeData.
         * @implements IBeeData
         * @constructor
         * @param {roitescape.IBeeData=} [properties] Properties to set
         */
        function BeeData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BeeData id.
         * @member {number} id
         * @memberof roitescape.BeeData
         * @instance
         */
        BeeData.prototype.id = 0;

        /**
         * Creates a new BeeData instance using the specified properties.
         * @function create
         * @memberof roitescape.BeeData
         * @static
         * @param {roitescape.IBeeData=} [properties] Properties to set
         * @returns {roitescape.BeeData} BeeData instance
         */
        BeeData.create = function create(properties) {
            return new BeeData(properties);
        };

        /**
         * Encodes the specified BeeData message. Does not implicitly {@link roitescape.BeeData.verify|verify} messages.
         * @function encode
         * @memberof roitescape.BeeData
         * @static
         * @param {roitescape.IBeeData} message BeeData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeeData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            return writer;
        };

        /**
         * Encodes the specified BeeData message, length delimited. Does not implicitly {@link roitescape.BeeData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.BeeData
         * @static
         * @param {roitescape.IBeeData} message BeeData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeeData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeeData message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.BeeData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.BeeData} BeeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeeData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.BeeData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a BeeData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.BeeData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.BeeData} BeeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeeData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeeData message.
         * @function verify
         * @memberof roitescape.BeeData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeeData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            return null;
        };

        /**
         * Creates a BeeData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.BeeData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.BeeData} BeeData
         */
        BeeData.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.BeeData)
                return object;
            var message = new $root.roitescape.BeeData();
            if (object.id != null)
                message.id = object.id >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a BeeData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.BeeData
         * @static
         * @param {roitescape.BeeData} message BeeData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeeData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this BeeData to JSON.
         * @function toJSON
         * @memberof roitescape.BeeData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeeData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeeData;
    })();

    roitescape.Bee = (function() {

        /**
         * Properties of a Bee.
         * @memberof roitescape
         * @interface IBee
         * @property {number} id Bee id
         * @property {string} model Bee model
         * @property {string} name Bee name
         * @property {string} icon Bee icon
         * @property {string} collectSpeed Bee collectSpeed
         * @property {number} collectContain Bee collectContain
         * @property {number} evoCount Bee evoCount
         * @property {number} evoId Bee evoId
         */

        /**
         * Constructs a new Bee.
         * @memberof roitescape
         * @classdesc Represents a Bee.
         * @implements IBee
         * @constructor
         * @param {roitescape.IBee=} [properties] Properties to set
         */
        function Bee(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Bee id.
         * @member {number} id
         * @memberof roitescape.Bee
         * @instance
         */
        Bee.prototype.id = 0;

        /**
         * Bee model.
         * @member {string} model
         * @memberof roitescape.Bee
         * @instance
         */
        Bee.prototype.model = "";

        /**
         * Bee name.
         * @member {string} name
         * @memberof roitescape.Bee
         * @instance
         */
        Bee.prototype.name = "";

        /**
         * Bee icon.
         * @member {string} icon
         * @memberof roitescape.Bee
         * @instance
         */
        Bee.prototype.icon = "";

        /**
         * Bee collectSpeed.
         * @member {string} collectSpeed
         * @memberof roitescape.Bee
         * @instance
         */
        Bee.prototype.collectSpeed = "";

        /**
         * Bee collectContain.
         * @member {number} collectContain
         * @memberof roitescape.Bee
         * @instance
         */
        Bee.prototype.collectContain = 0;

        /**
         * Bee evoCount.
         * @member {number} evoCount
         * @memberof roitescape.Bee
         * @instance
         */
        Bee.prototype.evoCount = 0;

        /**
         * Bee evoId.
         * @member {number} evoId
         * @memberof roitescape.Bee
         * @instance
         */
        Bee.prototype.evoId = 0;

        /**
         * Creates a new Bee instance using the specified properties.
         * @function create
         * @memberof roitescape.Bee
         * @static
         * @param {roitescape.IBee=} [properties] Properties to set
         * @returns {roitescape.Bee} Bee instance
         */
        Bee.create = function create(properties) {
            return new Bee(properties);
        };

        /**
         * Encodes the specified Bee message. Does not implicitly {@link roitescape.Bee.verify|verify} messages.
         * @function encode
         * @memberof roitescape.Bee
         * @static
         * @param {roitescape.IBee} message Bee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.model);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.collectSpeed);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.collectContain);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.evoCount);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.evoId);
            return writer;
        };

        /**
         * Encodes the specified Bee message, length delimited. Does not implicitly {@link roitescape.Bee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.Bee
         * @static
         * @param {roitescape.IBee} message Bee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Bee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Bee message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.Bee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.Bee} Bee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bee.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.Bee();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.model = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.icon = reader.string();
                    break;
                case 5:
                    message.collectSpeed = reader.string();
                    break;
                case 6:
                    message.collectContain = reader.uint32();
                    break;
                case 7:
                    message.evoCount = reader.int32();
                    break;
                case 8:
                    message.evoId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("model"))
                throw $util.ProtocolError("missing required 'model'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("icon"))
                throw $util.ProtocolError("missing required 'icon'", { instance: message });
            if (!message.hasOwnProperty("collectSpeed"))
                throw $util.ProtocolError("missing required 'collectSpeed'", { instance: message });
            if (!message.hasOwnProperty("collectContain"))
                throw $util.ProtocolError("missing required 'collectContain'", { instance: message });
            if (!message.hasOwnProperty("evoCount"))
                throw $util.ProtocolError("missing required 'evoCount'", { instance: message });
            if (!message.hasOwnProperty("evoId"))
                throw $util.ProtocolError("missing required 'evoId'", { instance: message });
            return message;
        };

        /**
         * Decodes a Bee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.Bee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.Bee} Bee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Bee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Bee message.
         * @function verify
         * @memberof roitescape.Bee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Bee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.model))
                return "model: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.icon))
                return "icon: string expected";
            if (!$util.isString(message.collectSpeed))
                return "collectSpeed: string expected";
            if (!$util.isInteger(message.collectContain))
                return "collectContain: integer expected";
            if (!$util.isInteger(message.evoCount))
                return "evoCount: integer expected";
            if (!$util.isInteger(message.evoId))
                return "evoId: integer expected";
            return null;
        };

        /**
         * Creates a Bee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.Bee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.Bee} Bee
         */
        Bee.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.Bee)
                return object;
            var message = new $root.roitescape.Bee();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.model != null)
                message.model = String(object.model);
            if (object.name != null)
                message.name = String(object.name);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.collectSpeed != null)
                message.collectSpeed = String(object.collectSpeed);
            if (object.collectContain != null)
                message.collectContain = object.collectContain >>> 0;
            if (object.evoCount != null)
                message.evoCount = object.evoCount | 0;
            if (object.evoId != null)
                message.evoId = object.evoId | 0;
            return message;
        };

        /**
         * Creates a plain object from a Bee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.Bee
         * @static
         * @param {roitescape.Bee} message Bee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Bee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.model = "";
                object.name = "";
                object.icon = "";
                object.collectSpeed = "";
                object.collectContain = 0;
                object.evoCount = 0;
                object.evoId = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.collectSpeed != null && message.hasOwnProperty("collectSpeed"))
                object.collectSpeed = message.collectSpeed;
            if (message.collectContain != null && message.hasOwnProperty("collectContain"))
                object.collectContain = message.collectContain;
            if (message.evoCount != null && message.hasOwnProperty("evoCount"))
                object.evoCount = message.evoCount;
            if (message.evoId != null && message.hasOwnProperty("evoId"))
                object.evoId = message.evoId;
            return object;
        };

        /**
         * Converts this Bee to JSON.
         * @function toJSON
         * @memberof roitescape.Bee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Bee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Bee;
    })();

    roitescape.TBBee = (function() {

        /**
         * Properties of a TBBee.
         * @memberof roitescape
         * @interface ITBBee
         * @property {Array.<roitescape.IBee>|null} [list] TBBee list
         */

        /**
         * Constructs a new TBBee.
         * @memberof roitescape
         * @classdesc Represents a TBBee.
         * @implements ITBBee
         * @constructor
         * @param {roitescape.ITBBee=} [properties] Properties to set
         */
        function TBBee(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBBee list.
         * @member {Array.<roitescape.IBee>} list
         * @memberof roitescape.TBBee
         * @instance
         */
        TBBee.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBBee instance using the specified properties.
         * @function create
         * @memberof roitescape.TBBee
         * @static
         * @param {roitescape.ITBBee=} [properties] Properties to set
         * @returns {roitescape.TBBee} TBBee instance
         */
        TBBee.create = function create(properties) {
            return new TBBee(properties);
        };

        /**
         * Encodes the specified TBBee message. Does not implicitly {@link roitescape.TBBee.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBBee
         * @static
         * @param {roitescape.ITBBee} message TBBee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBBee.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.Bee.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBBee message, length delimited. Does not implicitly {@link roitescape.TBBee.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBBee
         * @static
         * @param {roitescape.ITBBee} message TBBee message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBBee.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBBee message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBBee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBBee} TBBee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBBee.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBBee();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.Bee.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBBee message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBBee
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBBee} TBBee
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBBee.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBBee message.
         * @function verify
         * @memberof roitescape.TBBee
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBBee.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.Bee.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBBee message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBBee
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBBee} TBBee
         */
        TBBee.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBBee)
                return object;
            var message = new $root.roitescape.TBBee();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBBee.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBBee.list: object expected");
                    message.list[i] = $root.roitescape.Bee.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBBee message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBBee
         * @static
         * @param {roitescape.TBBee} message TBBee
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBBee.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.Bee.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBBee to JSON.
         * @function toJSON
         * @memberof roitescape.TBBee
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBBee.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBBee;
    })();

    roitescape.Flower = (function() {

        /**
         * Properties of a Flower.
         * @memberof roitescape
         * @interface IFlower
         * @property {number} id Flower id
         * @property {string} model Flower model
         * @property {string} name Flower name
         * @property {string} icon Flower icon
         * @property {number} hp Flower hp
         * @property {string} dropHoney Flower dropHoney
         * @property {number} honeyContain Flower honeyContain
         * @property {number} reBornTime Flower reBornTime
         */

        /**
         * Constructs a new Flower.
         * @memberof roitescape
         * @classdesc Represents a Flower.
         * @implements IFlower
         * @constructor
         * @param {roitescape.IFlower=} [properties] Properties to set
         */
        function Flower(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Flower id.
         * @member {number} id
         * @memberof roitescape.Flower
         * @instance
         */
        Flower.prototype.id = 0;

        /**
         * Flower model.
         * @member {string} model
         * @memberof roitescape.Flower
         * @instance
         */
        Flower.prototype.model = "";

        /**
         * Flower name.
         * @member {string} name
         * @memberof roitescape.Flower
         * @instance
         */
        Flower.prototype.name = "";

        /**
         * Flower icon.
         * @member {string} icon
         * @memberof roitescape.Flower
         * @instance
         */
        Flower.prototype.icon = "";

        /**
         * Flower hp.
         * @member {number} hp
         * @memberof roitescape.Flower
         * @instance
         */
        Flower.prototype.hp = 0;

        /**
         * Flower dropHoney.
         * @member {string} dropHoney
         * @memberof roitescape.Flower
         * @instance
         */
        Flower.prototype.dropHoney = "";

        /**
         * Flower honeyContain.
         * @member {number} honeyContain
         * @memberof roitescape.Flower
         * @instance
         */
        Flower.prototype.honeyContain = 0;

        /**
         * Flower reBornTime.
         * @member {number} reBornTime
         * @memberof roitescape.Flower
         * @instance
         */
        Flower.prototype.reBornTime = 0;

        /**
         * Creates a new Flower instance using the specified properties.
         * @function create
         * @memberof roitescape.Flower
         * @static
         * @param {roitescape.IFlower=} [properties] Properties to set
         * @returns {roitescape.Flower} Flower instance
         */
        Flower.create = function create(properties) {
            return new Flower(properties);
        };

        /**
         * Encodes the specified Flower message. Does not implicitly {@link roitescape.Flower.verify|verify} messages.
         * @function encode
         * @memberof roitescape.Flower
         * @static
         * @param {roitescape.IFlower} message Flower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Flower.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.model);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.icon);
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.hp);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.dropHoney);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.honeyContain);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.reBornTime);
            return writer;
        };

        /**
         * Encodes the specified Flower message, length delimited. Does not implicitly {@link roitescape.Flower.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.Flower
         * @static
         * @param {roitescape.IFlower} message Flower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Flower.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Flower message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.Flower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.Flower} Flower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Flower.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.Flower();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.model = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.icon = reader.string();
                    break;
                case 5:
                    message.hp = reader.uint32();
                    break;
                case 6:
                    message.dropHoney = reader.string();
                    break;
                case 7:
                    message.honeyContain = reader.int32();
                    break;
                case 8:
                    message.reBornTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("model"))
                throw $util.ProtocolError("missing required 'model'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("icon"))
                throw $util.ProtocolError("missing required 'icon'", { instance: message });
            if (!message.hasOwnProperty("hp"))
                throw $util.ProtocolError("missing required 'hp'", { instance: message });
            if (!message.hasOwnProperty("dropHoney"))
                throw $util.ProtocolError("missing required 'dropHoney'", { instance: message });
            if (!message.hasOwnProperty("honeyContain"))
                throw $util.ProtocolError("missing required 'honeyContain'", { instance: message });
            if (!message.hasOwnProperty("reBornTime"))
                throw $util.ProtocolError("missing required 'reBornTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a Flower message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.Flower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.Flower} Flower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Flower.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Flower message.
         * @function verify
         * @memberof roitescape.Flower
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Flower.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.model))
                return "model: string expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isString(message.icon))
                return "icon: string expected";
            if (!$util.isInteger(message.hp))
                return "hp: integer expected";
            if (!$util.isString(message.dropHoney))
                return "dropHoney: string expected";
            if (!$util.isInteger(message.honeyContain))
                return "honeyContain: integer expected";
            if (!$util.isInteger(message.reBornTime))
                return "reBornTime: integer expected";
            return null;
        };

        /**
         * Creates a Flower message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.Flower
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.Flower} Flower
         */
        Flower.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.Flower)
                return object;
            var message = new $root.roitescape.Flower();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.model != null)
                message.model = String(object.model);
            if (object.name != null)
                message.name = String(object.name);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.hp != null)
                message.hp = object.hp >>> 0;
            if (object.dropHoney != null)
                message.dropHoney = String(object.dropHoney);
            if (object.honeyContain != null)
                message.honeyContain = object.honeyContain | 0;
            if (object.reBornTime != null)
                message.reBornTime = object.reBornTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a Flower message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.Flower
         * @static
         * @param {roitescape.Flower} message Flower
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Flower.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.model = "";
                object.name = "";
                object.icon = "";
                object.hp = 0;
                object.dropHoney = "";
                object.honeyContain = 0;
                object.reBornTime = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = message.model;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.hp != null && message.hasOwnProperty("hp"))
                object.hp = message.hp;
            if (message.dropHoney != null && message.hasOwnProperty("dropHoney"))
                object.dropHoney = message.dropHoney;
            if (message.honeyContain != null && message.hasOwnProperty("honeyContain"))
                object.honeyContain = message.honeyContain;
            if (message.reBornTime != null && message.hasOwnProperty("reBornTime"))
                object.reBornTime = message.reBornTime;
            return object;
        };

        /**
         * Converts this Flower to JSON.
         * @function toJSON
         * @memberof roitescape.Flower
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Flower.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Flower;
    })();

    roitescape.TBFlower = (function() {

        /**
         * Properties of a TBFlower.
         * @memberof roitescape
         * @interface ITBFlower
         * @property {Array.<roitescape.IFlower>|null} [list] TBFlower list
         */

        /**
         * Constructs a new TBFlower.
         * @memberof roitescape
         * @classdesc Represents a TBFlower.
         * @implements ITBFlower
         * @constructor
         * @param {roitescape.ITBFlower=} [properties] Properties to set
         */
        function TBFlower(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBFlower list.
         * @member {Array.<roitescape.IFlower>} list
         * @memberof roitescape.TBFlower
         * @instance
         */
        TBFlower.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBFlower instance using the specified properties.
         * @function create
         * @memberof roitescape.TBFlower
         * @static
         * @param {roitescape.ITBFlower=} [properties] Properties to set
         * @returns {roitescape.TBFlower} TBFlower instance
         */
        TBFlower.create = function create(properties) {
            return new TBFlower(properties);
        };

        /**
         * Encodes the specified TBFlower message. Does not implicitly {@link roitescape.TBFlower.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBFlower
         * @static
         * @param {roitescape.ITBFlower} message TBFlower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBFlower.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.Flower.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBFlower message, length delimited. Does not implicitly {@link roitescape.TBFlower.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBFlower
         * @static
         * @param {roitescape.ITBFlower} message TBFlower message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBFlower.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBFlower message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBFlower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBFlower} TBFlower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBFlower.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBFlower();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.Flower.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBFlower message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBFlower
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBFlower} TBFlower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBFlower.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBFlower message.
         * @function verify
         * @memberof roitescape.TBFlower
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBFlower.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.Flower.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBFlower message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBFlower
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBFlower} TBFlower
         */
        TBFlower.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBFlower)
                return object;
            var message = new $root.roitescape.TBFlower();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBFlower.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBFlower.list: object expected");
                    message.list[i] = $root.roitescape.Flower.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBFlower message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBFlower
         * @static
         * @param {roitescape.TBFlower} message TBFlower
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBFlower.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.Flower.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBFlower to JSON.
         * @function toJSON
         * @memberof roitescape.TBFlower
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBFlower.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBFlower;
    })();

    roitescape.GrowUp = (function() {

        /**
         * Properties of a GrowUp.
         * @memberof roitescape
         * @interface IGrowUp
         * @property {number} id GrowUp id
         * @property {string} pHurt GrowUp pHurt
         * @property {string} pHurtGold GrowUp pHurtGold
         * @property {string} pCapacity GrowUp pCapacity
         * @property {string} pCapacityGold GrowUp pCapacityGold
         * @property {string} beeSpeedCut GrowUp beeSpeedCut
         * @property {string} beeSpeedCutGold GrowUp beeSpeedCutGold
         * @property {string} beeBuy GrowUp beeBuy
         * @property {string} toNextLvGold GrowUp toNextLvGold
         */

        /**
         * Constructs a new GrowUp.
         * @memberof roitescape
         * @classdesc Represents a GrowUp.
         * @implements IGrowUp
         * @constructor
         * @param {roitescape.IGrowUp=} [properties] Properties to set
         */
        function GrowUp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GrowUp id.
         * @member {number} id
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.id = 0;

        /**
         * GrowUp pHurt.
         * @member {string} pHurt
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.pHurt = "";

        /**
         * GrowUp pHurtGold.
         * @member {string} pHurtGold
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.pHurtGold = "";

        /**
         * GrowUp pCapacity.
         * @member {string} pCapacity
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.pCapacity = "";

        /**
         * GrowUp pCapacityGold.
         * @member {string} pCapacityGold
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.pCapacityGold = "";

        /**
         * GrowUp beeSpeedCut.
         * @member {string} beeSpeedCut
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.beeSpeedCut = "";

        /**
         * GrowUp beeSpeedCutGold.
         * @member {string} beeSpeedCutGold
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.beeSpeedCutGold = "";

        /**
         * GrowUp beeBuy.
         * @member {string} beeBuy
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.beeBuy = "";

        /**
         * GrowUp toNextLvGold.
         * @member {string} toNextLvGold
         * @memberof roitescape.GrowUp
         * @instance
         */
        GrowUp.prototype.toNextLvGold = "";

        /**
         * Creates a new GrowUp instance using the specified properties.
         * @function create
         * @memberof roitescape.GrowUp
         * @static
         * @param {roitescape.IGrowUp=} [properties] Properties to set
         * @returns {roitescape.GrowUp} GrowUp instance
         */
        GrowUp.create = function create(properties) {
            return new GrowUp(properties);
        };

        /**
         * Encodes the specified GrowUp message. Does not implicitly {@link roitescape.GrowUp.verify|verify} messages.
         * @function encode
         * @memberof roitescape.GrowUp
         * @static
         * @param {roitescape.IGrowUp} message GrowUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrowUp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.pHurt);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.pHurtGold);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.pCapacity);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.pCapacityGold);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.beeSpeedCut);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.beeSpeedCutGold);
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.beeBuy);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.toNextLvGold);
            return writer;
        };

        /**
         * Encodes the specified GrowUp message, length delimited. Does not implicitly {@link roitescape.GrowUp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.GrowUp
         * @static
         * @param {roitescape.IGrowUp} message GrowUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GrowUp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GrowUp message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.GrowUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.GrowUp} GrowUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrowUp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.GrowUp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.pHurt = reader.string();
                    break;
                case 3:
                    message.pHurtGold = reader.string();
                    break;
                case 4:
                    message.pCapacity = reader.string();
                    break;
                case 5:
                    message.pCapacityGold = reader.string();
                    break;
                case 6:
                    message.beeSpeedCut = reader.string();
                    break;
                case 7:
                    message.beeSpeedCutGold = reader.string();
                    break;
                case 8:
                    message.beeBuy = reader.string();
                    break;
                case 9:
                    message.toNextLvGold = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("pHurt"))
                throw $util.ProtocolError("missing required 'pHurt'", { instance: message });
            if (!message.hasOwnProperty("pHurtGold"))
                throw $util.ProtocolError("missing required 'pHurtGold'", { instance: message });
            if (!message.hasOwnProperty("pCapacity"))
                throw $util.ProtocolError("missing required 'pCapacity'", { instance: message });
            if (!message.hasOwnProperty("pCapacityGold"))
                throw $util.ProtocolError("missing required 'pCapacityGold'", { instance: message });
            if (!message.hasOwnProperty("beeSpeedCut"))
                throw $util.ProtocolError("missing required 'beeSpeedCut'", { instance: message });
            if (!message.hasOwnProperty("beeSpeedCutGold"))
                throw $util.ProtocolError("missing required 'beeSpeedCutGold'", { instance: message });
            if (!message.hasOwnProperty("beeBuy"))
                throw $util.ProtocolError("missing required 'beeBuy'", { instance: message });
            if (!message.hasOwnProperty("toNextLvGold"))
                throw $util.ProtocolError("missing required 'toNextLvGold'", { instance: message });
            return message;
        };

        /**
         * Decodes a GrowUp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.GrowUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.GrowUp} GrowUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GrowUp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GrowUp message.
         * @function verify
         * @memberof roitescape.GrowUp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GrowUp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.pHurt))
                return "pHurt: string expected";
            if (!$util.isString(message.pHurtGold))
                return "pHurtGold: string expected";
            if (!$util.isString(message.pCapacity))
                return "pCapacity: string expected";
            if (!$util.isString(message.pCapacityGold))
                return "pCapacityGold: string expected";
            if (!$util.isString(message.beeSpeedCut))
                return "beeSpeedCut: string expected";
            if (!$util.isString(message.beeSpeedCutGold))
                return "beeSpeedCutGold: string expected";
            if (!$util.isString(message.beeBuy))
                return "beeBuy: string expected";
            if (!$util.isString(message.toNextLvGold))
                return "toNextLvGold: string expected";
            return null;
        };

        /**
         * Creates a GrowUp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.GrowUp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.GrowUp} GrowUp
         */
        GrowUp.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.GrowUp)
                return object;
            var message = new $root.roitescape.GrowUp();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.pHurt != null)
                message.pHurt = String(object.pHurt);
            if (object.pHurtGold != null)
                message.pHurtGold = String(object.pHurtGold);
            if (object.pCapacity != null)
                message.pCapacity = String(object.pCapacity);
            if (object.pCapacityGold != null)
                message.pCapacityGold = String(object.pCapacityGold);
            if (object.beeSpeedCut != null)
                message.beeSpeedCut = String(object.beeSpeedCut);
            if (object.beeSpeedCutGold != null)
                message.beeSpeedCutGold = String(object.beeSpeedCutGold);
            if (object.beeBuy != null)
                message.beeBuy = String(object.beeBuy);
            if (object.toNextLvGold != null)
                message.toNextLvGold = String(object.toNextLvGold);
            return message;
        };

        /**
         * Creates a plain object from a GrowUp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.GrowUp
         * @static
         * @param {roitescape.GrowUp} message GrowUp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GrowUp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.pHurt = "";
                object.pHurtGold = "";
                object.pCapacity = "";
                object.pCapacityGold = "";
                object.beeSpeedCut = "";
                object.beeSpeedCutGold = "";
                object.beeBuy = "";
                object.toNextLvGold = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.pHurt != null && message.hasOwnProperty("pHurt"))
                object.pHurt = message.pHurt;
            if (message.pHurtGold != null && message.hasOwnProperty("pHurtGold"))
                object.pHurtGold = message.pHurtGold;
            if (message.pCapacity != null && message.hasOwnProperty("pCapacity"))
                object.pCapacity = message.pCapacity;
            if (message.pCapacityGold != null && message.hasOwnProperty("pCapacityGold"))
                object.pCapacityGold = message.pCapacityGold;
            if (message.beeSpeedCut != null && message.hasOwnProperty("beeSpeedCut"))
                object.beeSpeedCut = message.beeSpeedCut;
            if (message.beeSpeedCutGold != null && message.hasOwnProperty("beeSpeedCutGold"))
                object.beeSpeedCutGold = message.beeSpeedCutGold;
            if (message.beeBuy != null && message.hasOwnProperty("beeBuy"))
                object.beeBuy = message.beeBuy;
            if (message.toNextLvGold != null && message.hasOwnProperty("toNextLvGold"))
                object.toNextLvGold = message.toNextLvGold;
            return object;
        };

        /**
         * Converts this GrowUp to JSON.
         * @function toJSON
         * @memberof roitescape.GrowUp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GrowUp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GrowUp;
    })();

    roitescape.TBGrowUp = (function() {

        /**
         * Properties of a TBGrowUp.
         * @memberof roitescape
         * @interface ITBGrowUp
         * @property {Array.<roitescape.IGrowUp>|null} [list] TBGrowUp list
         */

        /**
         * Constructs a new TBGrowUp.
         * @memberof roitescape
         * @classdesc Represents a TBGrowUp.
         * @implements ITBGrowUp
         * @constructor
         * @param {roitescape.ITBGrowUp=} [properties] Properties to set
         */
        function TBGrowUp(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TBGrowUp list.
         * @member {Array.<roitescape.IGrowUp>} list
         * @memberof roitescape.TBGrowUp
         * @instance
         */
        TBGrowUp.prototype.list = $util.emptyArray;

        /**
         * Creates a new TBGrowUp instance using the specified properties.
         * @function create
         * @memberof roitescape.TBGrowUp
         * @static
         * @param {roitescape.ITBGrowUp=} [properties] Properties to set
         * @returns {roitescape.TBGrowUp} TBGrowUp instance
         */
        TBGrowUp.create = function create(properties) {
            return new TBGrowUp(properties);
        };

        /**
         * Encodes the specified TBGrowUp message. Does not implicitly {@link roitescape.TBGrowUp.verify|verify} messages.
         * @function encode
         * @memberof roitescape.TBGrowUp
         * @static
         * @param {roitescape.ITBGrowUp} message TBGrowUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBGrowUp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.roitescape.GrowUp.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TBGrowUp message, length delimited. Does not implicitly {@link roitescape.TBGrowUp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.TBGrowUp
         * @static
         * @param {roitescape.ITBGrowUp} message TBGrowUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TBGrowUp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TBGrowUp message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.TBGrowUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.TBGrowUp} TBGrowUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBGrowUp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.TBGrowUp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.roitescape.GrowUp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TBGrowUp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.TBGrowUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.TBGrowUp} TBGrowUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TBGrowUp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TBGrowUp message.
         * @function verify
         * @memberof roitescape.TBGrowUp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TBGrowUp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.roitescape.GrowUp.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TBGrowUp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.TBGrowUp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.TBGrowUp} TBGrowUp
         */
        TBGrowUp.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.TBGrowUp)
                return object;
            var message = new $root.roitescape.TBGrowUp();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".roitescape.TBGrowUp.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".roitescape.TBGrowUp.list: object expected");
                    message.list[i] = $root.roitescape.GrowUp.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TBGrowUp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.TBGrowUp
         * @static
         * @param {roitescape.TBGrowUp} message TBGrowUp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TBGrowUp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.roitescape.GrowUp.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this TBGrowUp to JSON.
         * @function toJSON
         * @memberof roitescape.TBGrowUp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TBGrowUp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TBGrowUp;
    })();

    roitescape.PlayerSkillData = (function() {

        /**
         * Properties of a PlayerSkillData.
         * @memberof roitescape
         * @interface IPlayerSkillData
         * @property {number|null} [id] PlayerSkillData id
         * @property {number|null} [toTime] PlayerSkillData toTime
         * @property {number|null} [count] PlayerSkillData count
         */

        /**
         * Constructs a new PlayerSkillData.
         * @memberof roitescape
         * @classdesc Represents a PlayerSkillData.
         * @implements IPlayerSkillData
         * @constructor
         * @param {roitescape.IPlayerSkillData=} [properties] Properties to set
         */
        function PlayerSkillData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerSkillData id.
         * @member {number} id
         * @memberof roitescape.PlayerSkillData
         * @instance
         */
        PlayerSkillData.prototype.id = 0;

        /**
         * PlayerSkillData toTime.
         * @member {number} toTime
         * @memberof roitescape.PlayerSkillData
         * @instance
         */
        PlayerSkillData.prototype.toTime = 0;

        /**
         * PlayerSkillData count.
         * @member {number} count
         * @memberof roitescape.PlayerSkillData
         * @instance
         */
        PlayerSkillData.prototype.count = 0;

        /**
         * Creates a new PlayerSkillData instance using the specified properties.
         * @function create
         * @memberof roitescape.PlayerSkillData
         * @static
         * @param {roitescape.IPlayerSkillData=} [properties] Properties to set
         * @returns {roitescape.PlayerSkillData} PlayerSkillData instance
         */
        PlayerSkillData.create = function create(properties) {
            return new PlayerSkillData(properties);
        };

        /**
         * Encodes the specified PlayerSkillData message. Does not implicitly {@link roitescape.PlayerSkillData.verify|verify} messages.
         * @function encode
         * @memberof roitescape.PlayerSkillData
         * @static
         * @param {roitescape.IPlayerSkillData} message PlayerSkillData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSkillData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.toTime != null && message.hasOwnProperty("toTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.toTime);
            if (message.count != null && message.hasOwnProperty("count"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified PlayerSkillData message, length delimited. Does not implicitly {@link roitescape.PlayerSkillData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.PlayerSkillData
         * @static
         * @param {roitescape.IPlayerSkillData} message PlayerSkillData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerSkillData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerSkillData message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.PlayerSkillData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.PlayerSkillData} PlayerSkillData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSkillData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.PlayerSkillData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.toTime = reader.int32();
                    break;
                case 3:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerSkillData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.PlayerSkillData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.PlayerSkillData} PlayerSkillData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerSkillData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerSkillData message.
         * @function verify
         * @memberof roitescape.PlayerSkillData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerSkillData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.toTime != null && message.hasOwnProperty("toTime"))
                if (!$util.isInteger(message.toTime))
                    return "toTime: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a PlayerSkillData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.PlayerSkillData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.PlayerSkillData} PlayerSkillData
         */
        PlayerSkillData.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.PlayerSkillData)
                return object;
            var message = new $root.roitescape.PlayerSkillData();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.toTime != null)
                message.toTime = object.toTime | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerSkillData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.PlayerSkillData
         * @static
         * @param {roitescape.PlayerSkillData} message PlayerSkillData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerSkillData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.toTime = 0;
                object.count = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.toTime != null && message.hasOwnProperty("toTime"))
                object.toTime = message.toTime;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this PlayerSkillData to JSON.
         * @function toJSON
         * @memberof roitescape.PlayerSkillData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerSkillData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerSkillData;
    })();

    roitescape.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof roitescape
         * @interface IPlayerInfo
         * @property {string} openID PlayerInfo openID
         * @property {string} sessID PlayerInfo sessID
         * @property {string} userID PlayerInfo userID
         * @property {number} lastSaveTime PlayerInfo lastSaveTime
         * @property {string} nickname PlayerInfo nickname
         * @property {number} sex PlayerInfo sex
         * @property {string} headUrl PlayerInfo headUrl
         * @property {number} shareTimesOfToday PlayerInfo shareTimesOfToday
         * @property {number} recordDayOfShareTimes PlayerInfo recordDayOfShareTimes
         * @property {number} advTimesOfToday PlayerInfo advTimesOfToday
         * @property {number} recordDayOfAdvTimes PlayerInfo recordDayOfAdvTimes
         * @property {roitescape.ISettingConfig} setting PlayerInfo setting
         * @property {number|null} [totalShareTimes] PlayerInfo totalShareTimes
         * @property {number|null} [totalAdvTimes] PlayerInfo totalAdvTimes
         * @property {roitescape.IRedGiftConfig|null} [redGift] PlayerInfo redGift
         * @property {string} coin PlayerInfo coin
         * @property {string} totalCoin PlayerInfo totalCoin
         * @property {number|null} [levelID] PlayerInfo levelID
         * @property {number|null} [totalLevelCount] PlayerInfo totalLevelCount
         * @property {number|null} [continueLevel] PlayerInfo continueLevel
         * @property {number|null} [skinId] PlayerInfo skinId
         * @property {Array.<roitescape.ISkinData>|null} [ownSkinDetail] PlayerInfo ownSkinDetail
         * @property {string|null} [diam] PlayerInfo diam
         * @property {number|null} [curSginDay] PlayerInfo curSginDay
         * @property {number|null} [curSginWeekCount] PlayerInfo curSginWeekCount
         * @property {string|null} [lastSginYear] PlayerInfo lastSginYear
         * @property {number|null} [lastGetPowerTime] PlayerInfo lastGetPowerTime
         * @property {number|null} [power] PlayerInfo power
         * @property {number|null} [lastViewAdGetPowerTime] PlayerInfo lastViewAdGetPowerTime
         * @property {number|null} [todayViewAdGetPowerTimes] PlayerInfo todayViewAdGetPowerTimes
         * @property {number|null} [todayTurntableTimes] PlayerInfo todayTurntableTimes
         * @property {number|null} [isShowSubscribeApp] PlayerInfo isShowSubscribeApp
         * @property {number|null} [curDailyTaskId] PlayerInfo curDailyTaskId
         * @property {number|null} [dailTaskSgin] PlayerInfo dailTaskSgin
         * @property {number|null} [dailTaskTLevel] PlayerInfo dailTaskTLevel
         * @property {string|null} [curMoney] PlayerInfo curMoney
         * @property {number|null} [loginDays] PlayerInfo loginDays
         * @property {number|null} [lastGetRedTimers] PlayerInfo lastGetRedTimers
         * @property {number|null} [curGetRedTimers] PlayerInfo curGetRedTimers
         * @property {number|null} [dailyTaskBeginTime] PlayerInfo dailyTaskBeginTime
         * @property {number|null} [todayDiamGetPowerTimes] PlayerInfo todayDiamGetPowerTimes
         * @property {number|null} [todayShowInsertAdCount] PlayerInfo todayShowInsertAdCount
         * @property {number|null} [isShowTeach] PlayerInfo isShowTeach
         * @property {number|null} [extraPowerCount] PlayerInfo extraPowerCount
         * @property {number|null} [getAdGoldTimes] PlayerInfo getAdGoldTimes
         * @property {number|null} [teachId] PlayerInfo teachId
         * @property {Array.<roitescape.ITaskData>|null} [taskDatas] PlayerInfo taskDatas
         * @property {number|null} [curTaskId] PlayerInfo curTaskId
         * @property {Array.<number>|null} [taskLine] PlayerInfo taskLine
         * @property {Array.<roitescape.ILevelData>|null} [levelDatas] PlayerInfo levelDatas
         * @property {string|null} [lastPlayerPos] PlayerInfo lastPlayerPos
         * @property {number|null} [lastLevelId] PlayerInfo lastLevelId
         * @property {Array.<roitescape.IBeeData>|null} [beeDatas] PlayerInfo beeDatas
         * @property {number|null} [beeSpeedLv] PlayerInfo beeSpeedLv
         * @property {number|null} [containLv] PlayerInfo containLv
         * @property {number|null} [hurtLv] PlayerInfo hurtLv
         * @property {number|null} [buyBeeTimes] PlayerInfo buyBeeTimes
         * @property {Array.<roitescape.IPlayerSkillData>|null} [playerSkillDatas] PlayerInfo playerSkillDatas
         * @property {number|null} [speedUpOpen] PlayerInfo speedUpOpen
         * @property {number|null} [strongeUpOpen] PlayerInfo strongeUpOpen
         * @property {number|null} [backHomeOpen] PlayerInfo backHomeOpen
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof roitescape
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {roitescape.IPlayerInfo=} [properties] Properties to set
         */
        function PlayerInfo(properties) {
            this.ownSkinDetail = [];
            this.taskDatas = [];
            this.taskLine = [];
            this.levelDatas = [];
            this.beeDatas = [];
            this.playerSkillDatas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerInfo openID.
         * @member {string} openID
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.openID = "";

        /**
         * PlayerInfo sessID.
         * @member {string} sessID
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.sessID = "";

        /**
         * PlayerInfo userID.
         * @member {string} userID
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.userID = "";

        /**
         * PlayerInfo lastSaveTime.
         * @member {number} lastSaveTime
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.lastSaveTime = 0;

        /**
         * PlayerInfo nickname.
         * @member {string} nickname
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.nickname = "";

        /**
         * PlayerInfo sex.
         * @member {number} sex
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.sex = 0;

        /**
         * PlayerInfo headUrl.
         * @member {string} headUrl
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.headUrl = "";

        /**
         * PlayerInfo shareTimesOfToday.
         * @member {number} shareTimesOfToday
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.shareTimesOfToday = 0;

        /**
         * PlayerInfo recordDayOfShareTimes.
         * @member {number} recordDayOfShareTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.recordDayOfShareTimes = 0;

        /**
         * PlayerInfo advTimesOfToday.
         * @member {number} advTimesOfToday
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.advTimesOfToday = 0;

        /**
         * PlayerInfo recordDayOfAdvTimes.
         * @member {number} recordDayOfAdvTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.recordDayOfAdvTimes = 0;

        /**
         * PlayerInfo setting.
         * @member {roitescape.ISettingConfig} setting
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.setting = null;

        /**
         * PlayerInfo totalShareTimes.
         * @member {number} totalShareTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.totalShareTimes = 0;

        /**
         * PlayerInfo totalAdvTimes.
         * @member {number} totalAdvTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.totalAdvTimes = 0;

        /**
         * PlayerInfo redGift.
         * @member {roitescape.IRedGiftConfig|null|undefined} redGift
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.redGift = null;

        /**
         * PlayerInfo coin.
         * @member {string} coin
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.coin = "";

        /**
         * PlayerInfo totalCoin.
         * @member {string} totalCoin
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.totalCoin = "";

        /**
         * PlayerInfo levelID.
         * @member {number} levelID
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.levelID = 0;

        /**
         * PlayerInfo totalLevelCount.
         * @member {number} totalLevelCount
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.totalLevelCount = 0;

        /**
         * PlayerInfo continueLevel.
         * @member {number} continueLevel
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.continueLevel = 0;

        /**
         * PlayerInfo skinId.
         * @member {number} skinId
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.skinId = 0;

        /**
         * PlayerInfo ownSkinDetail.
         * @member {Array.<roitescape.ISkinData>} ownSkinDetail
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.ownSkinDetail = $util.emptyArray;

        /**
         * PlayerInfo diam.
         * @member {string} diam
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.diam = "";

        /**
         * PlayerInfo curSginDay.
         * @member {number} curSginDay
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.curSginDay = 0;

        /**
         * PlayerInfo curSginWeekCount.
         * @member {number} curSginWeekCount
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.curSginWeekCount = 0;

        /**
         * PlayerInfo lastSginYear.
         * @member {string} lastSginYear
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.lastSginYear = "";

        /**
         * PlayerInfo lastGetPowerTime.
         * @member {number} lastGetPowerTime
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.lastGetPowerTime = 0;

        /**
         * PlayerInfo power.
         * @member {number} power
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.power = 0;

        /**
         * PlayerInfo lastViewAdGetPowerTime.
         * @member {number} lastViewAdGetPowerTime
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.lastViewAdGetPowerTime = 0;

        /**
         * PlayerInfo todayViewAdGetPowerTimes.
         * @member {number} todayViewAdGetPowerTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.todayViewAdGetPowerTimes = 0;

        /**
         * PlayerInfo todayTurntableTimes.
         * @member {number} todayTurntableTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.todayTurntableTimes = 0;

        /**
         * PlayerInfo isShowSubscribeApp.
         * @member {number} isShowSubscribeApp
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.isShowSubscribeApp = 0;

        /**
         * PlayerInfo curDailyTaskId.
         * @member {number} curDailyTaskId
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.curDailyTaskId = 0;

        /**
         * PlayerInfo dailTaskSgin.
         * @member {number} dailTaskSgin
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.dailTaskSgin = 0;

        /**
         * PlayerInfo dailTaskTLevel.
         * @member {number} dailTaskTLevel
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.dailTaskTLevel = 0;

        /**
         * PlayerInfo curMoney.
         * @member {string} curMoney
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.curMoney = "";

        /**
         * PlayerInfo loginDays.
         * @member {number} loginDays
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.loginDays = 0;

        /**
         * PlayerInfo lastGetRedTimers.
         * @member {number} lastGetRedTimers
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.lastGetRedTimers = 0;

        /**
         * PlayerInfo curGetRedTimers.
         * @member {number} curGetRedTimers
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.curGetRedTimers = 0;

        /**
         * PlayerInfo dailyTaskBeginTime.
         * @member {number} dailyTaskBeginTime
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.dailyTaskBeginTime = 0;

        /**
         * PlayerInfo todayDiamGetPowerTimes.
         * @member {number} todayDiamGetPowerTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.todayDiamGetPowerTimes = 0;

        /**
         * PlayerInfo todayShowInsertAdCount.
         * @member {number} todayShowInsertAdCount
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.todayShowInsertAdCount = 0;

        /**
         * PlayerInfo isShowTeach.
         * @member {number} isShowTeach
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.isShowTeach = 0;

        /**
         * PlayerInfo extraPowerCount.
         * @member {number} extraPowerCount
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.extraPowerCount = 0;

        /**
         * PlayerInfo getAdGoldTimes.
         * @member {number} getAdGoldTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.getAdGoldTimes = 0;

        /**
         * PlayerInfo teachId.
         * @member {number} teachId
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.teachId = 0;

        /**
         * PlayerInfo taskDatas.
         * @member {Array.<roitescape.ITaskData>} taskDatas
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.taskDatas = $util.emptyArray;

        /**
         * PlayerInfo curTaskId.
         * @member {number} curTaskId
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.curTaskId = 0;

        /**
         * PlayerInfo taskLine.
         * @member {Array.<number>} taskLine
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.taskLine = $util.emptyArray;

        /**
         * PlayerInfo levelDatas.
         * @member {Array.<roitescape.ILevelData>} levelDatas
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.levelDatas = $util.emptyArray;

        /**
         * PlayerInfo lastPlayerPos.
         * @member {string} lastPlayerPos
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.lastPlayerPos = "";

        /**
         * PlayerInfo lastLevelId.
         * @member {number} lastLevelId
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.lastLevelId = 0;

        /**
         * PlayerInfo beeDatas.
         * @member {Array.<roitescape.IBeeData>} beeDatas
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.beeDatas = $util.emptyArray;

        /**
         * PlayerInfo beeSpeedLv.
         * @member {number} beeSpeedLv
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.beeSpeedLv = 0;

        /**
         * PlayerInfo containLv.
         * @member {number} containLv
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.containLv = 0;

        /**
         * PlayerInfo hurtLv.
         * @member {number} hurtLv
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.hurtLv = 0;

        /**
         * PlayerInfo buyBeeTimes.
         * @member {number} buyBeeTimes
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.buyBeeTimes = 0;

        /**
         * PlayerInfo playerSkillDatas.
         * @member {Array.<roitescape.IPlayerSkillData>} playerSkillDatas
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.playerSkillDatas = $util.emptyArray;

        /**
         * PlayerInfo speedUpOpen.
         * @member {number} speedUpOpen
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.speedUpOpen = 0;

        /**
         * PlayerInfo strongeUpOpen.
         * @member {number} strongeUpOpen
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.strongeUpOpen = 0;

        /**
         * PlayerInfo backHomeOpen.
         * @member {number} backHomeOpen
         * @memberof roitescape.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.backHomeOpen = 0;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @function create
         * @memberof roitescape.PlayerInfo
         * @static
         * @param {roitescape.IPlayerInfo=} [properties] Properties to set
         * @returns {roitescape.PlayerInfo} PlayerInfo instance
         */
        PlayerInfo.create = function create(properties) {
            return new PlayerInfo(properties);
        };

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link roitescape.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof roitescape.PlayerInfo
         * @static
         * @param {roitescape.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.openID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.userID);
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.lastSaveTime);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.nickname);
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.sex);
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.headUrl);
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.shareTimesOfToday);
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.recordDayOfShareTimes);
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.advTimesOfToday);
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.recordDayOfAdvTimes);
            $root.roitescape.SettingConfig.encode(message.setting, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.totalShareTimes != null && message.hasOwnProperty("totalShareTimes"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.totalShareTimes);
            if (message.totalAdvTimes != null && message.hasOwnProperty("totalAdvTimes"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.totalAdvTimes);
            if (message.redGift != null && message.hasOwnProperty("redGift"))
                $root.roitescape.RedGiftConfig.encode(message.redGift, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.coin);
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.totalCoin);
            if (message.levelID != null && message.hasOwnProperty("levelID"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.levelID);
            if (message.totalLevelCount != null && message.hasOwnProperty("totalLevelCount"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.totalLevelCount);
            if (message.continueLevel != null && message.hasOwnProperty("continueLevel"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.continueLevel);
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint32(message.skinId);
            if (message.ownSkinDetail != null && message.ownSkinDetail.length)
                for (var i = 0; i < message.ownSkinDetail.length; ++i)
                    $root.roitescape.SkinData.encode(message.ownSkinDetail[i], writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.diam != null && message.hasOwnProperty("diam"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.diam);
            if (message.curSginDay != null && message.hasOwnProperty("curSginDay"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.curSginDay);
            if (message.curSginWeekCount != null && message.hasOwnProperty("curSginWeekCount"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint32(message.curSginWeekCount);
            if (message.lastSginYear != null && message.hasOwnProperty("lastSginYear"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.lastSginYear);
            if (message.lastGetPowerTime != null && message.hasOwnProperty("lastGetPowerTime"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.lastGetPowerTime);
            if (message.power != null && message.hasOwnProperty("power"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.power);
            if (message.lastViewAdGetPowerTime != null && message.hasOwnProperty("lastViewAdGetPowerTime"))
                writer.uint32(/* id 29, wireType 0 =*/232).uint32(message.lastViewAdGetPowerTime);
            if (message.todayViewAdGetPowerTimes != null && message.hasOwnProperty("todayViewAdGetPowerTimes"))
                writer.uint32(/* id 30, wireType 0 =*/240).uint32(message.todayViewAdGetPowerTimes);
            if (message.todayTurntableTimes != null && message.hasOwnProperty("todayTurntableTimes"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint32(message.todayTurntableTimes);
            if (message.isShowSubscribeApp != null && message.hasOwnProperty("isShowSubscribeApp"))
                writer.uint32(/* id 32, wireType 0 =*/256).uint32(message.isShowSubscribeApp);
            if (message.curDailyTaskId != null && message.hasOwnProperty("curDailyTaskId"))
                writer.uint32(/* id 33, wireType 0 =*/264).uint32(message.curDailyTaskId);
            if (message.dailTaskSgin != null && message.hasOwnProperty("dailTaskSgin"))
                writer.uint32(/* id 34, wireType 0 =*/272).uint32(message.dailTaskSgin);
            if (message.dailTaskTLevel != null && message.hasOwnProperty("dailTaskTLevel"))
                writer.uint32(/* id 35, wireType 0 =*/280).uint32(message.dailTaskTLevel);
            if (message.curMoney != null && message.hasOwnProperty("curMoney"))
                writer.uint32(/* id 36, wireType 2 =*/290).string(message.curMoney);
            if (message.loginDays != null && message.hasOwnProperty("loginDays"))
                writer.uint32(/* id 37, wireType 0 =*/296).uint32(message.loginDays);
            if (message.lastGetRedTimers != null && message.hasOwnProperty("lastGetRedTimers"))
                writer.uint32(/* id 38, wireType 0 =*/304).uint32(message.lastGetRedTimers);
            if (message.curGetRedTimers != null && message.hasOwnProperty("curGetRedTimers"))
                writer.uint32(/* id 39, wireType 0 =*/312).uint32(message.curGetRedTimers);
            if (message.dailyTaskBeginTime != null && message.hasOwnProperty("dailyTaskBeginTime"))
                writer.uint32(/* id 40, wireType 0 =*/320).uint32(message.dailyTaskBeginTime);
            if (message.todayDiamGetPowerTimes != null && message.hasOwnProperty("todayDiamGetPowerTimes"))
                writer.uint32(/* id 41, wireType 0 =*/328).uint32(message.todayDiamGetPowerTimes);
            if (message.todayShowInsertAdCount != null && message.hasOwnProperty("todayShowInsertAdCount"))
                writer.uint32(/* id 42, wireType 0 =*/336).uint32(message.todayShowInsertAdCount);
            if (message.isShowTeach != null && message.hasOwnProperty("isShowTeach"))
                writer.uint32(/* id 43, wireType 0 =*/344).uint32(message.isShowTeach);
            if (message.extraPowerCount != null && message.hasOwnProperty("extraPowerCount"))
                writer.uint32(/* id 44, wireType 0 =*/352).uint32(message.extraPowerCount);
            if (message.getAdGoldTimes != null && message.hasOwnProperty("getAdGoldTimes"))
                writer.uint32(/* id 45, wireType 0 =*/360).uint32(message.getAdGoldTimes);
            if (message.teachId != null && message.hasOwnProperty("teachId"))
                writer.uint32(/* id 46, wireType 0 =*/368).uint32(message.teachId);
            if (message.taskDatas != null && message.taskDatas.length)
                for (var i = 0; i < message.taskDatas.length; ++i)
                    $root.roitescape.TaskData.encode(message.taskDatas[i], writer.uint32(/* id 47, wireType 2 =*/378).fork()).ldelim();
            if (message.curTaskId != null && message.hasOwnProperty("curTaskId"))
                writer.uint32(/* id 48, wireType 0 =*/384).uint32(message.curTaskId);
            if (message.taskLine != null && message.taskLine.length)
                for (var i = 0; i < message.taskLine.length; ++i)
                    writer.uint32(/* id 49, wireType 0 =*/392).uint32(message.taskLine[i]);
            if (message.levelDatas != null && message.levelDatas.length)
                for (var i = 0; i < message.levelDatas.length; ++i)
                    $root.roitescape.LevelData.encode(message.levelDatas[i], writer.uint32(/* id 50, wireType 2 =*/402).fork()).ldelim();
            if (message.lastPlayerPos != null && message.hasOwnProperty("lastPlayerPos"))
                writer.uint32(/* id 51, wireType 2 =*/410).string(message.lastPlayerPos);
            if (message.lastLevelId != null && message.hasOwnProperty("lastLevelId"))
                writer.uint32(/* id 52, wireType 0 =*/416).uint32(message.lastLevelId);
            if (message.beeDatas != null && message.beeDatas.length)
                for (var i = 0; i < message.beeDatas.length; ++i)
                    $root.roitescape.BeeData.encode(message.beeDatas[i], writer.uint32(/* id 53, wireType 2 =*/426).fork()).ldelim();
            if (message.beeSpeedLv != null && message.hasOwnProperty("beeSpeedLv"))
                writer.uint32(/* id 54, wireType 0 =*/432).uint32(message.beeSpeedLv);
            if (message.containLv != null && message.hasOwnProperty("containLv"))
                writer.uint32(/* id 55, wireType 0 =*/440).uint32(message.containLv);
            if (message.hurtLv != null && message.hasOwnProperty("hurtLv"))
                writer.uint32(/* id 56, wireType 0 =*/448).uint32(message.hurtLv);
            if (message.buyBeeTimes != null && message.hasOwnProperty("buyBeeTimes"))
                writer.uint32(/* id 57, wireType 0 =*/456).uint32(message.buyBeeTimes);
            if (message.playerSkillDatas != null && message.playerSkillDatas.length)
                for (var i = 0; i < message.playerSkillDatas.length; ++i)
                    $root.roitescape.PlayerSkillData.encode(message.playerSkillDatas[i], writer.uint32(/* id 58, wireType 2 =*/466).fork()).ldelim();
            if (message.speedUpOpen != null && message.hasOwnProperty("speedUpOpen"))
                writer.uint32(/* id 59, wireType 0 =*/472).uint32(message.speedUpOpen);
            if (message.strongeUpOpen != null && message.hasOwnProperty("strongeUpOpen"))
                writer.uint32(/* id 60, wireType 0 =*/480).uint32(message.strongeUpOpen);
            if (message.backHomeOpen != null && message.hasOwnProperty("backHomeOpen"))
                writer.uint32(/* id 61, wireType 0 =*/488).uint32(message.backHomeOpen);
            return writer;
        };

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link roitescape.PlayerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roitescape.PlayerInfo
         * @static
         * @param {roitescape.IPlayerInfo} message PlayerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof roitescape.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roitescape.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.roitescape.PlayerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.openID = reader.string();
                    break;
                case 2:
                    message.sessID = reader.string();
                    break;
                case 3:
                    message.userID = reader.string();
                    break;
                case 4:
                    message.lastSaveTime = reader.uint32();
                    break;
                case 5:
                    message.nickname = reader.string();
                    break;
                case 6:
                    message.sex = reader.uint32();
                    break;
                case 7:
                    message.headUrl = reader.string();
                    break;
                case 8:
                    message.shareTimesOfToday = reader.uint32();
                    break;
                case 9:
                    message.recordDayOfShareTimes = reader.uint32();
                    break;
                case 10:
                    message.advTimesOfToday = reader.uint32();
                    break;
                case 11:
                    message.recordDayOfAdvTimes = reader.uint32();
                    break;
                case 12:
                    message.setting = $root.roitescape.SettingConfig.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.totalShareTimes = reader.uint32();
                    break;
                case 14:
                    message.totalAdvTimes = reader.uint32();
                    break;
                case 15:
                    message.redGift = $root.roitescape.RedGiftConfig.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.coin = reader.string();
                    break;
                case 17:
                    message.totalCoin = reader.string();
                    break;
                case 18:
                    message.levelID = reader.uint32();
                    break;
                case 19:
                    message.totalLevelCount = reader.uint32();
                    break;
                case 20:
                    message.continueLevel = reader.uint32();
                    break;
                case 21:
                    message.skinId = reader.uint32();
                    break;
                case 22:
                    if (!(message.ownSkinDetail && message.ownSkinDetail.length))
                        message.ownSkinDetail = [];
                    message.ownSkinDetail.push($root.roitescape.SkinData.decode(reader, reader.uint32()));
                    break;
                case 23:
                    message.diam = reader.string();
                    break;
                case 24:
                    message.curSginDay = reader.uint32();
                    break;
                case 25:
                    message.curSginWeekCount = reader.uint32();
                    break;
                case 26:
                    message.lastSginYear = reader.string();
                    break;
                case 27:
                    message.lastGetPowerTime = reader.uint32();
                    break;
                case 28:
                    message.power = reader.uint32();
                    break;
                case 29:
                    message.lastViewAdGetPowerTime = reader.uint32();
                    break;
                case 30:
                    message.todayViewAdGetPowerTimes = reader.uint32();
                    break;
                case 31:
                    message.todayTurntableTimes = reader.uint32();
                    break;
                case 32:
                    message.isShowSubscribeApp = reader.uint32();
                    break;
                case 33:
                    message.curDailyTaskId = reader.uint32();
                    break;
                case 34:
                    message.dailTaskSgin = reader.uint32();
                    break;
                case 35:
                    message.dailTaskTLevel = reader.uint32();
                    break;
                case 36:
                    message.curMoney = reader.string();
                    break;
                case 37:
                    message.loginDays = reader.uint32();
                    break;
                case 38:
                    message.lastGetRedTimers = reader.uint32();
                    break;
                case 39:
                    message.curGetRedTimers = reader.uint32();
                    break;
                case 40:
                    message.dailyTaskBeginTime = reader.uint32();
                    break;
                case 41:
                    message.todayDiamGetPowerTimes = reader.uint32();
                    break;
                case 42:
                    message.todayShowInsertAdCount = reader.uint32();
                    break;
                case 43:
                    message.isShowTeach = reader.uint32();
                    break;
                case 44:
                    message.extraPowerCount = reader.uint32();
                    break;
                case 45:
                    message.getAdGoldTimes = reader.uint32();
                    break;
                case 46:
                    message.teachId = reader.uint32();
                    break;
                case 47:
                    if (!(message.taskDatas && message.taskDatas.length))
                        message.taskDatas = [];
                    message.taskDatas.push($root.roitescape.TaskData.decode(reader, reader.uint32()));
                    break;
                case 48:
                    message.curTaskId = reader.uint32();
                    break;
                case 49:
                    if (!(message.taskLine && message.taskLine.length))
                        message.taskLine = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.taskLine.push(reader.uint32());
                    } else
                        message.taskLine.push(reader.uint32());
                    break;
                case 50:
                    if (!(message.levelDatas && message.levelDatas.length))
                        message.levelDatas = [];
                    message.levelDatas.push($root.roitescape.LevelData.decode(reader, reader.uint32()));
                    break;
                case 51:
                    message.lastPlayerPos = reader.string();
                    break;
                case 52:
                    message.lastLevelId = reader.uint32();
                    break;
                case 53:
                    if (!(message.beeDatas && message.beeDatas.length))
                        message.beeDatas = [];
                    message.beeDatas.push($root.roitescape.BeeData.decode(reader, reader.uint32()));
                    break;
                case 54:
                    message.beeSpeedLv = reader.uint32();
                    break;
                case 55:
                    message.containLv = reader.uint32();
                    break;
                case 56:
                    message.hurtLv = reader.uint32();
                    break;
                case 57:
                    message.buyBeeTimes = reader.uint32();
                    break;
                case 58:
                    if (!(message.playerSkillDatas && message.playerSkillDatas.length))
                        message.playerSkillDatas = [];
                    message.playerSkillDatas.push($root.roitescape.PlayerSkillData.decode(reader, reader.uint32()));
                    break;
                case 59:
                    message.speedUpOpen = reader.uint32();
                    break;
                case 60:
                    message.strongeUpOpen = reader.uint32();
                    break;
                case 61:
                    message.backHomeOpen = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("openID"))
                throw $util.ProtocolError("missing required 'openID'", { instance: message });
            if (!message.hasOwnProperty("sessID"))
                throw $util.ProtocolError("missing required 'sessID'", { instance: message });
            if (!message.hasOwnProperty("userID"))
                throw $util.ProtocolError("missing required 'userID'", { instance: message });
            if (!message.hasOwnProperty("lastSaveTime"))
                throw $util.ProtocolError("missing required 'lastSaveTime'", { instance: message });
            if (!message.hasOwnProperty("nickname"))
                throw $util.ProtocolError("missing required 'nickname'", { instance: message });
            if (!message.hasOwnProperty("sex"))
                throw $util.ProtocolError("missing required 'sex'", { instance: message });
            if (!message.hasOwnProperty("headUrl"))
                throw $util.ProtocolError("missing required 'headUrl'", { instance: message });
            if (!message.hasOwnProperty("shareTimesOfToday"))
                throw $util.ProtocolError("missing required 'shareTimesOfToday'", { instance: message });
            if (!message.hasOwnProperty("recordDayOfShareTimes"))
                throw $util.ProtocolError("missing required 'recordDayOfShareTimes'", { instance: message });
            if (!message.hasOwnProperty("advTimesOfToday"))
                throw $util.ProtocolError("missing required 'advTimesOfToday'", { instance: message });
            if (!message.hasOwnProperty("recordDayOfAdvTimes"))
                throw $util.ProtocolError("missing required 'recordDayOfAdvTimes'", { instance: message });
            if (!message.hasOwnProperty("setting"))
                throw $util.ProtocolError("missing required 'setting'", { instance: message });
            if (!message.hasOwnProperty("coin"))
                throw $util.ProtocolError("missing required 'coin'", { instance: message });
            if (!message.hasOwnProperty("totalCoin"))
                throw $util.ProtocolError("missing required 'totalCoin'", { instance: message });
            return message;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roitescape.PlayerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roitescape.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerInfo message.
         * @function verify
         * @memberof roitescape.PlayerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.openID))
                return "openID: string expected";
            if (!$util.isString(message.sessID))
                return "sessID: string expected";
            if (!$util.isString(message.userID))
                return "userID: string expected";
            if (!$util.isInteger(message.lastSaveTime))
                return "lastSaveTime: integer expected";
            if (!$util.isString(message.nickname))
                return "nickname: string expected";
            if (!$util.isInteger(message.sex))
                return "sex: integer expected";
            if (!$util.isString(message.headUrl))
                return "headUrl: string expected";
            if (!$util.isInteger(message.shareTimesOfToday))
                return "shareTimesOfToday: integer expected";
            if (!$util.isInteger(message.recordDayOfShareTimes))
                return "recordDayOfShareTimes: integer expected";
            if (!$util.isInteger(message.advTimesOfToday))
                return "advTimesOfToday: integer expected";
            if (!$util.isInteger(message.recordDayOfAdvTimes))
                return "recordDayOfAdvTimes: integer expected";
            {
                var error = $root.roitescape.SettingConfig.verify(message.setting);
                if (error)
                    return "setting." + error;
            }
            if (message.totalShareTimes != null && message.hasOwnProperty("totalShareTimes"))
                if (!$util.isInteger(message.totalShareTimes))
                    return "totalShareTimes: integer expected";
            if (message.totalAdvTimes != null && message.hasOwnProperty("totalAdvTimes"))
                if (!$util.isInteger(message.totalAdvTimes))
                    return "totalAdvTimes: integer expected";
            if (message.redGift != null && message.hasOwnProperty("redGift")) {
                var error = $root.roitescape.RedGiftConfig.verify(message.redGift);
                if (error)
                    return "redGift." + error;
            }
            if (!$util.isString(message.coin))
                return "coin: string expected";
            if (!$util.isString(message.totalCoin))
                return "totalCoin: string expected";
            if (message.levelID != null && message.hasOwnProperty("levelID"))
                if (!$util.isInteger(message.levelID))
                    return "levelID: integer expected";
            if (message.totalLevelCount != null && message.hasOwnProperty("totalLevelCount"))
                if (!$util.isInteger(message.totalLevelCount))
                    return "totalLevelCount: integer expected";
            if (message.continueLevel != null && message.hasOwnProperty("continueLevel"))
                if (!$util.isInteger(message.continueLevel))
                    return "continueLevel: integer expected";
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                if (!$util.isInteger(message.skinId))
                    return "skinId: integer expected";
            if (message.ownSkinDetail != null && message.hasOwnProperty("ownSkinDetail")) {
                if (!Array.isArray(message.ownSkinDetail))
                    return "ownSkinDetail: array expected";
                for (var i = 0; i < message.ownSkinDetail.length; ++i) {
                    var error = $root.roitescape.SkinData.verify(message.ownSkinDetail[i]);
                    if (error)
                        return "ownSkinDetail." + error;
                }
            }
            if (message.diam != null && message.hasOwnProperty("diam"))
                if (!$util.isString(message.diam))
                    return "diam: string expected";
            if (message.curSginDay != null && message.hasOwnProperty("curSginDay"))
                if (!$util.isInteger(message.curSginDay))
                    return "curSginDay: integer expected";
            if (message.curSginWeekCount != null && message.hasOwnProperty("curSginWeekCount"))
                if (!$util.isInteger(message.curSginWeekCount))
                    return "curSginWeekCount: integer expected";
            if (message.lastSginYear != null && message.hasOwnProperty("lastSginYear"))
                if (!$util.isString(message.lastSginYear))
                    return "lastSginYear: string expected";
            if (message.lastGetPowerTime != null && message.hasOwnProperty("lastGetPowerTime"))
                if (!$util.isInteger(message.lastGetPowerTime))
                    return "lastGetPowerTime: integer expected";
            if (message.power != null && message.hasOwnProperty("power"))
                if (!$util.isInteger(message.power))
                    return "power: integer expected";
            if (message.lastViewAdGetPowerTime != null && message.hasOwnProperty("lastViewAdGetPowerTime"))
                if (!$util.isInteger(message.lastViewAdGetPowerTime))
                    return "lastViewAdGetPowerTime: integer expected";
            if (message.todayViewAdGetPowerTimes != null && message.hasOwnProperty("todayViewAdGetPowerTimes"))
                if (!$util.isInteger(message.todayViewAdGetPowerTimes))
                    return "todayViewAdGetPowerTimes: integer expected";
            if (message.todayTurntableTimes != null && message.hasOwnProperty("todayTurntableTimes"))
                if (!$util.isInteger(message.todayTurntableTimes))
                    return "todayTurntableTimes: integer expected";
            if (message.isShowSubscribeApp != null && message.hasOwnProperty("isShowSubscribeApp"))
                if (!$util.isInteger(message.isShowSubscribeApp))
                    return "isShowSubscribeApp: integer expected";
            if (message.curDailyTaskId != null && message.hasOwnProperty("curDailyTaskId"))
                if (!$util.isInteger(message.curDailyTaskId))
                    return "curDailyTaskId: integer expected";
            if (message.dailTaskSgin != null && message.hasOwnProperty("dailTaskSgin"))
                if (!$util.isInteger(message.dailTaskSgin))
                    return "dailTaskSgin: integer expected";
            if (message.dailTaskTLevel != null && message.hasOwnProperty("dailTaskTLevel"))
                if (!$util.isInteger(message.dailTaskTLevel))
                    return "dailTaskTLevel: integer expected";
            if (message.curMoney != null && message.hasOwnProperty("curMoney"))
                if (!$util.isString(message.curMoney))
                    return "curMoney: string expected";
            if (message.loginDays != null && message.hasOwnProperty("loginDays"))
                if (!$util.isInteger(message.loginDays))
                    return "loginDays: integer expected";
            if (message.lastGetRedTimers != null && message.hasOwnProperty("lastGetRedTimers"))
                if (!$util.isInteger(message.lastGetRedTimers))
                    return "lastGetRedTimers: integer expected";
            if (message.curGetRedTimers != null && message.hasOwnProperty("curGetRedTimers"))
                if (!$util.isInteger(message.curGetRedTimers))
                    return "curGetRedTimers: integer expected";
            if (message.dailyTaskBeginTime != null && message.hasOwnProperty("dailyTaskBeginTime"))
                if (!$util.isInteger(message.dailyTaskBeginTime))
                    return "dailyTaskBeginTime: integer expected";
            if (message.todayDiamGetPowerTimes != null && message.hasOwnProperty("todayDiamGetPowerTimes"))
                if (!$util.isInteger(message.todayDiamGetPowerTimes))
                    return "todayDiamGetPowerTimes: integer expected";
            if (message.todayShowInsertAdCount != null && message.hasOwnProperty("todayShowInsertAdCount"))
                if (!$util.isInteger(message.todayShowInsertAdCount))
                    return "todayShowInsertAdCount: integer expected";
            if (message.isShowTeach != null && message.hasOwnProperty("isShowTeach"))
                if (!$util.isInteger(message.isShowTeach))
                    return "isShowTeach: integer expected";
            if (message.extraPowerCount != null && message.hasOwnProperty("extraPowerCount"))
                if (!$util.isInteger(message.extraPowerCount))
                    return "extraPowerCount: integer expected";
            if (message.getAdGoldTimes != null && message.hasOwnProperty("getAdGoldTimes"))
                if (!$util.isInteger(message.getAdGoldTimes))
                    return "getAdGoldTimes: integer expected";
            if (message.teachId != null && message.hasOwnProperty("teachId"))
                if (!$util.isInteger(message.teachId))
                    return "teachId: integer expected";
            if (message.taskDatas != null && message.hasOwnProperty("taskDatas")) {
                if (!Array.isArray(message.taskDatas))
                    return "taskDatas: array expected";
                for (var i = 0; i < message.taskDatas.length; ++i) {
                    var error = $root.roitescape.TaskData.verify(message.taskDatas[i]);
                    if (error)
                        return "taskDatas." + error;
                }
            }
            if (message.curTaskId != null && message.hasOwnProperty("curTaskId"))
                if (!$util.isInteger(message.curTaskId))
                    return "curTaskId: integer expected";
            if (message.taskLine != null && message.hasOwnProperty("taskLine")) {
                if (!Array.isArray(message.taskLine))
                    return "taskLine: array expected";
                for (var i = 0; i < message.taskLine.length; ++i)
                    if (!$util.isInteger(message.taskLine[i]))
                        return "taskLine: integer[] expected";
            }
            if (message.levelDatas != null && message.hasOwnProperty("levelDatas")) {
                if (!Array.isArray(message.levelDatas))
                    return "levelDatas: array expected";
                for (var i = 0; i < message.levelDatas.length; ++i) {
                    var error = $root.roitescape.LevelData.verify(message.levelDatas[i]);
                    if (error)
                        return "levelDatas." + error;
                }
            }
            if (message.lastPlayerPos != null && message.hasOwnProperty("lastPlayerPos"))
                if (!$util.isString(message.lastPlayerPos))
                    return "lastPlayerPos: string expected";
            if (message.lastLevelId != null && message.hasOwnProperty("lastLevelId"))
                if (!$util.isInteger(message.lastLevelId))
                    return "lastLevelId: integer expected";
            if (message.beeDatas != null && message.hasOwnProperty("beeDatas")) {
                if (!Array.isArray(message.beeDatas))
                    return "beeDatas: array expected";
                for (var i = 0; i < message.beeDatas.length; ++i) {
                    var error = $root.roitescape.BeeData.verify(message.beeDatas[i]);
                    if (error)
                        return "beeDatas." + error;
                }
            }
            if (message.beeSpeedLv != null && message.hasOwnProperty("beeSpeedLv"))
                if (!$util.isInteger(message.beeSpeedLv))
                    return "beeSpeedLv: integer expected";
            if (message.containLv != null && message.hasOwnProperty("containLv"))
                if (!$util.isInteger(message.containLv))
                    return "containLv: integer expected";
            if (message.hurtLv != null && message.hasOwnProperty("hurtLv"))
                if (!$util.isInteger(message.hurtLv))
                    return "hurtLv: integer expected";
            if (message.buyBeeTimes != null && message.hasOwnProperty("buyBeeTimes"))
                if (!$util.isInteger(message.buyBeeTimes))
                    return "buyBeeTimes: integer expected";
            if (message.playerSkillDatas != null && message.hasOwnProperty("playerSkillDatas")) {
                if (!Array.isArray(message.playerSkillDatas))
                    return "playerSkillDatas: array expected";
                for (var i = 0; i < message.playerSkillDatas.length; ++i) {
                    var error = $root.roitescape.PlayerSkillData.verify(message.playerSkillDatas[i]);
                    if (error)
                        return "playerSkillDatas." + error;
                }
            }
            if (message.speedUpOpen != null && message.hasOwnProperty("speedUpOpen"))
                if (!$util.isInteger(message.speedUpOpen))
                    return "speedUpOpen: integer expected";
            if (message.strongeUpOpen != null && message.hasOwnProperty("strongeUpOpen"))
                if (!$util.isInteger(message.strongeUpOpen))
                    return "strongeUpOpen: integer expected";
            if (message.backHomeOpen != null && message.hasOwnProperty("backHomeOpen"))
                if (!$util.isInteger(message.backHomeOpen))
                    return "backHomeOpen: integer expected";
            return null;
        };

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roitescape.PlayerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roitescape.PlayerInfo} PlayerInfo
         */
        PlayerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.roitescape.PlayerInfo)
                return object;
            var message = new $root.roitescape.PlayerInfo();
            if (object.openID != null)
                message.openID = String(object.openID);
            if (object.sessID != null)
                message.sessID = String(object.sessID);
            if (object.userID != null)
                message.userID = String(object.userID);
            if (object.lastSaveTime != null)
                message.lastSaveTime = object.lastSaveTime >>> 0;
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.sex != null)
                message.sex = object.sex >>> 0;
            if (object.headUrl != null)
                message.headUrl = String(object.headUrl);
            if (object.shareTimesOfToday != null)
                message.shareTimesOfToday = object.shareTimesOfToday >>> 0;
            if (object.recordDayOfShareTimes != null)
                message.recordDayOfShareTimes = object.recordDayOfShareTimes >>> 0;
            if (object.advTimesOfToday != null)
                message.advTimesOfToday = object.advTimesOfToday >>> 0;
            if (object.recordDayOfAdvTimes != null)
                message.recordDayOfAdvTimes = object.recordDayOfAdvTimes >>> 0;
            if (object.setting != null) {
                if (typeof object.setting !== "object")
                    throw TypeError(".roitescape.PlayerInfo.setting: object expected");
                message.setting = $root.roitescape.SettingConfig.fromObject(object.setting);
            }
            if (object.totalShareTimes != null)
                message.totalShareTimes = object.totalShareTimes >>> 0;
            if (object.totalAdvTimes != null)
                message.totalAdvTimes = object.totalAdvTimes >>> 0;
            if (object.redGift != null) {
                if (typeof object.redGift !== "object")
                    throw TypeError(".roitescape.PlayerInfo.redGift: object expected");
                message.redGift = $root.roitescape.RedGiftConfig.fromObject(object.redGift);
            }
            if (object.coin != null)
                message.coin = String(object.coin);
            if (object.totalCoin != null)
                message.totalCoin = String(object.totalCoin);
            if (object.levelID != null)
                message.levelID = object.levelID >>> 0;
            if (object.totalLevelCount != null)
                message.totalLevelCount = object.totalLevelCount >>> 0;
            if (object.continueLevel != null)
                message.continueLevel = object.continueLevel >>> 0;
            if (object.skinId != null)
                message.skinId = object.skinId >>> 0;
            if (object.ownSkinDetail) {
                if (!Array.isArray(object.ownSkinDetail))
                    throw TypeError(".roitescape.PlayerInfo.ownSkinDetail: array expected");
                message.ownSkinDetail = [];
                for (var i = 0; i < object.ownSkinDetail.length; ++i) {
                    if (typeof object.ownSkinDetail[i] !== "object")
                        throw TypeError(".roitescape.PlayerInfo.ownSkinDetail: object expected");
                    message.ownSkinDetail[i] = $root.roitescape.SkinData.fromObject(object.ownSkinDetail[i]);
                }
            }
            if (object.diam != null)
                message.diam = String(object.diam);
            if (object.curSginDay != null)
                message.curSginDay = object.curSginDay >>> 0;
            if (object.curSginWeekCount != null)
                message.curSginWeekCount = object.curSginWeekCount >>> 0;
            if (object.lastSginYear != null)
                message.lastSginYear = String(object.lastSginYear);
            if (object.lastGetPowerTime != null)
                message.lastGetPowerTime = object.lastGetPowerTime >>> 0;
            if (object.power != null)
                message.power = object.power >>> 0;
            if (object.lastViewAdGetPowerTime != null)
                message.lastViewAdGetPowerTime = object.lastViewAdGetPowerTime >>> 0;
            if (object.todayViewAdGetPowerTimes != null)
                message.todayViewAdGetPowerTimes = object.todayViewAdGetPowerTimes >>> 0;
            if (object.todayTurntableTimes != null)
                message.todayTurntableTimes = object.todayTurntableTimes >>> 0;
            if (object.isShowSubscribeApp != null)
                message.isShowSubscribeApp = object.isShowSubscribeApp >>> 0;
            if (object.curDailyTaskId != null)
                message.curDailyTaskId = object.curDailyTaskId >>> 0;
            if (object.dailTaskSgin != null)
                message.dailTaskSgin = object.dailTaskSgin >>> 0;
            if (object.dailTaskTLevel != null)
                message.dailTaskTLevel = object.dailTaskTLevel >>> 0;
            if (object.curMoney != null)
                message.curMoney = String(object.curMoney);
            if (object.loginDays != null)
                message.loginDays = object.loginDays >>> 0;
            if (object.lastGetRedTimers != null)
                message.lastGetRedTimers = object.lastGetRedTimers >>> 0;
            if (object.curGetRedTimers != null)
                message.curGetRedTimers = object.curGetRedTimers >>> 0;
            if (object.dailyTaskBeginTime != null)
                message.dailyTaskBeginTime = object.dailyTaskBeginTime >>> 0;
            if (object.todayDiamGetPowerTimes != null)
                message.todayDiamGetPowerTimes = object.todayDiamGetPowerTimes >>> 0;
            if (object.todayShowInsertAdCount != null)
                message.todayShowInsertAdCount = object.todayShowInsertAdCount >>> 0;
            if (object.isShowTeach != null)
                message.isShowTeach = object.isShowTeach >>> 0;
            if (object.extraPowerCount != null)
                message.extraPowerCount = object.extraPowerCount >>> 0;
            if (object.getAdGoldTimes != null)
                message.getAdGoldTimes = object.getAdGoldTimes >>> 0;
            if (object.teachId != null)
                message.teachId = object.teachId >>> 0;
            if (object.taskDatas) {
                if (!Array.isArray(object.taskDatas))
                    throw TypeError(".roitescape.PlayerInfo.taskDatas: array expected");
                message.taskDatas = [];
                for (var i = 0; i < object.taskDatas.length; ++i) {
                    if (typeof object.taskDatas[i] !== "object")
                        throw TypeError(".roitescape.PlayerInfo.taskDatas: object expected");
                    message.taskDatas[i] = $root.roitescape.TaskData.fromObject(object.taskDatas[i]);
                }
            }
            if (object.curTaskId != null)
                message.curTaskId = object.curTaskId >>> 0;
            if (object.taskLine) {
                if (!Array.isArray(object.taskLine))
                    throw TypeError(".roitescape.PlayerInfo.taskLine: array expected");
                message.taskLine = [];
                for (var i = 0; i < object.taskLine.length; ++i)
                    message.taskLine[i] = object.taskLine[i] >>> 0;
            }
            if (object.levelDatas) {
                if (!Array.isArray(object.levelDatas))
                    throw TypeError(".roitescape.PlayerInfo.levelDatas: array expected");
                message.levelDatas = [];
                for (var i = 0; i < object.levelDatas.length; ++i) {
                    if (typeof object.levelDatas[i] !== "object")
                        throw TypeError(".roitescape.PlayerInfo.levelDatas: object expected");
                    message.levelDatas[i] = $root.roitescape.LevelData.fromObject(object.levelDatas[i]);
                }
            }
            if (object.lastPlayerPos != null)
                message.lastPlayerPos = String(object.lastPlayerPos);
            if (object.lastLevelId != null)
                message.lastLevelId = object.lastLevelId >>> 0;
            if (object.beeDatas) {
                if (!Array.isArray(object.beeDatas))
                    throw TypeError(".roitescape.PlayerInfo.beeDatas: array expected");
                message.beeDatas = [];
                for (var i = 0; i < object.beeDatas.length; ++i) {
                    if (typeof object.beeDatas[i] !== "object")
                        throw TypeError(".roitescape.PlayerInfo.beeDatas: object expected");
                    message.beeDatas[i] = $root.roitescape.BeeData.fromObject(object.beeDatas[i]);
                }
            }
            if (object.beeSpeedLv != null)
                message.beeSpeedLv = object.beeSpeedLv >>> 0;
            if (object.containLv != null)
                message.containLv = object.containLv >>> 0;
            if (object.hurtLv != null)
                message.hurtLv = object.hurtLv >>> 0;
            if (object.buyBeeTimes != null)
                message.buyBeeTimes = object.buyBeeTimes >>> 0;
            if (object.playerSkillDatas) {
                if (!Array.isArray(object.playerSkillDatas))
                    throw TypeError(".roitescape.PlayerInfo.playerSkillDatas: array expected");
                message.playerSkillDatas = [];
                for (var i = 0; i < object.playerSkillDatas.length; ++i) {
                    if (typeof object.playerSkillDatas[i] !== "object")
                        throw TypeError(".roitescape.PlayerInfo.playerSkillDatas: object expected");
                    message.playerSkillDatas[i] = $root.roitescape.PlayerSkillData.fromObject(object.playerSkillDatas[i]);
                }
            }
            if (object.speedUpOpen != null)
                message.speedUpOpen = object.speedUpOpen >>> 0;
            if (object.strongeUpOpen != null)
                message.strongeUpOpen = object.strongeUpOpen >>> 0;
            if (object.backHomeOpen != null)
                message.backHomeOpen = object.backHomeOpen >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roitescape.PlayerInfo
         * @static
         * @param {roitescape.PlayerInfo} message PlayerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ownSkinDetail = [];
                object.taskDatas = [];
                object.taskLine = [];
                object.levelDatas = [];
                object.beeDatas = [];
                object.playerSkillDatas = [];
            }
            if (options.defaults) {
                object.openID = "";
                object.sessID = "";
                object.userID = "";
                object.lastSaveTime = 0;
                object.nickname = "";
                object.sex = 0;
                object.headUrl = "";
                object.shareTimesOfToday = 0;
                object.recordDayOfShareTimes = 0;
                object.advTimesOfToday = 0;
                object.recordDayOfAdvTimes = 0;
                object.setting = null;
                object.totalShareTimes = 0;
                object.totalAdvTimes = 0;
                object.redGift = null;
                object.coin = "";
                object.totalCoin = "";
                object.levelID = 0;
                object.totalLevelCount = 0;
                object.continueLevel = 0;
                object.skinId = 0;
                object.diam = "";
                object.curSginDay = 0;
                object.curSginWeekCount = 0;
                object.lastSginYear = "";
                object.lastGetPowerTime = 0;
                object.power = 0;
                object.lastViewAdGetPowerTime = 0;
                object.todayViewAdGetPowerTimes = 0;
                object.todayTurntableTimes = 0;
                object.isShowSubscribeApp = 0;
                object.curDailyTaskId = 0;
                object.dailTaskSgin = 0;
                object.dailTaskTLevel = 0;
                object.curMoney = "";
                object.loginDays = 0;
                object.lastGetRedTimers = 0;
                object.curGetRedTimers = 0;
                object.dailyTaskBeginTime = 0;
                object.todayDiamGetPowerTimes = 0;
                object.todayShowInsertAdCount = 0;
                object.isShowTeach = 0;
                object.extraPowerCount = 0;
                object.getAdGoldTimes = 0;
                object.teachId = 0;
                object.curTaskId = 0;
                object.lastPlayerPos = "";
                object.lastLevelId = 0;
                object.beeSpeedLv = 0;
                object.containLv = 0;
                object.hurtLv = 0;
                object.buyBeeTimes = 0;
                object.speedUpOpen = 0;
                object.strongeUpOpen = 0;
                object.backHomeOpen = 0;
            }
            if (message.openID != null && message.hasOwnProperty("openID"))
                object.openID = message.openID;
            if (message.sessID != null && message.hasOwnProperty("sessID"))
                object.sessID = message.sessID;
            if (message.userID != null && message.hasOwnProperty("userID"))
                object.userID = message.userID;
            if (message.lastSaveTime != null && message.hasOwnProperty("lastSaveTime"))
                object.lastSaveTime = message.lastSaveTime;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.headUrl != null && message.hasOwnProperty("headUrl"))
                object.headUrl = message.headUrl;
            if (message.shareTimesOfToday != null && message.hasOwnProperty("shareTimesOfToday"))
                object.shareTimesOfToday = message.shareTimesOfToday;
            if (message.recordDayOfShareTimes != null && message.hasOwnProperty("recordDayOfShareTimes"))
                object.recordDayOfShareTimes = message.recordDayOfShareTimes;
            if (message.advTimesOfToday != null && message.hasOwnProperty("advTimesOfToday"))
                object.advTimesOfToday = message.advTimesOfToday;
            if (message.recordDayOfAdvTimes != null && message.hasOwnProperty("recordDayOfAdvTimes"))
                object.recordDayOfAdvTimes = message.recordDayOfAdvTimes;
            if (message.setting != null && message.hasOwnProperty("setting"))
                object.setting = $root.roitescape.SettingConfig.toObject(message.setting, options);
            if (message.totalShareTimes != null && message.hasOwnProperty("totalShareTimes"))
                object.totalShareTimes = message.totalShareTimes;
            if (message.totalAdvTimes != null && message.hasOwnProperty("totalAdvTimes"))
                object.totalAdvTimes = message.totalAdvTimes;
            if (message.redGift != null && message.hasOwnProperty("redGift"))
                object.redGift = $root.roitescape.RedGiftConfig.toObject(message.redGift, options);
            if (message.coin != null && message.hasOwnProperty("coin"))
                object.coin = message.coin;
            if (message.totalCoin != null && message.hasOwnProperty("totalCoin"))
                object.totalCoin = message.totalCoin;
            if (message.levelID != null && message.hasOwnProperty("levelID"))
                object.levelID = message.levelID;
            if (message.totalLevelCount != null && message.hasOwnProperty("totalLevelCount"))
                object.totalLevelCount = message.totalLevelCount;
            if (message.continueLevel != null && message.hasOwnProperty("continueLevel"))
                object.continueLevel = message.continueLevel;
            if (message.skinId != null && message.hasOwnProperty("skinId"))
                object.skinId = message.skinId;
            if (message.ownSkinDetail && message.ownSkinDetail.length) {
                object.ownSkinDetail = [];
                for (var j = 0; j < message.ownSkinDetail.length; ++j)
                    object.ownSkinDetail[j] = $root.roitescape.SkinData.toObject(message.ownSkinDetail[j], options);
            }
            if (message.diam != null && message.hasOwnProperty("diam"))
                object.diam = message.diam;
            if (message.curSginDay != null && message.hasOwnProperty("curSginDay"))
                object.curSginDay = message.curSginDay;
            if (message.curSginWeekCount != null && message.hasOwnProperty("curSginWeekCount"))
                object.curSginWeekCount = message.curSginWeekCount;
            if (message.lastSginYear != null && message.hasOwnProperty("lastSginYear"))
                object.lastSginYear = message.lastSginYear;
            if (message.lastGetPowerTime != null && message.hasOwnProperty("lastGetPowerTime"))
                object.lastGetPowerTime = message.lastGetPowerTime;
            if (message.power != null && message.hasOwnProperty("power"))
                object.power = message.power;
            if (message.lastViewAdGetPowerTime != null && message.hasOwnProperty("lastViewAdGetPowerTime"))
                object.lastViewAdGetPowerTime = message.lastViewAdGetPowerTime;
            if (message.todayViewAdGetPowerTimes != null && message.hasOwnProperty("todayViewAdGetPowerTimes"))
                object.todayViewAdGetPowerTimes = message.todayViewAdGetPowerTimes;
            if (message.todayTurntableTimes != null && message.hasOwnProperty("todayTurntableTimes"))
                object.todayTurntableTimes = message.todayTurntableTimes;
            if (message.isShowSubscribeApp != null && message.hasOwnProperty("isShowSubscribeApp"))
                object.isShowSubscribeApp = message.isShowSubscribeApp;
            if (message.curDailyTaskId != null && message.hasOwnProperty("curDailyTaskId"))
                object.curDailyTaskId = message.curDailyTaskId;
            if (message.dailTaskSgin != null && message.hasOwnProperty("dailTaskSgin"))
                object.dailTaskSgin = message.dailTaskSgin;
            if (message.dailTaskTLevel != null && message.hasOwnProperty("dailTaskTLevel"))
                object.dailTaskTLevel = message.dailTaskTLevel;
            if (message.curMoney != null && message.hasOwnProperty("curMoney"))
                object.curMoney = message.curMoney;
            if (message.loginDays != null && message.hasOwnProperty("loginDays"))
                object.loginDays = message.loginDays;
            if (message.lastGetRedTimers != null && message.hasOwnProperty("lastGetRedTimers"))
                object.lastGetRedTimers = message.lastGetRedTimers;
            if (message.curGetRedTimers != null && message.hasOwnProperty("curGetRedTimers"))
                object.curGetRedTimers = message.curGetRedTimers;
            if (message.dailyTaskBeginTime != null && message.hasOwnProperty("dailyTaskBeginTime"))
                object.dailyTaskBeginTime = message.dailyTaskBeginTime;
            if (message.todayDiamGetPowerTimes != null && message.hasOwnProperty("todayDiamGetPowerTimes"))
                object.todayDiamGetPowerTimes = message.todayDiamGetPowerTimes;
            if (message.todayShowInsertAdCount != null && message.hasOwnProperty("todayShowInsertAdCount"))
                object.todayShowInsertAdCount = message.todayShowInsertAdCount;
            if (message.isShowTeach != null && message.hasOwnProperty("isShowTeach"))
                object.isShowTeach = message.isShowTeach;
            if (message.extraPowerCount != null && message.hasOwnProperty("extraPowerCount"))
                object.extraPowerCount = message.extraPowerCount;
            if (message.getAdGoldTimes != null && message.hasOwnProperty("getAdGoldTimes"))
                object.getAdGoldTimes = message.getAdGoldTimes;
            if (message.teachId != null && message.hasOwnProperty("teachId"))
                object.teachId = message.teachId;
            if (message.taskDatas && message.taskDatas.length) {
                object.taskDatas = [];
                for (var j = 0; j < message.taskDatas.length; ++j)
                    object.taskDatas[j] = $root.roitescape.TaskData.toObject(message.taskDatas[j], options);
            }
            if (message.curTaskId != null && message.hasOwnProperty("curTaskId"))
                object.curTaskId = message.curTaskId;
            if (message.taskLine && message.taskLine.length) {
                object.taskLine = [];
                for (var j = 0; j < message.taskLine.length; ++j)
                    object.taskLine[j] = message.taskLine[j];
            }
            if (message.levelDatas && message.levelDatas.length) {
                object.levelDatas = [];
                for (var j = 0; j < message.levelDatas.length; ++j)
                    object.levelDatas[j] = $root.roitescape.LevelData.toObject(message.levelDatas[j], options);
            }
            if (message.lastPlayerPos != null && message.hasOwnProperty("lastPlayerPos"))
                object.lastPlayerPos = message.lastPlayerPos;
            if (message.lastLevelId != null && message.hasOwnProperty("lastLevelId"))
                object.lastLevelId = message.lastLevelId;
            if (message.beeDatas && message.beeDatas.length) {
                object.beeDatas = [];
                for (var j = 0; j < message.beeDatas.length; ++j)
                    object.beeDatas[j] = $root.roitescape.BeeData.toObject(message.beeDatas[j], options);
            }
            if (message.beeSpeedLv != null && message.hasOwnProperty("beeSpeedLv"))
                object.beeSpeedLv = message.beeSpeedLv;
            if (message.containLv != null && message.hasOwnProperty("containLv"))
                object.containLv = message.containLv;
            if (message.hurtLv != null && message.hasOwnProperty("hurtLv"))
                object.hurtLv = message.hurtLv;
            if (message.buyBeeTimes != null && message.hasOwnProperty("buyBeeTimes"))
                object.buyBeeTimes = message.buyBeeTimes;
            if (message.playerSkillDatas && message.playerSkillDatas.length) {
                object.playerSkillDatas = [];
                for (var j = 0; j < message.playerSkillDatas.length; ++j)
                    object.playerSkillDatas[j] = $root.roitescape.PlayerSkillData.toObject(message.playerSkillDatas[j], options);
            }
            if (message.speedUpOpen != null && message.hasOwnProperty("speedUpOpen"))
                object.speedUpOpen = message.speedUpOpen;
            if (message.strongeUpOpen != null && message.hasOwnProperty("strongeUpOpen"))
                object.strongeUpOpen = message.strongeUpOpen;
            if (message.backHomeOpen != null && message.hasOwnProperty("backHomeOpen"))
                object.backHomeOpen = message.backHomeOpen;
            return object;
        };

        /**
         * Converts this PlayerInfo to JSON.
         * @function toJSON
         * @memberof roitescape.PlayerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerInfo;
    })();

    return roitescape;
})();

var roitescape = $root.roitescape;
export {roitescape as default};