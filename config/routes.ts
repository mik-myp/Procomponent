export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/layout',
    name: '布局',
    icon: 'crown',
    routes: [
      {
        path: 'prolayout',
        name: '高级布局',
        icon: 'smile',
        routes: [
          {
            path: 'BasedOnUsing',
            name: '基本使用',
            icon: 'smile',
            component: './layout/prolayout/BasedOnUsing',
          },
          {
            path: 'LoadMenuFromTheServer',
            name: '从服务器加载 menu',
            icon: 'smile',
            component: './layout/prolayout/LoadMenuFromTheServer',
          },
          {
            path: 'LoadMenuFromTheServerAndIcon',
            name: '从服务器加载 menu 并且使用 icon',
            icon: 'smile',
            component: './layout/prolayout/LoadMenuFromTheServerAndIcon',
          },
          {
            path: 'CustomizeTheMenuContent',
            name: '自定义 menu 的内容',
            icon: 'smile',
            component: './layout/prolayout/CustomizeTheMenuContent',
          },
          {
            path: 'CustomFooter',
            name: '自定义页脚',
            icon: 'smile',
            component: './layout/prolayout/CustomFooter',
          },
          {
            path: 'SearchMenu',
            name: '搜索菜单',
            icon: 'smile',
            component: './layout/prolayout/SearchMenu',
          },
          {
            path: 'MultipleRoutesCorrespondToAMenuItem',
            name: '多个路由对应一个菜单项',
            icon: 'smile',
            component: './layout/prolayout/MultipleRoutesCorrespondToAMenuItem',
          },
          {
            path: 'AllMenusAreOpenedByDefault',
            name: '默认打开所有菜单',
            icon: 'smile',
            component: './layout/prolayout/AllMenusAreOpenedByDefault',
          },
          {
            path: 'UsingIconFont',
            name: '使用 IconFont',
            icon: 'smile',
            component: './layout/prolayout/UsingIconFont',
          },
          {
            path: 'GhostMode',
            name: 'ghost 模式',
            icon: 'smile',
            component: './layout/prolayout/GhostMode',
          },
          {
            path: 'NestedLayout',
            name: '嵌套布局',
            icon: 'smile',
            component: './layout/prolayout/NestedLayout',
          },
          {
            path: 'CustomizedCollapsed',
            name: '自定义的 collapsed',
            icon: 'smile',
            component: './layout/prolayout/CustomizedCollapsed',
          },
          {
            path: 'TheBreadCrumbsAreShownAtTheTop',
            name: '面包屑显示在顶部',
            icon: 'smile',
            component: './layout/prolayout/TheBreadCrumbsAreShownAtTheTop',
          },
          {
            path: 'MultiLevelSiteNavigation',
            name: '多级站点导航',
            icon: 'smile',
            component: './layout/prolayout/MultiLevelSiteNavigation',
          },
          {
            path: 'ImmersiveNavigation',
            name: '沉浸式导航',
            icon: 'smile',
            component: './layout/prolayout/ImmersiveNavigation',
          },
          {
            path: 'PreventBad',
            name: '防止白屏',
            icon: 'smile',
            component: './layout/prolayout/PreventBad',
          },
        ],
      },
      {
        path: 'pagecontainer',
        name: '页容器',
        icon: 'smile',
        routes: [
          {
            path: 'BasicUse',
            name: '基本使用',
            icon: 'smile',
            component: './layout/pagecontainer/BasicUse',
          },
          {
            path: 'FixedHeader',
            name: '固定表头',
            icon: 'smile',
            component: './layout/pagecontainer/FixedHeader',
          },
          {
            path: 'HideTheCrumbs',
            name: '隐藏面包屑',
            icon: 'smile',
            component: './layout/pagecontainer/HideTheCrumbs',
          },
          {
            path: 'PageLoading',
            name: '页面加载中',
            icon: 'smile',
            component: './layout/pagecontainer/PageLoading',
          },
        ],
      },
      {
        path: 'procard',
        name: '高级卡片',
        icon: 'smile',
        routes: [
          {
            path: 'BasedCard',
            name: '基础卡片',
            icon: 'smile',
            component: './layout/procard/BasedCard',
          },
          {
            path: 'GridLayout',
            name: '栅格布局',
            icon: 'smile',
            component: './layout/procard/GridLayout',
          },
          {
            path: 'Responsive',
            name: '响应式',
            icon: 'smile',
            component: './layout/procard/Responsive',
          },
          {
            path: 'CardSegmentation',
            name: '卡片切分',
            icon: 'smile',
            component: './layout/procard/CardSegmentation',
          },
          {
            path: 'LeftAndRightColumns',
            name: '左右分栏',
            icon: 'smile',
            component: './layout/procard/LeftAndRightColumns',
          },
          {
            path: 'ComplexSegmentation',
            name: '复杂切分',
            icon: 'smile',
            component: './layout/procard/ComplexSegmentation',
          },
          {
            path: 'GridSpacing',
            name: '栅格间隔',
            icon: 'smile',
            component: './layout/procard/GridSpacing',
          },
          {
            path: 'MoreLineCard',
            name: '多行卡片',
            icon: 'smile',
            component: './layout/procard/MoreLineCard',
          },
          {
            path: 'GroupShow',
            name: '分组展示',
            icon: 'smile',
            component: './layout/procard/GroupShow',
          },
          {
            path: 'TheTitleHasADividingLine',
            name: '标题带分割线',
            icon: 'smile',
            component: './layout/procard/TheTitleHasADividingLine',
          },
          {
            path: 'Folding',
            name: '可折叠',
            icon: 'smile',
            component: './layout/procard/Folding',
          },
          {
            path: 'DeckExpansion',
            name: '卡片组展开',
            icon: 'smile',
            component: './layout/procard/DeckExpansion',
          },
          {
            path: 'CenterContent',
            name: '内容居中',
            icon: 'smile',
            component: './layout/procard/CenterContent',
          },
          {
            path: 'Loading',
            name: '加载中',
            icon: 'smile',
            component: './layout/procard/Loading',
          },
          {
            path: 'ActionItems',
            name: '操作项',
            icon: 'smile',
            component: './layout/procard/ActionItems',
          },
          {
            path: 'NoTitle',
            name: '无标题',
            icon: 'smile',
            component: './layout/procard/NoTitle',
          },
          {
            path: 'WithBorders',
            name: '带边框',
            icon: 'smile',
            component: './layout/procard/WithBorders',
          },
          {
            path: 'ToTheEffect',
            name: '浮出效果',
            icon: 'smile',
            component: './layout/procard/ToTheEffect',
          },
          {
            path: 'Tab',
            name: '页签',
            icon: 'smile',
            component: './layout/procard/Tab',
          },
          {
            path: 'CardTab',
            name: '卡片式页签',
            icon: 'smile',
            component: './layout/procard/CardTab',
          },
          {
            path: 'InsideTheCard',
            name: '内部卡片',
            icon: 'smile',
            component: './layout/procard/InsideTheCard',
          },
          {
            path: 'ExampleVerticalSteps',
            name: '竖向步骤示例',
            icon: 'smile',
            component: './layout/procard/ExampleVerticalSteps',
          },
        ],
      },
      {
        path: 'watermark',
        name: '水印组件',
        icon: 'smile',
        routes: [
          {
            path: 'LeadTheWatermark',
            name: '前置水印',
            icon: 'smile',
            component: './layout/watermark/LeadTheWatermark',
          },
          {
            path: 'TextWatermarking',
            name: '文字水印',
            icon: 'smile',
            component: './layout/watermark/TextWatermarking',
          },
          {
            path: 'ImageWatermarking',
            name: '图片水印',
            icon: 'smile',
            component: './layout/watermark/ImageWatermarking',
          },
          {
            path: 'CustomConfiguration',
            name: '自定义配置',
            icon: 'smile',
            component: './layout/watermark/CustomConfiguration',
          },
        ],
      },
      {
        path: 'statisticcard',
        name: '指标卡',
        icon: 'smile',
        routes: [
          {
            path: 'BasicUse ',
            name: '基本使用',
            icon: 'smile',
            component: './layout/statisticcard/BasicUse',
          },
          {
            path: 'OnlyTheChart ',
            name: '只有图表',
            icon: 'smile',
            component: './layout/statisticcard/OnlyTheChart',
          },
          {
            path: 'AdditionalIndicators ',
            name: '额外指标',
            icon: 'smile',
            component: './layout/statisticcard/AdditionalIndicators',
          },
          {
            path: 'PrimaryAndSecondaryRelations ',
            name: '总分/主次关系',
            icon: 'smile',
            component: './layout/statisticcard/PrimaryAndSecondaryRelations',
          },
          {
            path: 'PerformanceTargets ',
            name: '总分/业绩目标',
            icon: 'smile',
            component: './layout/statisticcard/PerformanceTargets',
          },
          {
            path: 'GroupIndicators ',
            name: '分组指标',
            icon: 'smile',
            component: './layout/statisticcard/GroupIndicators',
          },
          {
            path: 'GroupIndicatorsWithCharts ',
            name: '分组指标带图表',
            icon: 'smile',
            component: './layout/statisticcard/GroupIndicatorsWithCharts',
          },
          {
            path: 'FormulaCalculationIndex ',
            name: '公式计算指标',
            icon: 'smile',
            component: './layout/statisticcard/FormulaCalculationIndex',
          },
          {
            path: 'StateDisplay ',
            name: '状态展示',
            icon: 'smile',
            component: './layout/statisticcard/StateDisplay',
          },
          {
            path: 'IconToShow ',
            name: '图标展示',
            icon: 'smile',
            component: './layout/statisticcard/IconToShow',
          },
          {
            path: 'CardLayout ',
            name: '卡片布局',
            icon: 'smile',
            component: './layout/statisticcard/CardLayout',
          },
          {
            path: 'TheChartOnTheRightOrLeft ',
            name: '图表在右或左',
            icon: 'smile',
            component: './layout/statisticcard/TheChartOnTheRightOrLeft',
          },
          {
            path: 'IndicatorTabLinkage ',
            name: '指标页签联动',
            icon: 'smile',
            component: './layout/statisticcard/IndicatorTabLinkage',
          },
          {
            path: 'SequentialTrend ',
            name: '环比趋势',
            icon: 'smile',
            component: './layout/statisticcard/SequentialTrend',
          },
        ],
      },
      {
        path: 'checkcard',
        name: '多选卡片',
        icon: 'smile',
        routes: [
          {
            path: 'BasicUse',
            name: '基本使用',
            icon: 'smile',
            component: './layout/checkcard/BasicUse',
          },
          {
            path: 'RadioMode',
            name: '单选模式',
            icon: 'smile',
            component: './layout/checkcard/RadioMode',
          },
          {
            path: 'MultiselectMode',
            name: '多选模式',
            icon: 'smile',
            component: './layout/checkcard/MultiselectMode',
          },
          {
            path: 'DifferentSizes',
            name: '不同尺寸',
            icon: 'smile',
            component: './layout/checkcard/DifferentSizes',
          },
          {
            path: 'CustomSize',
            name: '自定义尺寸',
            icon: 'smile',
            component: './layout/checkcard/CustomSize',
          },
          {
            path: 'UseInForms',
            name: '表单中使用',
            icon: 'smile',
            component: './layout/checkcard/UseInForms',
          },
          {
            path: 'CombinationStyle',
            name: '组合样式',
            icon: 'smile',
            component: './layout/checkcard/CombinationStyle',
          },
          {
            path: 'CustomProfilePicture',
            name: '自定义头像',
            icon: 'smile',
            component: './layout/checkcard/CustomProfilePicture',
          },
          {
            path: 'CustomTitle',
            name: '自定义标题',
            icon: 'smile',
            component: './layout/checkcard/CustomTitle',
          },
          {
            path: 'CustomDescription',
            name: '自定义描述',
            icon: 'smile',
            component: './layout/checkcard/CustomDescription',
          },
          {
            path: 'DefaultChecked',
            name: '默认选中',
            icon: 'smile',
            component: './layout/checkcard/DefaultChecked',
          },
          {
            path: 'ActionBar',
            name: '操作栏',
            icon: 'smile',
            component: './layout/checkcard/ActionBar',
          },
          {
            path: 'ComponentLoading',
            name: '组件 Loading',
            icon: 'smile',
            component: './layout/checkcard/ComponentLoading',
          },
          {
            path: 'PureImageOptions',
            name: '纯图片选项',
            icon: 'smile',
            component: './layout/checkcard/PureImageOptions',
          },
          {
            path: 'OptionNotAvailable',
            name: '选项不可用',
            icon: 'smile',
            component: './layout/checkcard/OptionNotAvailable',
          },
          {
            path: 'OptionList',
            name: '选项列表',
            icon: 'smile',
            component: './layout/checkcard/OptionList',
          },
          {
            path: 'ApplicationListExample',
            name: '应用列表示例',
            icon: 'smile',
            component: './layout/checkcard/ApplicationListExample',
          },
          {
            path: 'Layout',
            name: '布局',
            icon: 'smile',
            component: './layout/checkcard/Layout',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/dataentry',
    name: '数据录入',
    icon: 'crown',
    routes: [
      {
        path: 'proform',
        name: '高级表单',
        icon: 'smile',
        routes: [
          {
            path: 'BasicUse',
            name: '基本使用',
            icon: 'smile',
            component: './dataentry/proform/BasicUse',
          },
          {
            path: 'LabelAndFormItemLayout',
            name: '标签与表单项布局',
            icon: 'smile',
            component: './dataentry/proform/LabelAndFormItemLayout',
          },
          {
            path: 'Login',
            name: '登录',
            icon: 'smile',
            component: './dataentry/proform/Login',
          },
          {
            path: 'FormLinkage',
            name: '表单联动',
            icon: 'smile',
            component: './dataentry/proform/FormLinkage',
          },
          {
            path: 'FormMethodCall',
            name: '表单方法调用',
            icon: 'smile',
            component: './dataentry/proform/FormMethodCall',
          },
          {
            path: 'SynchronizeSubmissionResultsURL',
            name: '同步提交结果到 url',
            icon: 'smile',
            component: './dataentry/proform/SynchronizeSubmissionResultsURL',
          },
          {
            path: 'Money',
            name: '金额',
            icon: 'smile',
            component: './dataentry/proform/Money',
          },
          {
            path: 'FixedFooter',
            name: '固定页脚',
            icon: 'smile',
            component: './dataentry/proform/FixedFooter',
          },
          {
            path: 'ProFormAndEditableTable',
            name: 'ProForm 和 EditableTable 同时使用',
            icon: 'smile',
            component: './dataentry/proform/ProFormAndEditableTable',
          },
        ],
      },
      {
        path: 'proformfields',
        name: '表单项',
        icon: 'smile',
        routes: [
          {
            path: 'FormItem',
            name: '表单项',
            component: './dataentry/proformfields/FormItem',
          },
          {
            path: 'QueryForm',
            name: '查询表单',
            component: './dataentry/proformfields/QueryForm',
          },
          {
            path: 'StructuredData',
            name: '结构化数据',
            component: './dataentry/proformfields/StructuredData',
          },
          {
            path: 'DateForm',
            name: '日期表单',
            component: './dataentry/proformfields/DateForm',
          },
          {
            path: 'UploadForm',
            name: '上传表单',
            component: './dataentry/proformfields/UploadForm',
          },
        ],
      },
      {
        path: 'proformlist',
        name: '数据结构化',
        icon: 'smile',
        routes: [
          {
            path: 'LinkageForm',
            name: '联动的 FormList',
            component: './dataentry/proformlist/LinkageForm',
          },
          {
            path: 'AdjustableButton',
            name: '可调整的新建按钮位置',
            component: './dataentry/proformlist/AdjustableButton',
          },
          {
            path: 'FormsAreNestedWithEachOther',
            name: '表单互相嵌套',
            component: './dataentry/proformlist/FormsAreNestedWithEachOther',
          },
          {
            path: 'ComplexLinkage',
            name: '复杂联动',
            component: './dataentry/proformlist/ComplexLinkage',
          },
          {
            path: 'BehaviorGuards',
            name: '行为守卫',
            component: './dataentry/proformlist/BehaviorGuards',
          },
          {
            path: 'RestrictionsOnAddingAndDeletingEntries',
            name: '增删条目限制',
            component: './dataentry/proformlist/RestrictionsOnAddingAndDeletingEntries',
          },
        ],
      },
      {
        path: 'proformdependency',
        name: '数据联动',
        icon: 'smile',
        routes: [
          {
            path: 'InterdependentForm',
            name: '互相依赖表单',
            component: './dataentry/proformdependency/InterdependentForm',
          },
          {
            path: 'GetFormDependentValues',
            name: '获取表单依赖值',
            component: './dataentry/proformdependency/GetFormDependentValues',
          },
        ],
      },
      {
        path: 'schemaform',
        name: 'JSON 表单',
        icon: 'smile',
        routes: [
          {
            path: 'JSONToGenerateTheForm',
            name: 'JSON 来生成表单',
            component: './dataentry/schemaform/JSONToGenerateTheForm',
          },
          {
            path: 'JSONGenerateStepForm',
            name: 'JSON 来生成分步表单',
            component: './dataentry/schemaform/JSONGenerateStepForm',
          },
          {
            path: 'EmbeddedProForm',
            name: '嵌入到 ProForm 中',
            component: './dataentry/schemaform/EmbeddedProForm',
          },
          {
            path: 'UsingProFormDependency',
            name: '使用 ProFormDependency',
            component: './dataentry/schemaform/UsingProFormDependency',
          },
          {
            path: 'CombineShouldUpdateFalseAndDependencies',
            name: '结合 shouldUpdate=false 和 dependencies 触发更新',
            component: './dataentry/schemaform/CombineShouldUpdateFalseAndDependencies',
          },
          {
            path: 'DynamicControlOfWhetherToRerender',
            name: '动态控制是否重渲染',
            component: './dataentry/schemaform/DynamicControlOfWhetherToRerender',
          },
        ],
      },
      {
        path: 'queryfilterandlightfilter',
        name: '筛选表单',
        icon: 'smile',
        routes: [
          {
            path: 'QueryFilter',
            name: '查询筛选',
            component: './dataentry/queryfilterandlightfilter/QueryFilter',
          },
          {
            path: 'QueryFilterFoldedByDefault',
            name: '查询筛选-默认收起',
            component: './dataentry/queryfilterandlightfilter/QueryFilterFoldedByDefault',
          },
          {
            path: 'QueryFilteringVerticalLayout',
            name: '查询筛选-垂直布局',
            component: './dataentry/queryfilterandlightfilter/QueryFilteringVerticalLayout',
          },
          {
            path: 'QueryFilterSearch',
            name: '查询筛选-搜索',
            component: './dataentry/queryfilterandlightfilter/QueryFilterSearch',
          },
          {
            path: 'LightweightScreening',
            name: '轻量筛选',
            component: './dataentry/queryfilterandlightfilter/LightweightScreening',
          },
          {
            path: 'LightweightFilterCustomFooter',
            name: '轻量筛选-自定义 footer',
            component: './dataentry/queryfilterandlightfilter/LightweightFilterCustomFooter',
          },
          {
            path: 'LightweightFilterBorderMode',
            name: '轻量筛选-边框模式',
            component: './dataentry/queryfilterandlightfilter/LightweightFilterBorderMode',
          },
          {
            path: 'LightFilterFoldMode',
            name: '轻量筛选-折叠模式',
            component: './dataentry/queryfilterandlightfilter/LightFilterFoldMode',
          },
        ],
      },
      {
        path: 'stepsform',
        name: '分步表单',
        icon: 'smile',
        routes: [
          {
            path: 'StepByStepForm',
            name: '分步表单',
            component: './dataentry/stepsform/StepByStepForm',
          },
          {
            path: 'StepFormVerticalMode',
            name: '分步表单垂直模式',
            component: './dataentry/stepsform/StepFormVerticalMode',
          },
          {
            path: 'CustomStepFormButtons',
            name: '自定义分步表单按钮',
            component: './dataentry/stepsform/CustomStepFormButtons',
          },
          {
            path: 'StepByStepFormMultipleCards',
            name: '分步表单-多卡片',
            component: './dataentry/stepsform/StepByStepFormMultipleCards',
          },
          {
            path: 'StepFormUsedWithModal',
            name: '分步表单-与 Modal 配合使用',
            component: './dataentry/stepsform/StepFormUsedWithModal',
          },
          {
            path: 'EditStepForm',
            name: '编辑场景下的分步表单',
            component: './dataentry/stepsform/EditStepForm',
          },
        ],
      },
      {
        path: 'modalanddrawer',
        name: '数据联动',
        icon: 'smile',
        routes: [
          {
            path: 'ModalForm',
            name: 'Modal 表单',
            component: './dataentry/modalanddrawer/ModalForm',
          },
          {
            path: 'DrawerForm',
            name: 'Drawer  表单',
            component: './dataentry/modalanddrawer/DrawerForm',
          },
          {
            path: 'ModalInModal',
            name: '嵌套浮层表单',
            component: './dataentry/modalanddrawer/ModalInModal',
          },
          {
            path: 'CustomModalFormButtons',
            name: '自定义 Modal 表单按钮',
            component: './dataentry/modalanddrawer/CustomModalFormButtons',
          },
          {
            path: 'UseVisibleAndOnVisibleChange',
            name: '使用 visible 和 onVisibleChange',
            component: './dataentry/modalanddrawer/UseVisibleAndOnVisibleChange',
          },
          {
            path: 'ResetTheForm',
            name: '重置表单',
            component: './dataentry/modalanddrawer/ResetTheForm',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/datashow',
    name: '数据展示',
    icon: 'crown',
    routes: [
      {
        path: 'protable',
        name: '高级表格',
        routes: [
          {
            path: 'QueryForm',
            name: '查询表格',
            component: './datashow/protable/QueryForm',
          },
          {
            path: 'QueryFormNoButton',
            name: '查询（无按钮）表格',
            component: './datashow/protable/QueryFormNoButton',
          },
          {
            path: 'NoQueryForm',
            name: '无查询表单',
            component: './datashow/protable/NoQueryForm',
          },
          {
            path: 'ReplaceQueryFormsWithLightweightFilters',
            name: '轻量筛选替换查询表单',
            component: './datashow/protable/ReplaceQueryFormsWithLightweightFilters',
          },
          {
            path: 'TableWithoutToolbars',
            name: '无 ToolBar 的表格',
            component: './datashow/protable/TableWithoutToolbars',
          },
          {
            path: 'MandatoryQueryForm',
            name: '必填的查询表单',
            component: './datashow/protable/MandatoryQueryForm',
          },
          {
            path: 'NestedTables',
            name: '嵌套表格',
            component: './datashow/protable/NestedTables',
          },
          {
            path: 'AboutStructure',
            name: '左右结构',
            component: './datashow/protable/AboutStructure',
          },
          {
            path: 'TableBatchOperation',
            name: '表格批量操作',
            component: './datashow/protable/TableBatchOperation',
          },
          {
            path: 'ThroughFormRef',
            name: '通过 formRef 来操作查询表单',
            component: './datashow/protable/ThroughFormRef',
          },
          {
            path: 'RTL',
            name: 'RTL',
            component: './datashow/protable/RTL',
          },
          {
            path: 'ControlledTableSettingsBar',
            name: '受控的表格设置栏',
            component: './datashow/protable/ControlledTableSettingsBar',
          },
          {
            path: 'FormThePolling',
            name: '表格轮询',
            component: './datashow/protable/FormThePolling',
          },
          {
            path: 'DateFormatter',
            name: 'dateFormatter - 日期格式化',
            component: './datashow/protable/DateFormatter',
          },
          {
            path: 'SearchFormCustom',
            name: '搜索表单自定义',
            component: './datashow/protable/SearchFormCustom',
          },
          {
            path: 'FormActionCustomization',
            name: '表单操作自定义',
            component: './datashow/protable/FormActionCustomization',
          },
          {
            path: 'ToolbarCustomization',
            name: 'Toolbar 自定义',
            component: './datashow/protable/ToolbarCustomization',
          },
          {
            path: 'TableBodyCustom',
            name: '表格主体自定义',
            component: './datashow/protable/TableBodyCustom',
          },
          {
            path: 'CardForm',
            name: '卡片表格',
            component: './datashow/protable/CardForm',
          },
          {
            path: 'BringTheirOwnKeyWords',
            name: '使用自带 keyWords 搜索的 table',
            component: './datashow/protable/BringTheirOwnKeyWords',
          },

          {
            path: 'CustomErrorBoundaries',
            name: '自定义错误边界',
            component: './datashow/protable/CustomErrorBoundaries',
          },
        ],
      },
      {
        path: 'editableprotable',
        name: '可编辑表格',
        routes: [
          {
            path: 'EditableTable',
            name: '可编辑表格',
            component: './datashow/editableprotable/EditableTable',
          },
          {
            path: 'CooperateWithFormItem',
            name: '与 FormItem 配合',
            component: './datashow/editableprotable/CooperateWithFormItem',
          },
          {
            path: 'LinksWithContentOutsideTheEditTable',
            name: '与编辑表格外的内容联动',
            component: './datashow/editableprotable/LinksWithContentOutsideTheEditTable',
          },
          {
            path: 'TableWithSubcolumnsIncreases',
            name: '有子列的表格增加',
            component: './datashow/editableprotable/TableWithSubcolumnsIncreases',
          },
          {
            path: 'CustomEditableTable',
            name: '自定义可编辑表格',
            component: './datashow/editableprotable/CustomEditableTable',
          },
          {
            path: 'RealTime',
            name: '实时保存的编辑表格',
            component: './datashow/editableprotable/RealTime',
          },
        ],
      },
      {
        path: 'dragsorttable',
        name: '拖动排序表格',
        routes: [
          {
            path: 'DragAndDropTheSorting',
            name: '拖拽排序',
            component: './datashow/dragsorttable/DragAndDropTheSorting',
          },
          {
            path: 'DragAndDropSortToEditTheTable',
            name: '拖拽排序编辑表格',
            component: './datashow/dragsorttable/DragAndDropSortToEditTheTable',
          },
        ],
      },
      {
        path: 'prolist',
        name: '高级列表',
        routes: [
          {
            path: 'BasicUse',
            name: '基本使用',
            component: './datashow/prolist/BasicUse',
          },
          {
            path: 'EditList',
            name: '编辑列表',
            component: './datashow/prolist/EditList',
          },
          {
            path: 'Supporting',
            name: '支持展开的列表',
            component: './datashow/prolist/Supporting',
          },
          {
            path: 'SupportSelected',
            name: '支持选中的列表',
            component: './datashow/prolist/SupportSelected',
          },
          {
            path: 'QueryList',
            name: '查询列表',
            component: './datashow/prolist/QueryList',
          },
          {
            path: 'FilteringAndAsynchronousRequests',
            name: '带筛选和异步请求的列表',
            component: './datashow/prolist/FilteringAndAsynchronousRequests',
          },
          {
            path: 'SizeAndDividingLine',
            name: '大小和分割线',
            component: './datashow/prolist/SizeAndDividingLine',
          },
          {
            path: 'TheLandscapeStyle',
            name: '竖排样式',
            component: './datashow/prolist/TheLandscapeStyle',
          },
          {
            path: 'SomePresetModes',
            name: '一些预设的模式',
            component: './datashow/prolist/SomePresetModes',
          },
          {
            path: 'TurnPage',
            name: '翻页',
            component: './datashow/prolist/TurnPage',
          },
          {
            path: 'CardList',
            name: '卡片列表',
            component: './datashow/prolist/CardList',
          },
        ],
      },
      {
        path: 'prodescriptions',
        name: '高级定义列表',
        routes: [
          {
            path: 'BasicUse',
            name: '基本使用',
            component: './datashow/prodescriptions/BasicUse',
          },
          {
            path: 'ArrayTypeDataIndex',
            name: '数组类型 dataIndex',
            component: './datashow/prodescriptions/ArrayTypeDataIndex',
          },
          {
            path: 'FormattingConfiguration',
            name: '格式化配置',
            component: './datashow/prodescriptions/FormattingConfiguration',
          },
          {
            path: 'RemoteRequestData',
            name: '远程请求数据',
            component: './datashow/prodescriptions/RemoteRequestData',
          },
          {
            path: 'ColumnsConfiguration',
            name: 'columns 配置',
            component: './datashow/prodescriptions/ColumnsConfiguration',
          },
          {
            path: 'DataSourceConfigurationData',
            name: 'dataSource 配置数据',
            component: './datashow/prodescriptions/DataSourceConfigurationData',
          },
          {
            path: 'EditableList',
            name: '可编辑的定义列表',
            component: './datashow/prodescriptions/EditableList',
          },
        ],
      },
    ],
  },
  {
    path: '/general',
    name: '通用',
    icon: 'crown',
    routes: [
      {
        path: 'proskeleton',
        name: '骨架屏',
        routes: [
          {
            path: 'List',
            name: 'List',
            component: './general/proskeleton/List',
          },
          {
            path: 'Result',
            name: '结果页',
            component: './general/proskeleton/Result',
          },
          {
            path: 'Descriptions',
            name: '详情页',
            component: './general/proskeleton/Descriptions',
          },
        ],
      },
      {
        path: 'profield',
        name: '原子组件',
        routes: [
          {
            path: 'DEMO',
            name: 'DEMO',
            component: './general/profield/DEMO',
          },
        ],
      },
    ],
  },
  {
    path: '/',
    redirect: '/layout/prolayout/BasedOnUsing',
  },
  {
    component: './404',
  },
];
