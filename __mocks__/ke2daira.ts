type Ke2dairaModuleDef = {
  ke2dairanization: (str: string) => Promise<string>;
};
const ke2daira = jest.createMockFromModule<Ke2dairaModuleDef>("ke2daira");
ke2daira.ke2dairanization = async (str) => {
  if (str === "松平 健") {
    return "ケツダイラ マン";
  }
  if (str === "草刈 正雄") {
    return "マサカリ クサオ";
  }
  return "";
};
module.exports = ke2daira;
