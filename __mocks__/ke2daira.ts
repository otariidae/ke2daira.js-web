const ke2daira = {
  ke2dairanization: async (str: string): Promise<string> => {
    if (str === "松平 健") {
      return "ケツダイラ マン";
    }
    if (str === "草刈 正雄") {
      return "マサカリ クサオ";
    }
    return "";
  },
};

export default ke2daira;
