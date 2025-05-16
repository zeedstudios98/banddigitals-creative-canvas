
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Calendar, ArrowRight, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "10 Web Design Trends That Will Dominate in 2023",
    excerpt: "Explore the cutting-edge design trends that are shaping the digital landscape and how you can implement them in your projects.",
    content: `
      <h2>Web Design Trends for 2023</h2>
      <p>As we move further into the digital age, web design continues to evolve at a rapid pace. Staying ahead of these trends is crucial for designers and businesses alike who want to create engaging, modern web experiences.</p>
      
      <h3>1. Immersive 3D Elements</h3>
      <p>Three-dimensional graphics and animations are becoming increasingly popular as they create depth and engagement. With improvements in web technologies, 3D elements are more accessible and performant than ever before.</p>
      
      <h3>2. Dark Mode Designs</h3>
      <p>Dark mode continues to gain traction, offering both aesthetic appeal and practical benefits like reduced eye strain and better battery life on mobile devices.</p>
      
      <h3>3. Minimalist Navigation</h3>
      <p>Simplified, intuitive navigation is replacing complex menu structures, focusing user attention on content and core user journeys.</p>
      
      <h3>4. Micro-Interactions</h3>
      <p>Small, subtle animations that provide feedback and enhance the user experience are becoming standard practice in polished web designs.</p>
      
      <h3>5. Glassmorphism</h3>
      <p>This design trend creates a frosted glass effect that adds depth and elegance to interfaces while maintaining readability and focus.</p>
      
      <h3>6. Voice User Interfaces</h3>
      <p>As voice technology becomes more sophisticated, integrating voice controls into web interfaces is becoming more common and expected.</p>
      
      <h3>7. Custom Illustrations</h3>
      <p>Unique, branded illustrations are replacing generic stock photography as businesses seek to differentiate themselves and create memorable visual identities.</p>
      
      <h3>8. Horizontal Scrolling</h3>
      <p>Breaking away from traditional vertical scrolling, horizontal layouts are creating novel and engaging user experiences for portfolios and product showcases.</p>
      
      <h3>9. Augmented Reality</h3>
      <p>AR integration is helping bridge the gap between digital and physical experiences, particularly valuable for e-commerce and educational websites.</p>
      
      <h3>10. Accessibility-First Design</h3>
      <p>Perhaps the most important trend is the growing focus on making websites accessible to all users, including those with disabilities. This isn't just good ethics—it's good business.</p>
      
      <h2>Implementing These Trends</h2>
      <p>While these trends offer exciting possibilities, it's important to implement them thoughtfully. Always consider your audience, brand, and goals before jumping on the latest trend. The most effective designs balance innovation with usability, ensuring that new features enhance rather than detract from the user experience.</p>
      
      <p>As we progress through 2023, we expect to see these trends evolve further, with increasing focus on personalization, sustainability, and the ethical use of design to influence user behavior.</p>
    `,
    category: "Web Design",
    date: "May 15, 2023",
    author: "Sarah Johnson",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=800&auto=format&fit=crop",
    featured: true
  },
  {
    id: 2,
    title: "The Psychology of Color in Branding: Choosing the Right Palette",
    excerpt: "Understand how color influences consumer perception and how to select the perfect color scheme for your brand identity.",
    content: `
      <h2>How Colors Impact Brand Perception</h2>
      <p>Color is one of the most powerful tools in a designer's arsenal, capable of influencing emotions, perceptions, and behaviors. When it comes to branding, color choices can communicate your brand's personality and values without a single word.</p>
      
      <h3>The Emotional Impact of Colors</h3>
      <p>Different colors evoke different emotional responses. Blue often conveys trust and reliability, which is why it's favored by many financial institutions and tech companies. Red stimulates excitement and urgency, making it popular for clearance sales and fast-food chains. Green suggests growth, health, and environmental consciousness, while yellow radiates optimism and warmth.</p>
      
      <h3>Cultural Considerations</h3>
      <p>It's essential to remember that color associations vary across cultures. White symbolizes purity and weddings in Western countries but is associated with mourning in many Eastern cultures. Similarly, red signifies luck and prosperity in China but may represent danger or stop in Western contexts.</p>
      
      <h3>Industry Context</h3>
      <p>Consider your industry when selecting colors. While breaking convention can help your brand stand out, there are often good reasons why certain industries gravitate toward particular colors. Healthcare often uses blue and white for their associations with cleanliness and trust, while organic food brands typically incorporate earthy greens and browns.</p>
      
      <h2>Creating Your Brand's Color Palette</h2>
      
      <h3>Primary, Secondary, and Accent Colors</h3>
      <p>A well-designed color palette typically includes 1-2 primary colors that dominate your brand materials, 2-3 secondary colors for support, and 1-2 accent colors for calls-to-action and highlights. This hierarchy helps create visual balance and directs user attention.</p>
      
      <h3>Color Harmony</h3>
      <p>There are several approaches to creating harmonious color combinations:</p>
      <ul>
        <li><strong>Monochromatic:</strong> Different shades and tints of a single color</li>
        <li><strong>Analogous:</strong> Colors that are adjacent to each other on the color wheel</li>
        <li><strong>Complementary:</strong> Colors opposite each other on the color wheel</li>
        <li><strong>Triadic:</strong> Three colors equally spaced around the color wheel</li>
      </ul>
      
      <h3>Accessibility Considerations</h3>
      <p>Ensure your color choices maintain sufficient contrast for readability and consider how they appear to people with color vision deficiencies. This inclusivity is not only ethical but also expands your brand's reach.</p>
      
      <h2>Testing Your Color Strategy</h2>
      <p>Before finalizing your brand color palette, test it across different mediums and contexts. Colors can appear differently in print versus digital, and on various screen types. Also, consider conducting A/B tests to gauge audience response to different color options for important brand elements.</p>
      
      <p>Remember that color is subjective, and while psychology provides valuable insights, the most important factor is how well your color choices align with your brand's specific personality and goals. When used consistently and thoughtfully, color becomes a powerful asset in creating a memorable and effective brand identity.</p>
    `,
    category: "Branding",
    date: "April 22, 2023",
    author: "Michael Chen",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "User-Centered Design: Creating Experiences That Convert",
    excerpt: "Learn how to design digital experiences that not only delight users but also drive meaningful business results.",
    content: `
      <h2>The Business Case for User-Centered Design</h2>
      <p>User-centered design isn't just about creating attractive interfaces—it's about developing experiences that align user goals with business objectives. When users can easily accomplish their tasks, businesses see higher conversion rates, increased customer satisfaction, and greater brand loyalty.</p>
      
      <h3>Understanding Your Users</h3>
      <p>Effective user-centered design begins with comprehensive research. Techniques like user interviews, surveys, analytics analysis, and usability testing provide insights into who your users are, what they need, and how they interact with your product or service.</p>
      
      <p>Developing detailed user personas helps teams maintain focus on real user needs rather than assumptions. These personas should include demographics, goals, pain points, and behavioral patterns based on actual research rather than stereotypes.</p>
      
      <h3>Mapping the User Journey</h3>
      <p>User journey mapping visualizes the complete experience a user has with your product or service, from initial awareness through long-term engagement. This process identifies:</p>
      <ul>
        <li>Key touchpoints where users interact with your brand</li>
        <li>Pain points that create friction</li>
        <li>Opportunities to exceed expectations</li>
        <li>Emotional responses throughout the journey</li>
      </ul>
      
      <h2>Design Principles That Drive Conversion</h2>
      
      <h3>Clarity Above All</h3>
      <p>Users should never have to guess what to do next. Clear content hierarchies, prominent calls-to-action, and intuitive navigation significantly impact conversion rates. When users understand what's being offered and how to get it, they're more likely to take the desired action.</p>
      
      <h3>Reduce Cognitive Load</h3>
      <p>Every decision a user must make adds cognitive load and increases the chance they'll abandon the process. Strategies to reduce this include:</p>
      <ul>
        <li>Breaking complex processes into manageable steps</li>
        <li>Using progressive disclosure to reveal information as needed</li>
        <li>Defaulting to the most common selections</li>
        <li>Eliminating unnecessary form fields</li>
      </ul>
      
      <h3>Build Trust Through Design</h3>
      <p>Users won't convert if they don't trust your site. Professional design, security indicators, social proof elements like reviews and testimonials, and transparent policies all contribute to a sense of trustworthiness that facilitates conversion.</p>
      
      <h2>Testing and Iteration</h2>
      <p>User-centered design is never truly finished. Continuous testing allows you to validate design decisions and identify areas for improvement. A/B testing, usability sessions, analytics analysis, and user feedback should inform ongoing iterations.</p>
      
      <p>Remember that small improvements can yield significant results. Amazon once reported a $300 million annual revenue increase from simply changing a button, demonstrating the tangible business impact of thoughtful, user-centered design decisions.</p>
    `,
    category: "UI/UX",
    date: "March 18, 2023",
    author: "Alexis Rivera",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Content-First Design: Why Your Words Matter More Than Ever",
    excerpt: "Discover why starting with content strategy leads to more effective design solutions and better user experiences.",
    content: `
      <h2>The Case for Content-First Design</h2>
      <p>For decades, the design process often started with wireframes and layouts, with content treated as an afterthought—something to fill the spaces once the design was approved. This approach has fundamental flaws: design should serve content, not the other way around.</p>
      
      <p>Content-first design reverses this process. By developing key messages, information architecture, and content strategy before visual design begins, teams create more cohesive, purposeful user experiences that effectively communicate and achieve business goals.</p>
      
      <h3>Content Determines Structure</h3>
      <p>Different types of content require different presentations. A product comparison needs a format that highlights similarities and differences. A step-by-step guide benefits from a sequential layout with clear progression. An immersive story might utilize a more creative, flowing structure.</p>
      
      <p>When designers know what content they're working with, they can create structures that enhance rather than constrain the message. This leads to layouts that feel natural rather than forced.</p>
      
      <h2>Implementing a Content-First Approach</h2>
      
      <h3>Start with Content Strategy</h3>
      <p>Before design begins, develop a clear content strategy that answers key questions:</p>
      <ul>
        <li>Who are we communicating with?</li>
        <li>What do they need from us?</li>
        <li>What do we want them to do or understand?</li>
        <li>What types of content will best serve these goals?</li>
        <li>What tone and voice will resonate with our audience?</li>
      </ul>
      
      <h3>Create Content Models</h3>
      <p>Content models define the types of content you'll create and their components. For example, a "product" content type might include name, description, features, specifications, and related products. These models ensure consistency and help determine appropriate design patterns.</p>
      
      <h3>Develop Real Content Early</h3>
      <p>Work with actual content—not lorem ipsum—as early as possible in the design process. This reveals practical considerations like:
      <ul>
        <li>How much space different content elements require</li>
        <li>How headlines actually flow across different screen sizes</li>
        <li>Where content hierarchies need refinement</li>
        <li>What supporting visuals will enhance the message</li>
      </ul>
      
      <h2>The Role of UX Writing</h2>
      <p>UX writing—the craft of creating the text elements in user interfaces—is increasingly recognized as a crucial component of effective design. Clear, concise microcopy for buttons, form fields, error messages, and instructions significantly impacts usability and conversion rates.</p>
      
      <p>When UX writers collaborate closely with designers from the beginning, interfaces become more intuitive, helpful, and aligned with the user's mental models. This collaboration ensures that both visual and verbal elements work in harmony to guide users through their journey.</p>
      
      <h2>Content Governance for the Long Term</h2>
      <p>Content-first design isn't just about the initial creation—it requires ongoing management. Establish content governance practices that maintain quality and consistency as your digital presence evolves. This includes content auditing, updating processes, style guides, and roles and responsibilities for content maintenance.</p>
      
      <p>By prioritizing content strategy and developing design systems that flex to accommodate various content needs, organizations create digital experiences that truly serve both business objectives and user needs—proving that when it comes to effective design, words matter just as much as visuals.</p>
    `,
    category: "Content Strategy",
    date: "February 11, 2023",
    author: "James Wilson",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "The Future of E-Commerce: Trends and Technologies",
    excerpt: "Explore the innovations that are reshaping online shopping experiences and how businesses can stay ahead of the curve.",
    content: `
      <h2>E-Commerce Evolution</h2>
      <p>E-commerce has undergone dramatic transformation since its inception, but recent technological advancements and changing consumer expectations are accelerating this evolution at an unprecedented pace. Businesses that anticipate and adapt to these changes will thrive; those that don't risk becoming obsolete.</p>
      
      <h3>Headless Commerce Architecture</h3>
      <p>Traditional e-commerce platforms tightly couple the frontend presentation layer with the backend commerce functionality. Headless commerce decouples these components, allowing businesses to update their customer-facing experience without modifying the underlying commerce engine.</p>
      
      <p>This architecture offers several advantages:</p>
      <ul>
        <li>Faster implementation of frontend changes and experiments</li>
        <li>Consistent experiences across multiple touchpoints (web, mobile, kiosk, IoT)</li>
        <li>Freedom to use best-of-breed solutions for different aspects of the stack</li>
        <li>Improved performance and scalability</li>
      </ul>
      
      <h3>Immersive Shopping Experiences</h3>
      <p>As online shopping becomes increasingly competitive, creating memorable, immersive experiences is becoming a key differentiator. Technologies enabling this include:</p>
      
      <h4>Augmented Reality (AR)</h4>
      <p>AR allows customers to visualize products in their own environment before purchasing. Furniture retailers like IKEA let shoppers place virtual furniture in their homes, while beauty brands like Sephora offer virtual try-on experiences for cosmetics. These implementations reduce return rates and increase purchase confidence.</p>
      
      <h4>Virtual Reality (VR)</h4>
      <p>Though still emerging in mainstream e-commerce, VR creates fully immersive shopping environments. Virtual showrooms and stores allow customers to browse products in 3D space, offering experiences impossible in traditional online shopping.</p>
      
      <h4>3D Product Visualization</h4>
      <p>Between basic product photography and full AR/VR implementations, 3D product visualization offers interactive experiences that let customers examine products from all angles, zoom in on details, and understand products better than static images allow.</p>
      
      <h2>AI and Personalization</h2>
      
      <h3>Hyper-Personalization</h3>
      <p>AI algorithms now analyze vast amounts of customer data to deliver increasingly personalized experiences beyond simple product recommendations. This includes:</p>
      <ul>
        <li>Personalized search results based on browsing history and preferences</li>
        <li>Dynamic pricing strategies tailored to individual price sensitivity</li>
        <li>Customized homepage layouts highlighting categories of interest</li>
        <li>Personalized loyalty programs and promotions</li>
      </ul>
      
      <h3>AI-Powered Customer Service</h3>
      <p>Advanced chatbots and virtual assistants are transforming customer service in e-commerce. Today's AI assistants can:</p>
      <ul>
        <li>Handle complex product inquiries with natural language understanding</li>
        <li>Make personalized product recommendations</li>
        <li>Process returns and exchanges</li>
        <li>Provide post-purchase support</li>
      </ul>
      
      <h2>New Payment and Fulfillment Models</h2>
      
      <h3>Buy Now, Pay Later (BNPL)</h3>
      <p>BNPL services like Affirm, Klarna, and Afterpay have seen explosive growth, offering customers interest-free installment plans. For merchants, these services typically increase average order value and conversion rates, particularly with younger consumers.</p>
      
      <h3>Sustainable Fulfillment</h3>
      <p>As environmental concerns grow, e-commerce businesses are developing more sustainable fulfillment practices:</p>
      <ul>
        <li>Carbon-neutral shipping options</li>
        <li>Packaging made from recycled and/or compostable materials</li>
        <li>Micro-fulfillment centers reducing delivery distances</li>
        <li>Transparent sustainability information for consumers</li>
      </ul>
      
      <h2>Preparing for the Future</h2>
      <p>To stay competitive in this rapidly evolving landscape, e-commerce businesses should:</p>
      <ul>
        <li>Invest in flexible tech architecture that can adapt to new channels and technologies</li>
        <li>Collect and effectively utilize first-party customer data (with appropriate privacy measures)</li>
        <li>Experiment with emerging technologies through small pilot projects</li>
        <li>Focus on creating distinctive brand experiences that transcend platforms</li>
      </ul>
      
      <p>The future of e-commerce belongs to businesses that can seamlessly blend technology innovation with human-centered experiences, meeting customers where they are with solutions that make online shopping not just convenient, but truly delightful.</p>
    `,
    category: "E-Commerce",
    date: "January 29, 2023",
    author: "Emily Rodriguez",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Crafting Compelling Brand Stories: Connecting with Your Audience",
    excerpt: "Learn how to develop authentic brand narratives that resonate with your target audience and build lasting connections.",
    content: `
      <h2>Why Brand Storytelling Matters</h2>
      <p>In a world where consumers are bombarded with thousands of marketing messages daily, storytelling has emerged as a powerful way to cut through the noise. Stories engage the emotional centers of our brains in ways that facts and features simply cannot, creating memorable connections that influence purchasing decisions and foster brand loyalty.</p>
      
      <p>Effective brand storytelling goes beyond marketing—it creates a narrative framework that guides everything from product development to customer service, ensuring consistency across all touchpoints.</p>
      
      <h2>Elements of Compelling Brand Stories</h2>
      
      <h3>Authenticity</h3>
      <p>Today's consumers are highly skilled at detecting insincerity. Your brand story must reflect real values, experiences, and commitments. This doesn't mean exposing every flaw, but it does require honesty about who you are and what you stand for.</p>
      
      <p>Authenticity is demonstrated not just through what you say, but through consistent actions that align with your narrative. When Patagonia tells stories about environmental conservation, they back it with sustainable practices throughout their business.</p>
      
      <h3>Emotional Connection</h3>
      <p>The most powerful brand stories evoke emotion. Whether it's inspiration, belonging, nostalgia, or even humor, emotional responses create memorable experiences and drive consumer behavior.</p>
      
      <p>Research the emotional triggers that resonate with your specific audience. Different demographic groups and psychographic profiles respond to different emotional appeals based on their values, aspirations, and concerns.</p>
      
      <h3>Character and Conflict</h3>
      <p>Like any good story, brand narratives benefit from clear characters and some element of tension or conflict. This could be:</p>
      <ul>
        <li>The founder who overcame obstacles to create something new</li>
        <li>The customer whose life is improved by your product or service</li>
        <li>The societal problem your brand is helping to solve</li>
        <li>The industry standards you're challenging</li>
      </ul>
      
      <h2>Developing Your Brand Story</h2>
      
      <h3>Start with Purpose</h3>
      <p>Simon Sinek's concept of "Start With Why" remains powerful for brand storytelling. Before crafting your narrative, clearly define:</p>
      <ul>
        <li>Why does your brand exist beyond making money?</li>
        <li>What problem are you solving?</li>
        <li>What values guide your decisions?</li>
        <li>What impact do you want to have in the world?</li>
      </ul>
      
      <h3>Know Your Audience</h3>
      <p>Effective storytelling requires understanding who you're speaking to. Develop detailed audience personas that cover not just demographics but also:</p>
      <ul>
        <li>Aspirations and goals</li>
        <li>Pain points and challenges</li>
        <li>Values and beliefs</li>
        <li>Media consumption habits</li>
        <li>Cultural references that resonate</li>
      </ul>
      
      <h3>Create a Core Narrative</h3>
      <p>Your core narrative is the central story that captures your brand's essence. This isn't a tagline or mission statement, but rather a concise narrative that answers:</p>
      <ul>
        <li>Who are we?</li>
        <li>What do we do and why?</li>
        <li>Who do we serve?</li>
        <li>How are we different?</li>
        <li>What change are we creating?</li>
      </ul>
      
      <h2>Storytelling Across Channels</h2>
      <p>While your core narrative remains consistent, how you tell your story should adapt to different platforms:</p>
      
      <h3>Visual Storytelling</h3>
      <p>Instagram, TikTok, and other visual platforms require compelling imagery and short-form video that convey your story without necessarily relying on text. Consider how colors, composition, and visual style express your brand personality.</p>
      
      <h3>Long-Form Content</h3>
      <p>Blogs, podcasts, and case studies provide space to explore deeper aspects of your brand story, share customer journeys, or dive into your expertise and values in greater detail.</p>
      
      <h3>User-Generated Content</h3>
      <p>When customers share their experiences with your brand, they become part of your story. Creating opportunities for customers to contribute their narratives builds community and authenticity.</p>
      
      <h2>Measuring Story Impact</h2>
      <p>Brand storytelling impacts both quantitative metrics and qualitative outcomes:</p>
      <ul>
        <li>Engagement rates across platforms</li>
        <li>Time spent with content</li>
        <li>Emotional sentiment in comments and feedback</li>
        <li>Brand recall and recognition</li>
        <li>Customer loyalty and retention</li>
      </ul>
      
      <p>The most powerful brand stories evolve over time while maintaining core truths. By crafting authentic narratives that resonate emotionally with your audience, you create more than customers—you build a community united by shared values and experiences.</p>
    `,
    category: "Branding",
    date: "December 15, 2022",
    author: "David Thompson",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
  }
];

const categories = ["All", "Web Design", "Branding", "UI/UX", "Content Strategy", "E-Commerce"];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const featuredPost = blogPosts.find(post => post.featured);
  
  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const handleReadArticle = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {selectedPost ? (
        // Single Blog Post View
        <div>
          {/* Blog Post Header */}
          <section className="bg-muted dark:bg-gray-900/30 py-16">
            <div className="container-custom">
              <Button
                variant="outline"
                className="mb-8"
                onClick={handleBackToBlog}
              >
                ← Back to Blog
              </Button>
              
              <div className="max-w-4xl mx-auto">
                <span className="inline-block px-3 py-1 bg-brand-lavender text-white rounded-full text-xs font-medium mb-4">
                  {selectedPost.category}
                </span>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {selectedPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center text-muted-foreground text-sm mb-8">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" /> {selectedPost.date}
                  </span>
                  <span className="mx-3">•</span>
                  <span>{selectedPost.author}</span>
                  <span className="mx-3">•</span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" /> {selectedPost.readTime}
                  </span>
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto rounded-xl overflow-hidden">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>
          
          {/* Blog Post Content */}
          <section className="section bg-background">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto">
                <div className="prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: selectedPost.content || '' }}></div>
                
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Written by</p>
                      <p className="font-medium text-lg">{selectedPost.author}</p>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" className="rounded-full">
                        Share Article
                      </Button>
                      <Button 
                        size="sm" 
                        className="rounded-full bg-brand-lavender hover:bg-brand-lavender/90"
                        onClick={handleBackToBlog}
                      >
                        More Articles
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        // Blog Listing View
        <>
          {/* Hero Section */}
          <section className="bg-muted dark:bg-gray-900/30 py-20 md:py-28">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Our <span className="text-gradient">Blog</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Insights, trends, and tips from our team of creative experts to help you excel in the digital world.
                </p>
              </div>
            </div>
          </section>
          
          {/* Featured Post */}
          {featuredPost && (
            <section className="section bg-background pt-0">
              <div className="container-custom">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-[500px] object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                    <span className="inline-block px-3 py-1 bg-brand-lavender text-white rounded-full text-xs font-medium mb-4">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="text-white/80 mb-6 max-w-2xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center text-white/70 text-sm mb-6">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" /> {featuredPost.date}
                      </span>
                      <span className="mx-3">•</span>
                      <span>{featuredPost.author}</span>
                      <span className="mx-3">•</span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" /> {featuredPost.readTime}
                      </span>
                    </div>
                    <Button 
                      className="bg-white text-black hover:bg-white/90 rounded-full"
                      onClick={() => handleReadArticle(featuredPost)}
                    >
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}
          
          {/* Blog Filtering */}
          <section className="section py-12 bg-background">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-1.5 rounded-full text-sm transition-all ${
                        activeCategory === category
                          ? 'bg-brand-lavender text-white'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                {/* Search */}
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 rounded-full bg-muted border-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Blog Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleReadArticle(post)}
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <span className="px-2.5 py-0.5 bg-brand-lavender/10 text-brand-lavender rounded-full mr-3">
                          {post.category}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" /> {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <span className="text-sm">{post.author}</span>
                        <span className="text-sm flex items-center text-muted-foreground">
                          <Clock className="h-3.5 w-3.5 mr-1.5" /> {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    No articles found matching your criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 rounded-full"
                    onClick={() => {
                      setActiveCategory('All');
                      setSearchQuery('');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
              
              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="outline" className="rounded-full">
                    Load More Articles
                  </Button>
                </div>
              )}
            </div>
          </section>
          
          {/* Newsletter Section */}
          <section className="section bg-gradient-to-r from-brand-navy/10 to-brand-lavender/10">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-muted-foreground mb-8">
                  Get the latest industry insights, trends, and tips delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="rounded-full flex-1"
                  />
                  <Button className="rounded-full whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Blog;
