import DailyTaskMgr from "../Mgr/DailyTaskMgr";
import GameMgr from "../Mgr/GameMgr";
import Tools from "../UIFrame/Tools";

import DailyTaskRewardItem from "./DailyTaskRewardItem";
import ItemBase from "./ItemBase";

export default class DaliyTaskItem extends ItemBase {
    constructor() {
        super();
        this.viewProp = new Object();
        this.data = null;

    }

    init() {
        super.init();

        this.viewProp.m_getBtn.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_getBtn, () => {
                if (!DailyTaskMgr.getIns().canGetReward(this.data.id)) {
                    console.error("数据出错!");
                    return;
                }

                DailyTaskMgr.getIns().getTaskReward(this.data.id);
                //刷新list
                let dailyTaskView=GameMgr.getUIMgr().getPageByName(GameMgr.getUIName().DaliyTaskView);
                if(dailyTaskView){
                    dailyTaskView.refreshList();
                }
            });
        });

        this.viewProp.m_dont_reach.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_dont_reach, () => {
                G_PlatHelper.showToast("任务尚未完成!");

            });
        });

        this.viewProp.m_hasGet.on(Laya.Event.CLICK, this, () => {
            Tools.getIns().btnAction(this.viewProp.m_hasGet, () => {
                G_PlatHelper.showToast("任务奖励已领取!");
            });
        });

        this.viewProp.m_reward_list.renderHandler = new Laya.Handler(this, this.rewardRender);
    }

    rewardRender(cell, index) {
        let mgr = cell.getComponent(DailyTaskRewardItem);
        if (!mgr) {
            mgr = cell.addComponent(DailyTaskRewardItem);
            mgr.init();
        }

        mgr.setData(this.viewProp.m_reward_list.getItem(index));
    }

    setData(data) {
        super.setData(data);

        let taskData = GameMgr.getPlayerInfo().getTaskData(data.id);
        this.viewProp.m_getBtn.visible = taskData.state == 1;
        this.viewProp.m_dont_reach.visible = taskData.state == 0;
        this.viewProp.m_hasGet.visible = taskData.state == 2;
        this.viewProp.m_taskname.text = data.taskName;
        this.viewProp.m_decs.text=DailyTaskMgr.getIns().getTaskDecs(data.taskDecs,data.para1,data.para2)
        let tIndex = DailyTaskMgr.getIns().getIdInLineIndex(data.id);
        let cIndex = DailyTaskMgr.getIns().getIdInLineIndex(DailyTaskMgr.getIns().getTaskId());

        this.owner.gray = tIndex > cIndex;

        let rewardObj = DailyTaskMgr.getIns().getRewardData(data.taskReward);

        this.viewProp.m_reward_list.array = rewardObj;




    }
}