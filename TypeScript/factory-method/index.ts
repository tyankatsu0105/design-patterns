abstract class Position {
  public abstract askQuestions(): void;
}
/**
 * base class
 */
class Developer extends Position {
  askQuestions() {
    console.log("Asking about design patterns!");
  }
}
/**
 * base class
 */
class CommunityExecutive extends Position {
  askQuestions() {
    console.log("Asking about community building");
  }
}

abstract class AbstractHiringManager {
  public takeInterview() {
    const interviewer = this.makeInterviewer();
    interviewer.askQuestions();
  }
  /**
   * factory method
   */
  public abstract makeInterviewer(): Developer | CommunityExecutive;
}

class HiringManager extends AbstractHiringManager {
  /**
   * HiringManagerを継承したクラスがmakeInterviewer methodを実装する必要がある
   * 実装していなければ、この処理が走る
   */
  public makeInterviewer(): Developer | CommunityExecutive {
    throw new Error("Method not implemented.");
  }
}

/**
 * derived class
 */
class DevelopmentManager extends HiringManager {
  makeInterviewer() {
    return new Developer();
  }
}
/**
 * derived class
 */
class MarketingManager extends HiringManager {
  makeInterviewer() {
    return new CommunityExecutive();
  }
}

const devManager = new DevelopmentManager();
devManager.takeInterview(); // Output: Asking about design patterns

const marketingManager = new MarketingManager();
marketingManager.takeInterview(); // Output: Asking about community building.
