export async function ke2dairanization(str: string): Promise<string> {
  if (str === "松平 健") {
    return "ケツダイラ マン";
  }
  if (str === "草刈 正雄") {
    return "マサカリ クサオ";
  }
  return "";
}
