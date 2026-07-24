import { Link } from "react-router-dom";
import FadeIn from "../FadeIn";

// const STORIES = [
//   {
//     image:
//       'https://lh3.googleusercontent.com/aida-public/AB6AXuAl3BsmEQBny3oE2Cjzop-FtlXndd9m4UX6y0FOpo7ypd8JoqluyH6iwiLMUbtooVwYeRgqG39c9khBB5SHaNyiOh2UDMgv1-oVDccddikCJg2FBhYJKvkYEXu822YjM0R4capGfO0GAIP3tFPWW2QWVU9ImQ3kgjFmdB6-BulWKHjY0u2bVRvyvjsDd_FNRqGQ5zNj8mXG2i4f9EZh0_Zutx47RtvyuSgYRQwBW6gDgyIpJI4o9uKd_xZyNywOwRoi6dEd9lBmZP0',
//     imageAlt: 'Celebrating a milestone',
//     category: 'Milestone',
//     title: 'Over 100 Screenings Completed',
//     description:
//       'Last month, we reached a major milestone in our mission to serve the Richmond community.',
//     linkTo: '/news/over-100-screenings',
//     linkText: 'Read Story',
//   },
//   {
//     image:
//       'https://lh3.googleusercontent.com/aida-public/AB6AXuCLorFdMVK6VX6R_pcRmXa0nnrYuyyCwRBkUQMeOSjA75bxtd-Cg_jha7pmYL4M39hph2kyK9441IktkBjG_mdMyzqqLd-664DUt5KJAju7IuGZceATxb7ZHwC4aEGvDhnkUycam63GefJf_waY2X-iKAX4mP7yh6KOxD7y4weGFER2PhPIYUDf1FVLwxd_amwvYuPwMQW3XFKAwj6poA9yahJAz7f7gy0lqmTNM8n5Wco7_BLQTWo_CViMoVPCZ2Rr8z1cK7dKJ0k',
//     imageAlt: 'The new student leadership team',
//     category: 'Community',
//     title: 'New Leadership Team',
//     description:
//       'Welcoming our 2024 executive board, a group of dedicated students from across healthcare disciplines.',
//     linkTo: '/news',
//     linkText: 'Meet the Team',
//   },
// ]

const STORIES = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLorFdMVK6VX6R_pcRmXa0nnrYuyyCwRBkUQMeOSjA75bxtd-Cg_jha7pmYL4M39hph2kyK9441IktkBjG_mdMyzqqLd-664DUt5KJAju7IuGZceATxb7ZHwC4aEGvDhnkUycam63GefJf_waY2X-iKAX4mP7yh6KOxD7y4weGFER2PhPIYUDf1FVLwxd_amwvYuPwMQW3XFKAwj6poA9yahJAz7f7gy0lqmTNM8n5Wco7_BLQTWo_CViMoVPCZ2Rr8z1cK7dKJ0k",
    imageAlt: "incomplete",
    category: "category",
    title: "Title",
    description: "Description",
    linkTo: "/",
    linkText: "Link Text",
  },
];

function StoryCard({ story }) {
  return (
    <FadeIn
      large
      className="flex flex-col rounded-[24px] overflow-hidden bg-surface-container-lowest shadow-sm"
    >
      <div className="h-56 overflow-hidden">
        <img
          alt={story.imageAlt}
          className="w-full h-full object-cover"
          src={story.image}
        />
      </div>
      <div className="p-8">
        <span className="font-label-sm text-label-sm text-primary uppercase mb-2 block">
          {story.category}
        </span>
        <h4 className="font-headline-md text-headline-md text-on-background mb-3">
          {story.title}
        </h4>
        <p className="font-body-md text-body-md text-secondary mb-6">
          {story.description}
        </p>
        <Link
          className="font-label-md text-label-md text-primary hover:underline"
          to={story.linkTo}
        >
          {story.linkText}
        </Link>
      </div>
    </FadeIn>
  );
}

export default function NewsSection() {
  return (
    <section className="py-24 md:py-32" id="news">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop ">
        <p className="font-body-lg text-body-lg text-center text-[#FF0000] font-bold">
          -------------------- news section not ready --------------------
        </p>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <FadeIn large className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-4">
            Impact & Updates
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            Reflecting on our journey to make Richmond a healthier, more
            equitable city for everyone.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORIES.map((story) => (
            <StoryCard key={story.title} story={story} />
          ))}
        </div>

        <FadeIn large className="flex justify-center mt-12">
          <Link
            className="inline-flex items-center gap-2 px-8 py-3 border-[1.5px] border-[#2D2926] text-[#2D2926] rounded-full font-label-md text-label-md btn-active hover:bg-surface-container-low transition-all"
            //to="/news"
            to="/"
          >
            View All Stories
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
