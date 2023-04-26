﻿import { DictionaryResource } from '@/typings/index'

// 中国考试
const chinaExam: DictionaryResource[] = [
  {
    id: 'cet4',
    name: 'CET-4',
    description: '大学英语四级词库',
    category: '中国考试',
    tags: ['大学英语'],
    url: '/dicts/CET4_T.json',
    length: 2607,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'cet6',
    name: 'CET-6',
    description: '大学英语六级词库',
    category: '中国考试',
    tags: ['大学英语'],
    url: '/dicts/CET6_T.json',
    length: 2345,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'kaoyan',
    name: '考研',
    description: '研究生英语入学考试词库',
    category: '中国考试',
    tags: ['考研'],
    url: '/dicts/KaoYan_3_T.json',
    length: 3728,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'kaoyan_2024',
    name: '考研 2024',
    description: '研究生英语入学考试词库 2024',
    category: '中国考试',
    tags: ['考研'],
    url: '/dicts/KaoYan_2024.json',
    length: 3731,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'level4',
    name: '专四',
    description: '英语专业四级词库',
    category: '中国考试',
    tags: ['大学英语'],
    url: '/dicts/Level4luan_2_T.json',
    length: 4025,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'level8',
    name: '专八',
    description: '英语专业八级词库',
    category: '中国考试',
    tags: ['大学英语'],
    url: '/dicts/Level8luan_2_T.json',
    length: 12197,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'pets3',
    name: 'PETS',
    description: '全国英语等级考试常考词汇',
    category: '中国考试',
    tags: ['PET'],
    url: '/dicts/PETS_3.json',
    length: 1942,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'pets3-2023',
    name: 'PETS-2023',
    description: '全国英语等级考试常考词汇',
    category: '中国考试',
    tags: ['PET'],
    url: '/dicts/PETS3-2023.json',
    length: 4449,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: '4000_Essential_English_Words1',
    name: 'Essential Words',
    description: '4000 Essential English Words meaning',
    category: '中国考试',
    tags: ['其他'],
    url: '/dicts/4000_Essential_English_Words-meaning.json',
    length: 3600,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: '4000_Essential_English_Words2',
    name: 'Essential Words',
    description: '4000 Essential English Words sentence',
    category: '中国考试',
    tags: ['其他'],
    url: '/dicts/4000_Essential_English_Words-sentence.json',
    length: 3600,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'top_2000_English_Words',
    name: 'Top 2k words',
    description: 'The top 2000 words with the highest frequency',
    category: '中国考试',
    tags: ['其他'],
    url: '/dicts/top2000words.json',
    length: 1867,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'suffix word',
    name: 'suffix word',
    description: 'common suffix',
    category: '中国考试',
    tags: ['其他'],
    url: '/dicts/suffix_word.json',
    length: 126,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'word roots1',
    name: 'word roots1',
    description: 'common roots',
    category: '中国考试',
    tags: ['其他'],
    url: '/dicts/word_roots1.json',
    length: 369,
    language: 'en',
    languageCategory: 'en',
  },
]

// 国际考试
const internationalExam: DictionaryResource[] = [
  {
    id: 'gmat',
    name: 'GMAT',
    description: 'GMAT 词库',
    category: '国际考试',
    tags: ['GMAT'],
    url: '/dicts/GMAT_3_T.json',
    length: 3047,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'gre',
    name: 'GRE',
    description: 'GRE 词库',
    category: '国际考试',
    tags: ['GRE'],
    url: '/dicts/GRE_3_T.json',
    length: 6515,
    language: 'en',
    languageCategory: 'en',
  },

  {
    id: 'ielts',
    name: 'IELTS',
    description: '雅思词库',
    category: '国际考试',
    tags: ['IELTS'],
    url: '/dicts/IELTS_3_T.json',
    length: 3575,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'ieltsWang3',
    name: '雅思王C3',
    description: '雅思听力特别名词语料库',
    category: '国际考试',
    tags: ['IELTS'],
    url: '/dicts/IELTS_WANG_3.json',
    length: 1135,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'ieltsWang4',
    name: '雅思王C4',
    description: '雅思听力形容词副词语料库',
    category: '国际考试',
    tags: ['IELTS'],
    url: '/dicts/IELTS_WANG_4.json',
    length: 346,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'ieltsWang5',
    name: '雅思王C5',
    description: '吞音连读混合训练语料库',
    category: '国际考试',
    tags: ['IELTS'],
    url: '/dicts/IELTS_WANG_5.json',
    length: 1569,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'ieltsWang11',
    name: '雅思王C11',
    description: '综合测试',
    category: '国际考试',
    tags: ['IELTS'],
    url: '/dicts/IELTS_WANG_11.json',
    length: 1738,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'sat',
    name: 'SAT',
    description: '美国 SAT 考试词库',
    category: '国际考试',
    tags: ['SAT'],
    url: '/dicts/SAT_3_T.json',
    length: 4464,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'SATen',
    name: 'SAT en-en',
    description: 'SAT英英',
    category: '国际考试',
    tags: ['SAT'],
    url: '/dicts/SATen.json',
    length: 2681,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'toefl',
    name: 'TOEFL',
    description: '托福考试常见词',
    category: '国际考试',
    tags: ['TOEFL'],
    url: '/dicts/TOEFL_3_T.json',
    length: 4264,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'bec2',
    name: '商务英语',
    description: '商务英语常见词',
    category: '国际考试',
    tags: ['BEC'],
    url: '/dicts/BEC_2_T.json',
    length: 2753,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'bec3',
    name: 'BEC',
    description: 'BEC考试常见词',
    category: '国际考试',
    tags: ['BEC'],
    url: '/dicts/BEC_3_T.json',
    length: 2825,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'PTE_junior',
    name: 'PTE 基础词汇',
    description: '',
    category: '国际考试',
    tags: ['PTE'],
    url: '/dicts/PTE_junior.json',
    length: 2651,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'PTE_senior',
    name: 'PTE 高阶词汇',
    description: '',
    category: '国际考试',
    tags: ['PTE'],
    url: '/dicts/PTE_senior.json',
    length: 3170,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'PTE_FIB_R_junior',
    name: '阅读 FIB 基础机经词汇',
    description: '',
    category: '国际考试',
    tags: ['PTE'],
    url: '/dicts/PTE_FIB_R_junior.json',
    length: 941,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'PTE_FIB_R_senior',
    name: '阅读 FIB 高阶机经词汇',
    description: '',
    category: '国际考试',
    tags: ['PTE'],
    url: '/dicts/PTE_FIB_R_senior.json',
    length: 1272,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'PTE_WFD',
    name: 'WFD 机经词汇',
    description: '',
    category: '国际考试',
    tags: ['PTE'],
    url: '/dicts/PTE_WFD.json',
    length: 1212,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'PTE_FIB_L',
    name: '听力 FIB 机经词汇',
    description: '',
    category: '国际考试',
    tags: ['PTE'],
    url: '/dicts/PTE_FIB_L.json',
    length: 646,
    language: 'en',
    languageCategory: 'en',
  },
]

// 青少儿英语
const childrenEnglish: DictionaryResource[] = [
  {
    id: 'gaokao3500',
    name: '高考 3500 词',
    description: '高考常见词 3500',
    category: '青少年英语',
    tags: ['通用'],
    url: '/dicts/GaoKao_3500.json',
    length: 3893,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'nce1',
    name: '新概念英语-1',
    description: '新概念英语第一册',
    category: '青少年英语',
    tags: ['新概念英语'],
    url: '/dicts/NCE_1.json',
    length: 900,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'nce2',
    name: '新概念英语-2',
    description: '新概念英语第二册',
    category: '青少年英语',
    tags: ['新概念英语'],
    url: '/dicts/NCE_2.json',
    length: 858,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'nce3',
    name: '新概念英语-3',
    description: '新概念英语第三册',
    category: '青少年英语',
    tags: ['新概念英语'],
    url: '/dicts/NCE_3.json',
    length: 1052,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'nce4',
    name: '新概念英语-4',
    description: '新概念英语第四册',
    category: '青少年英语',
    tags: ['新概念英语'],
    url: '/dicts/NCE_4.json',
    length: 784,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'SHjuniormiddleOxford',
    name: '上海初中牛津词汇',
    description: '上海初中牛津词汇',
    category: '青少年英语',
    tags: ['牛津版'],
    url: '/dicts/OxfordVocabulary_juniorMiddleSH.json',
    length: 1270,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'san1',
    name: '三年级上',
    description: '人教版三年级上册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPXiaoXue3_1_T.json',
    length: 64,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'san2',
    name: '三年级下',
    description: '人教版三年级下册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPXiaoXue3_2_T.json',
    length: 72,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'si1',
    name: '四年级上',
    description: '人教版四年级上册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPXiaoXue4_1_T.json',
    length: 84,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'si2',
    name: '四年级下',
    description: '人教版四年级下册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPXiaoXue4_2_T.json',
    length: 104,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'wu1',
    name: '五年级上',
    description: '人教版五年级上册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPXiaoXue5_1_T.json',
    length: 131,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'wu2',
    name: '五年级下',
    description: '人教版五年级下册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPXiaoXue5_2_T.json',
    length: 156,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'liu1',
    name: '六年级上',
    description: '人教版六年级上册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPXiaoXue6_1_T.json',
    length: 130,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'liu2',
    name: '六年级下',
    description: '人教版六年级下册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPXiaoXue6_2_T.json',
    length: 108,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'qi1',
    name: '七年级上',
    description: '人教版七年级上册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPChuZhong7_1_T.json',
    length: 392,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'qi2',
    name: '七年级下',
    description: '人教版七年级下册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPChuZhong7_2_T.json',
    length: 492,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'ba1',
    name: '八年级上',
    description: '人教版八年级上册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPChuZhong8_1_T.json',
    length: 419,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'ba2',
    name: '八年级下',
    description: '人教版八年级下册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPChuZhong8_2_T.json',
    length: 466,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'jiu',
    name: '九年级',
    description: '人教版九年级全册',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPChuZhong9_1_T.json',
    length: 551,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong1',
    name: '高中必修1',
    description: '人教版高中必修1',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_1_T.json',
    length: 311,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong2',
    name: '高中必修2',
    description: '人教版高中必修2',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_2_T.json',
    length: 319,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong3',
    name: '高中必修3',
    description: '人教版高中必修3',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_3_T.json',
    length: 366,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong4',
    name: '高中必修4',
    description: '人教版高中必修4',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_4_T.json',
    length: 307,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong5',
    name: '高中必修5',
    description: '人教版高中必修5',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_5_T.json',
    length: 357,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong6',
    name: '高中选修6',
    description: '人教版高中选修6',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_6_T.json',
    length: 391,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong7',
    name: '高中选修7',
    description: '人教版高中选修7',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_7_T.json',
    length: 384,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong8',
    name: '高中选修8',
    description: '人教版高中选修8',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_8_T.json',
    length: 420,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong9',
    name: '高中选修9',
    description: '人教版高中选修9',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_9_T.json',
    length: 352,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong10',
    name: '高中选修10',
    description: '人教版高中选修10',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_10_T.json',
    length: 361,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'renjiaogaozhong11',
    name: '高中选修11',
    description: '人教版高中选修11',
    category: '青少年英语',
    tags: ['人教版'],
    url: '/dicts/PEPGaoZhong_11_T.json',
    length: 309,
    language: 'en',
    languageCategory: 'en',
  },

  {
    id: 'waiyan1',
    name: '外研七年级上册',
    description: '外研版七年级上册',
    category: '青少年英语',
    tags: ['外研版'],
    url: '/dicts/WaiYanSheChuZhong_1_T.json',
    length: 629,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'waiyan2',
    name: '外研七年级下册',
    description: '外研版七年级下册',
    category: '青少年英语',
    tags: ['外研版'],
    url: '/dicts/WaiYanSheChuZhong_2_T.json',
    length: 438,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'waiyan3',
    name: '外研八年级上册',
    description: '外研版八年级上册',
    category: '青少年英语',
    tags: ['外研版'],
    url: '/dicts/WaiYanSheChuZhong_3_T.json',
    length: 320,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'waiyan4',
    name: '外研八年级下册',
    description: '外研版八年级下册',
    category: '青少年英语',
    tags: ['外研版'],
    url: '/dicts/WaiYanSheChuZhong_4_T.json',
    length: 266,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'waiyan5',
    name: '外研九年级上册',
    description: '外研版九年级上册',
    category: '青少年英语',
    tags: ['外研版'],
    url: '/dicts/WaiYanSheChuZhong_5_T.json',
    length: 381,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'waiyan6',
    name: '外研九年级下册',
    description: '外研版九年级下册',
    category: '青少年英语',
    tags: ['外研版'],
    url: '/dicts/WaiYanSheChuZhong_6_T.json',
    length: 128,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi1',
    name: '高中必修1',
    description: '北师大版高中必修1',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_1_T.json',
    length: 226,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi2',
    name: '高中必修2',
    description: '北师大版高中必修2',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_2_T.json',
    length: 244,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi3',
    name: '高中必修3',
    description: '北师大版高中必修3',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_3_T.json',
    length: 295,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi4',
    name: '高中必修4',
    description: '北师大版高中必修4',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_4_T.json',
    length: 336,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi5',
    name: '高中必修5',
    description: '北师大版高中必修5',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_5_T.json',
    length: 327,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi6',
    name: '高中选修6',
    description: '北师大版高中选修6',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_6_T.json',
    length: 271,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi7',
    name: '高中选修7',
    description: '北师大版高中选修7',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_7_T.json',
    length: 334,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi8',
    name: '高中选修8',
    description: '北师大版高中选修8',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_8_T.json',
    length: 364,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi9',
    name: '高中选修9',
    description: '北师大版高中选修9',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_9_T.json',
    length: 299,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi10',
    name: '高中选修10',
    description: '北师大版高中选修10',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_10_T.json',
    length: 267,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'beishi11',
    name: '高中选修11',
    description: '北师大版高中选修11',
    category: '青少年英语',
    tags: ['北师大'],
    url: '/dicts/BeiShiGaoZhong_11_T.json',
    length: 330,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel1',
    name: 'EF-LEVEL-1',
    description: 'EF等级1',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_1.json',
    length: 297,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel2',
    name: 'EF-LEVEL-2',
    description: 'EF等级2',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_2.json',
    length: 353,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel3',
    name: 'EF-LEVEL-3',
    description: 'EF等级3',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_3.json',
    length: 172,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel4',
    name: 'EF-LEVEL-4',
    description: 'EF等级4',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_4.json',
    length: 178,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel5',
    name: 'EF-LEVEL-5',
    description: 'EF等级5',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_5.json',
    length: 172,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel6',
    name: 'EF-LEVEL-6',
    description: 'EF等级6',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_6.json',
    length: 172,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel7',
    name: 'EF-LEVEL-7',
    description: 'EF等级7',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_7.json',
    length: 172,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel8',
    name: 'EF-LEVEL-8',
    description: 'EF等级8',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_8.json',
    length: 172,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel9',
    name: 'EF-LEVEL-9',
    description: 'EF等级9',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_9.json',
    length: 165,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel10',
    name: 'EF-LEVEL-10',
    description: 'EF等级10',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_10.json',
    length: 174,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel11',
    name: 'EF-LEVEL-11',
    description: 'EF等级11',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_11.json',
    length: 176,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel12',
    name: 'EF-LEVEL-12',
    description: 'EF等级12',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_12.json',
    length: 170,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel13',
    name: 'EF-LEVEL-13',
    description: 'EF等级13',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_13.json',
    length: 172,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel14',
    name: 'EF-LEVEL-14',
    description: 'EF等级14',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_14.json',
    length: 171,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel15',
    name: 'EF-LEVEL-15',
    description: 'EF等级15',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_15.json',
    length: 168,
    language: 'en',
    languageCategory: 'en',
  },
  {
    id: 'eflevel16',
    name: 'EF-LEVEL-16',
    description: 'EF等级16',
    category: '青少年英语',
    tags: ['EF'],
    url: '/dicts/EF_LEVEL_16.json',
    length: 170,
    language: 'en',
    languageCategory: 'en',
  },
]
// 编程字典
const programming: DictionaryResource[] = [
  {
    id: 'coder',
    name: 'Coder Dict',
    description: '程序员常见单词词库',
    category: '代码练习',
    tags: ['通用'],
    url: '/dicts/it-words.json',
    length: 1700,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'childCode',
    name: '少儿 Python',
    description: '少儿 Python 常见词',
    category: '代码练习',
    tags: ['少儿编程', 'Python'],
    url: '/dicts/Child_python_code.json',
    length: 19,
    language: 'en',
    languageCategory: 'code',
  },
  {
    id: 'childCode002',
    name: '少儿 Python Turtle',
    description: '少儿 Python Turtle 常见词',
    category: '代码练习',
    tags: ['少儿编程', 'Python'],
    url: '/dicts/Child_python_turtle_code.json',
    length: 27,
    language: 'en',
    languageCategory: 'code',
  },
  {
    id: 'childCode003',
    name: '少儿 C++',
    description: '少儿 C++ 常见词',
    category: '代码练习',
    tags: ['少儿编程', 'C++'],
    url: '/dicts/Child_c++.json',
    length: 39,
    language: 'en',
    languageCategory: 'code',
  },

  {
    id: 'jsArray',
    name: 'JS: Array',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-array.json',
    length: 36,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'jsDate',
    name: 'JS: Date',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-date.json',
    length: 34,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'jsGlobal',
    name: 'JS: Global',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-global.json',
    length: 9,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'jsMapSet',
    name: 'JS: Map & Set',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-map-set.json',
    length: 16,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'jsMath',
    name: 'JS: Math',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-math.json',
    length: 38,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'jsNumber',
    name: 'JS: Number',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-number.json',
    length: 22,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'jsObject',
    name: 'JS: Object',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-object.json',
    length: 37,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'jsPromise',
    name: 'JS: Promise',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-promise.json',
    length: 9,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'jsString',
    name: 'JS: String',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['JavaScript'],
    url: '/dicts/js-string.json',
    length: 32,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-builtin',
    name: 'Python: Built-in',
    description: 'Python Built-in API',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-builtin.json',
    length: 65,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-array',
    name: 'Python: array',
    description: 'Python array API ',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-array.json',
    length: 11,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-date',
    name: 'Python: date',
    description: 'Python date API ',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-date.json',
    length: 39,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-file',
    name: 'Python: file',
    description: 'Python file API ',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-file.json',
    length: 21,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-class',
    name: 'Python: class',
    description: 'Python class API ',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-class.json',
    length: 13,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-set',
    name: 'Python: set',
    description: 'Python set API ',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-set.json',
    length: 29,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-math',
    name: 'Python: math',
    description: 'Python math API ',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-math.json',
    length: 37,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-string',
    name: 'Python: string',
    description: 'Python string API ',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-string.json',
    length: 40,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'python-system',
    name: 'Python: system',
    description: 'Python system API ',
    category: '代码练习',
    tags: ['Python'],
    url: '/dicts/python-sys.json',
    length: 24,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'javeArrayList',
    name: 'Java: ArrayList',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['Java'],
    url: '/dicts/java-arraylist.json',
    length: 25,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'javaCharacter',
    name: 'Java: Character',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['Java'],
    url: '/dicts/java-character.json',
    length: 8,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'javaHashmap',
    name: 'Java: Hashmap',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['Java'],
    url: '/dicts/java-hashmap.json',
    length: 22,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'javaLinkedList',
    name: 'Java: LinkedList',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['Java'],
    url: '/dicts/java-linkedlist.json',
    length: 25,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'javaString',
    name: 'Java: String',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['Java'],
    url: '/dicts/java-string.json',
    length: 48,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'javaStringBuffer',
    name: 'Java: StringBuffer',
    description: 'JavaScript API 词典',
    category: '代码练习',
    tags: ['Java'],
    url: '/dicts/java-stringBuffer.json',
    length: 20,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'linuxCommand',
    name: 'Linux',
    description: 'Linux Command',
    category: '代码练习',
    tags: ['Linux'],
    url: '/dicts/linux-command.json',
    length: 575,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'csharpList',
    name: 'C#: List API',
    description: 'C# List API',
    category: '代码练习',
    tags: ['C#'],
    url: '/dicts/csharp-list.json',
    length: 36,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'sql-lower-case',
    name: 'SQL: 常用语句 lower case',
    description: 'SQL 常用语句 小写',
    category: '代码练习',
    tags: ['SQL'],
    url: '/dicts/SQL_statement_lower-case.json',
    length: 12,
    language: 'code',
    languageCategory: 'code',
  },
  {
    id: 'sql-upper-case',
    name: 'SQL: 常用语句 upper case',
    description: 'SQL 常用语句 大写',
    category: '代码练习',
    tags: ['SQL'],
    url: '/dicts/SQL_statement_upper-case.json',
    length: 12,
    language: 'code',
    languageCategory: 'code',
  },
]

// 日语词典
const japaneseExam: DictionaryResource[] = [
  {
    id: 'japanese001',
    name: '日语常见词',
    description: '日语常用单词',
    category: '日语学习',
    tags: ['基础'],
    url: '/dicts/Japanesebasicword.json',
    length: 100,
    language: 'romaji',
    languageCategory: 'ja',
  },
  {
    id: 'japanese006',
    name: 'N1',
    description: '日语N1',
    category: '日语学习',
    tags: ['基础'],
    url: '/dicts/JapVocabList.N1.json',
    length: 3477,
    language: 'romaji',
    languageCategory: 'ja',
  },
  {
    id: 'japanese005',
    name: 'N2',
    description: '日语N2',
    category: '日语学习',
    tags: ['基础'],
    url: '/dicts/JapVocabList.N2.json',
    length: 1836,
    language: 'romaji',
    languageCategory: 'ja',
  },
  {
    id: 'japanese004',
    name: 'N3',
    description: '日语N3',
    category: '日语学习',
    tags: ['基础'],
    url: '/dicts/JapVocabList.N3.json',
    length: 1830,
    language: 'romaji',
    languageCategory: 'ja',
  },
  {
    id: 'japanese003',
    name: 'N4',
    description: '日语N4',
    category: '日语学习',
    tags: ['基础'],
    url: '/dicts/JapVocabList.N4.json',
    length: 635,
    language: 'romaji',
    languageCategory: 'ja',
  },
  {
    id: 'japanese002',
    name: 'N5',
    description: '日语N5',
    category: '日语学习',
    tags: ['基础'],
    url: '/dicts/JapVocabList.N5.json',
    length: 670,
    language: 'romaji',
    languageCategory: 'ja',
  },
]

// 德语词典
const germanExam: DictionaryResource[] = [
  {
    id: 'german2en',
    name: '德语 英译',
    description: '德语词汇, 英语翻译',
    category: '德语学习',
    tags: ['基础'],
    url: '/dicts/german2en.json',
    length: 5892,
    language: 'de',
    languageCategory: 'de',
  },
  {
    id: 'en2german',
    name: '英语 德译',
    description: '英语词汇，德语翻译',
    category: '德语学习',
    tags: ['基础'],
    url: '/dicts/en2german.json',
    length: 5025,
    language: 'en',
    languageCategory: 'de',
  },
]

/**
 * Built-in dictionaries in an array.
 * Why arrays? Because it keeps the order across browsers.
 */
export const dictionaries: DictionaryResource[] = [
  ...chinaExam,
  ...internationalExam,
  ...childrenEnglish,
  ...programming,
  ...japaneseExam,
  ...germanExam,

  // {
  //   id: 'zhtest',
  //   name: '中文测试',
  //   description: '中文测试词库',
  //   category: '测试',
  //   url: '/dicts/chinese_test.json',
  //   length: 27,
  //   language: 'zh',
  // },
  // {
  //   id: 'jptest',
  //   name: '日文测试',
  //   description: '日文测试词库',
  //   category: '测试',
  //   url: '/dicts/japanese_test.json',
  //   length: 20,
  //   language: 'ja',
  // },
]

/**
 * An object-map from dictionary IDs to dictionary themselves.
 */
export const idDictionaryMap: Record<string, DictionaryResource> = Object.fromEntries(dictionaries.map((dict) => [dict.id, dict]))
