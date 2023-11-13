import OpenAI from "openai4";

const openai = new OpenAI();

async function main() {
  const image = await openai.images.generate({ model: "dall-e-3", prompt: "A cute baby sea otter" });

  console.log(image.data);
}
main();

/* answer:
[
  {
    revised_prompt: 
    'Imagine a charming visual of a baby sea otter. 
    The tiny creature is as adorable as can be, with its thick, dark brown fur that 
    looks incredibly soft to touch. 
    Its small, round eyes are filled with curiosity, 
    glinting with mischief and playful innocence. 
    The baby otter is adorably floating on the gentle waves of the deep blue sea, 
    one paw playfully reaching out towards a small fish that swims near it. 
    In the background, the setting sun turns the sky into a fabulous array of colors, with magenta, orange, and a sprinkle of gold, creating a breathtaking backdrop for this delightful scene.',
    url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-0fo1etSOy1KRkhEg8KbvLFB0/user-laVf1YJ9vng8ZWlV2IA7vmIo/img-FhZ1u4aLxvkj1beuzIYv3YMG.png?st=2023-11-13T09%3A08%3A57Z&se=2023-11-13T11%3A08%3A57Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-11-13T06%3A09%3A17Z&ske=2023-11-14T06%3A09%3A17Z&sks=b&skv=2021-08-06&sig=DgfhumP3xePujgg%2BSy/2c6PvktFxCPs4oXpXsAsmpdo%3D'
  }
]
*/