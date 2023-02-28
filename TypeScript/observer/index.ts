export {};

const JobPost = (title: string) => ({
  title,
});

interface Subscriber {
  notify(jobPost: ReturnType<typeof JobPost>): void;
}

class JobSeeker implements Subscriber {
  constructor(private name: string) {}

  notify(jobPost: ReturnType<typeof JobPost>) {
    console.log(
      this.name,
      "has been notified of a new posting :",
      jobPost.title
    );
  }
}

class JobBoard {
  constructor(private subscribers: Subscriber[] = []) {}

  subscribe(jobSeeker: JobSeeker) {
    this.subscribers.push(jobSeeker);
  }

  addJob(jobPosting: ReturnType<typeof JobPost>) {
    this.subscribers.forEach((subscriber) => {
      subscriber.notify(jobPosting);
    });
  }
}

const jonDoe = new JobSeeker("John Doe");
const janeDoe = new JobSeeker("Jane Doe");
const kaneDoe = new JobSeeker("Kane Doe");

const jobBoard = new JobBoard();

//  kaneDoeは登録されていないので、通知されない
jobBoard.subscribe(jonDoe);
jobBoard.subscribe(janeDoe);

jobBoard.addJob(JobPost("Software Engineer"));
