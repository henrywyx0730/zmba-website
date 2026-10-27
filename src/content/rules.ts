export type DocumentParagraph = {
  type: "paragraph";
  text: string;
  lang?: "en" | "zh-Hans";
};

export type DocumentList = {
  type: "ordered-list" | "unordered-list";
  items: readonly (readonly DocumentBlock[])[];
  lang?: "en" | "zh-Hans";
};

export type DocumentBlock = DocumentParagraph | DocumentList;

export type PublishedRulesDocument = {
  id: "2025-26" | "code-of-conduct-2025";
  sourceTitle: string;
  indexTitle: string;
  description: string;
  edition: string;
  sourceFile: string;
  frontMatter: readonly DocumentParagraph[];
  trailingBlocks: readonly DocumentBlock[];
  sections: readonly {
    id: string;
    title: string;
    blocks: readonly DocumentBlock[];
  }[];
};

const paragraph = (text: string, lang: "en" | "zh-Hans" = "zh-Hans"): DocumentParagraph => ({
  type: "paragraph",
  text,
  lang,
});

const ordered = (...items: readonly (readonly DocumentBlock[])[]): DocumentList => ({
  type: "ordered-list",
  items,
});

const unordered = (...items: readonly (readonly DocumentBlock[])[]): DocumentList => ({
  type: "unordered-list",
  items,
});

export const publishedRulesDocuments = {
  "2025-26": {
    id: "2025-26",
    sourceTitle: "ZMBA 25-26赛季规则手册",
    indexTitle: "ZMBA 25–26赛季规则手册",
    description: "2025–26 Season Rulebook",
    edition: "2025–26 Season",
    sourceFile: "ZMBA 25-26赛季规则手册.docx",
    frontMatter: [
      paragraph("Zhongmei Basketball Association (ZMBA)", "en"),
      paragraph("Compiled by 吴昱贤 Henry", "en"),
      paragraph("Not just a game. It’s a legacy.", "en"),
      paragraph("ZMBA 是属于中美班篮球热爱者的精神据点，"),
      paragraph("既是竞技舞台，也是青春故事的写照。"),
    ],
    trailingBlocks: [],
    sections: [
      {
        id: "general-rules",
        title: "一、基本规则 General Rules  ",
        blocks: [
          paragraph("本规则参照 NBA 与 FIBA 标准，并结合学生篮球环境进行适当调整与简化。所有比赛均应在公平、尊重与安全的原则下进行。"),
          paragraph("This rulebook is based on NBA and FIBA standards, with appropriate adjustments and simplifications for the student basketball environment. All games shall be conducted under the principles of fairness, respect, and safety.", "en"),
        ],
      },
      {
        id: "fouls",
        title: "二、犯规Fouls",
        blocks: [
          ordered(
            [
              paragraph("非法身体接触：改变对方球员速度、加速度、方向、位置的身体接触"),
              paragraph("Illegal physical contact is defined as any contact that alters the opponent’s speed, acceleration, direction, or position.", "en"),
            ],
            [
              paragraph("个人犯规：当防守方在进攻球员未处于投篮动作中的情况下实施非法身体接触，则判罚个人犯规。若该节团队犯规数未达到上限，被犯规队获得一次边线发球机会；若进攻时钟少于14秒，则重置至14秒。若该节团队犯规数已达到上限，被犯规球员获得两次罚球机会。"),
              paragraph("A personal foul occurs when illegal physical contact is committed against an offensive player not in the act of shooting. If the team fouls have not reached the limit in the current quarter, the fouled team is awarded a throw-in from the sideline; if the shot clock shows fewer than 14 seconds, it shall be reset to 14 seconds. If the team fouls have reached the limit, the fouled player shall be awarded two free throws.", "en"),
            ],
            [
              paragraph("投篮犯规：当防守方在进攻球员投篮动作过程中产生非法身体接触，则判罚投篮犯规。若投篮未中，被犯规球员获得与投篮得分相应的罚球（两次或三次）。若投篮命中，进球有效并加罚一次罚球。"),
              paragraph("A shooting foul occurs when illegal contact is committed against a player in the act of shooting. If the shot is missed, the shooter shall be awarded free throws corresponding to the attempt (two or three). If the shot is made, the basket counts, and the player is awarded one additional free throw.", "en"),
            ],
            [
              paragraph("团队犯规：每节累计五次团队犯规后，对方在随后的普通犯规中均执行两次罚球。（团队犯规不包含进攻犯规）"),
              paragraph("After five team fouls in a quarter, all subsequent common fouls will result in two free throws. (Team fouls do not include offensive fouls)", "en"),
            ],
          ),
        ],
      },
      {
        id: "violations",
        title: "三、违例 Violations",
        blocks: [
          ordered(
            [
              paragraph("走步违例 Traveling：球员在持球移动时超过允许步数，或未能建立合法中枢脚。"),
              paragraph("A traveling violation occurs when a player moves illegally with the ball, taking too many steps without dribbling or failing to establish a legal pivot foot.", "en"),
            ],
            [
              paragraph("两次运球 Double Dribble：球员在结束运球后再次运球，或同时双手运球。"),
              paragraph("A double dribble occurs when a player dribbles again after stopping, or dribbles with both hands simultaneously.", "en"),
            ],
            [
              paragraph("三秒违例 Three-Second Violation：进攻球员在己方持球进攻时，不得连续三秒停留在对方禁区（罚球区）内。"),
              paragraph("如出现以下情况，则三秒重新计算："),
              unordered(
                [paragraph("进攻球员正在尝试离开禁区；")],
                [paragraph("进攻球员正在积极掩护或准备接球；")],
                [paragraph("当队友出手投篮时，三秒计时终止，若进攻篮板被控制后重新获得球权，则重新开始计算。")],
                [paragraph("若对方失去球权或进攻中断，则三秒计时同样终止。")],
              ),
              paragraph("An offensive player may not remain in the opponent’s restricted area (the paint) for more than three consecutive seconds while their team is in possession.", "en"),
              paragraph("The three-second count resets under the following conditions:", "en"),
              unordered(
                [paragraph("The offensive player is actively moving out of the paint.", "en")],
                [paragraph("The offensive player is actively setting a screen or preparing to receive the ball.", "en")],
                [paragraph("When a teammate attempts a shot, the count stops. If the offensive team regains possession via an offensive rebound, a new three-second count begins.", "en")],
                [paragraph("If team possession changes or the play is interrupted, the count also ends.", "en")],
              ),
            ],
            [
              paragraph("发球五秒违例：发界外球球员必须在五秒内将球掷入场内，否则判定违例。"),
              paragraph("The thrower must release the ball within five seconds of the referee placing it at their disposal.", "en"),
            ],
            [
              paragraph("罚球违例："),
              unordered(
                [paragraph("五秒违例：罚球员必须在五秒内完成出手；")],
                [paragraph("罚球未触及篮筐违例：若罚球未触及篮筐，则立即判罚违例。")],
                [
                  paragraph("提前进线违例："),
                  unordered(
                    [paragraph("站在禁区周围的五位球员以及执行罚球的球员不得在球触及篮圈前进入禁区。")],
                    [paragraph("站在三分线外的球员不得在球触及篮圈之前进入三分线。")],
                  ),
                ],
              ),
              paragraph("Free-Throw Violations:", "en"),
              unordered(
                [paragraph("Five-second violation: The free throw shooter must release the ball towards the basket within five seconds after the ball has been placed at his or her disposal.", "en")],
                [paragraph("Airball violation: If the free throw fails to touch the rim, it shall immediately be considered a violation.", "en")],
                [
                  paragraph("Lane violations:", "en"),
                  unordered(
                    [paragraph("The five players positioned along the lane lines, as well as the free throw shooter, may not enter the restricted area until the ball has touched the rim.", "en")],
                    [paragraph("Players positioned beyond the three-point line may not cross the three-point line until the ball has touched the rim.", "en")],
                  ),
                ],
              ),
            ],
            [
              paragraph("八秒违例 Eight-Second Violation：进攻方必须在八秒内将球推进至前场。"),
              paragraph("The offensive team must advance the ball into the frontcourt within eight seconds.", "en"),
            ],
            [
              paragraph("二十四秒违例 Shot Clock Violation：进攻方必须在二十四秒进攻时间内完成一次有效投篮（即触碰篮圈的投篮出手）。当篮球触及篮圈时，进攻时间少于14秒时，则进攻时钟重置至14秒"),
              paragraph("The offensive team must attempt a shot that hits the rim within 24 seconds. If the shot hits the rim and the offensive team regains possession with less than 14 seconds remaining, the shot clock is reset to 14 seconds.", "en"),
            ],
            [
              paragraph("回场违例 Backcourt Violation：进攻方在将球推进前场后，不得再将球返回后场。"),
              paragraph("Once the ball has been advanced into the frontcourt, the offensive team may not return it to the backcourt.", "en"),
            ],
          ),
        ],
      },
      {
        id: "technical-fouls",
        title: "四、技术犯规（计入团队犯规数） Technical Fouls",
        blocks: [
          ordered(
            [
              paragraph("技术犯规包括：对裁判或对手的不当言语或行为、挑衅动作、故意拖延比赛、违规进入场地等。"),
              paragraph("Technical fouls include unsportsmanlike language or gestures, taunting, delaying the game, and illegal substitutions.", "en"),
            ],
            [
              paragraph("处罚：对方执行一次罚球并保留球权。累计两次技术犯规的球员将被自动驱逐出场。"),
              paragraph("Penalty: one free throw awarded to the opponent plus possession. A player committing two technical fouls in a game shall be ejected.", "en"),
            ],
          ),
        ],
      },
      {
        id: "unsportsmanlike-flagrant",
        title: "五、违体犯规与恶意犯规 Unsportsmanlike & Flagrant Fouls",
        blocks: [
          ordered(
            [
              paragraph("违体犯规：球员以非正常篮球动作阻止对方，或做出危险性过大的防守动作。"),
              paragraph("Unsportsmanlike fouls involve non-basketball plays such as stopping a fast break by pulling or pushing or making excessive contact.", "en"),
            ],
            [
              paragraph("恶意犯规：严重危及对手安全的暴力动作，如挥肘击打头部、空中推人等。"),
              paragraph("Flagrant fouls involve violent acts endangering player safety, such as elbowing to the head or pushing an airborne player.", "en"),
            ],
            [
              paragraph("回看判定：当出现疑似违体或恶意犯规时，裁判员应暂停比赛并进行录像回看，最终判定为普通犯规、违体犯规或恶意犯规。"),
              paragraph("Review: In the event of a suspected unsportsmanlike or flagrant foul, referees shall stop play to review video and determine whether the act constitutes a common foul, an unsportsmanlike foul, or a flagrant foul.", "en"),
            ],
            [
              paragraph("处罚：均判给对方两次罚球并保留球权。若同一球员累计两次违体犯规，或出现恶意犯规，则立即驱逐出场。"),
              paragraph("Penalty: two free throws plus possession. Two unsportsmanlike fouls or one flagrant foul result in automatic ejection.", "en"),
            ],
          ),
        ],
      },
      {
        id: "disqualifying-fouls",
        title: "六、夺权犯规 Disqualifying Fouls",
        blocks: [
          ordered(
            [
              paragraph("夺权犯规是最严重的违规行为，包括打架斗殴、攻击裁判或观众、以及任何危及比赛秩序与安全的行为。"),
              paragraph("Disqualifying fouls include fighting, assaulting referees or spectators, and any act that endangers game integrity or safety.", "en"),
            ],
            [
              paragraph("处罚：立即驱逐出场，并至少自动停赛一场。情节严重者，可追加多场停赛或赛季禁赛。"),
              paragraph("Penalty: immediate ejection and a minimum one-game suspension. Severe cases may lead to extended suspension or season-long ban.", "en"),
            ],
          ),
        ],
      },
      {
        id: "coachs-challenge",
        title: "七、挑战规则 Coach’s Challenge",
        blocks: [
          ordered(
            [
              paragraph("每队在比赛开始时拥有一次挑战机会。若挑战成功，该次机会保留；若挑战失败，则扣除。"),
              paragraph("Each team begins the game with one challenge. If successful, the challenge is retained; if unsuccessful, it is lost.", "en"),
            ],
            [
              paragraph("每队全场比赛最多可使用三次挑战。"),
              paragraph("Each team may use a maximum of three challenges per game.", "en"),
            ],
            [
              paragraph("发起方式：由主教练或场上球员在暂停后伸出食指朝上作画圈动作，即视为正式提出挑战。"),
              paragraph("A challenge is initiated by the head coach or player on the floor signaling a circular motion with the index finger above the head.", "en"),
            ],
            [
              paragraph("可适用范围：出界判罚、是否犯规、两分或三分判定、底线球过程中的犯规（根据NBA 2024-25新规）。"),
              paragraph("Reviewable calls include out-of-bounds, foul or no foul, two-point or three-point attempts, and fouls discovered during baseline plays (per NBA 2024-25 rule update).", "en"),
            ],
          ),
        ],
      },
      {
        id: "final-authority",
        title: "八、最终解释权 Final Authority",
        blocks: [
          paragraph("所有判罚及规则解释权归属 ZMBA 当值裁判组。"),
          paragraph("All interpretations and rulings are at the sole discretion of the ZMBA officiating crew.", "en"),
        ],
      },
    ],
  },
  "code-of-conduct-2025": {
    id: "code-of-conduct-2025",
    sourceTitle: "ZMBA群规行为准则(2025 Edition)",
    indexTitle: "ZMBA群规行为准则（2025 Edition）",
    description: "Code of Conduct — 2025 Edition",
    edition: "2025 Edition",
    sourceFile: "ZMBA群规行为准则(2025 Edition).docx",
    frontMatter: [],
    trailingBlocks: [
      paragraph("ZMBA欢迎每一位热爱篮球的同学加入，但请记住：尊重，是最基本的底线。"),
    ],
    sections: [
      {
        id: "preface",
        title: "前言",
        blocks: [
          paragraph("为了营造一个和谐、尊重且积极的篮球交流环境，ZMBA特制定本《群规行为准则》。本准则适用于所有ZMBA成员，旨在明确基本行为规范，促进良好氛围与团队精神。"),
        ],
      },
      {
        id: "respect-others",
        title: "一、尊重他人",
        blocks: [
          paragraph("禁止发布带有人身攻击、侮辱、性别/身体/身份嘲讽等言论；"),
          paragraph("即使为“玩笑”，如超出尊重范围，同样视为违规。"),
        ],
      },
      {
        id: "civil-speech",
        title: "二、文明发言",
        blocks: [
          paragraph("严禁挑衅、引战、阴阳怪气、冷嘲热讽等破坏群体氛围的行为；"),
          paragraph("本群对粗话、脏话管理较为宽松，但严禁带有侮辱性质或针对个人的粗俗言辞；"),
          paragraph("讨论可以有分歧，但语言必须有分寸，尊重他人。"),
        ],
      },
      {
        id: "measures",
        title: "三、违反后的处理措施（由ZMBA管理组执行）",
        blocks: [
          paragraph("群内口头提醒一次；"),
          paragraph("禁言（1-3天）或移出群聊；"),
          paragraph("严重者暂停参与ZMBA所有活动（如比赛、选拔、集训等）；"),
          paragraph("情况特别恶劣者，将公开通报处理决定。"),
        ],
      },
      {
        id: "discussion",
        title: "四、理性讨论，适度玩梗",
        blocks: [
          paragraph("鼓励大家积极讨论比赛、球员表现及战术等篮球相关话题；"),
          paragraph("但请避免将讨论内容上升到对球员个人、球队整体或粉丝群体的攻击、嘲讽或人身攻击；"),
          paragraph("适度玩梗是欢迎的，但请尊重底线，避免过度挑衅或引发争执。"),
        ],
      },
      {
        id: "appeals",
        title: "五、申诉与沟通",
        blocks: [
          paragraph("如对处罚有异议，可向ZMBA管理组（包括群主ZMBA Official及现任总裁）提出申诉；"),
          paragraph("申诉需说明具体情况，管理组将尽快给予回复；"),
          paragraph("管理组鼓励成员理性沟通，积极配合调解。"),
        ],
      },
    ],
  },
} as const satisfies Record<PublishedRulesDocument["id"], PublishedRulesDocument>;
