import fs from "fs";
import OpenAI from "openai4";

const openai = new OpenAI();

async function main() {
  const file = await openai.files.create({
    file: fs.createReadStream("example.jsonl"),
    purpose: "fine-tune",
  });

  console.log(file);
}

/*
https://platform.openai.com/docs/guides/fine-tuning

Fine-tuning lets you get more out of the models available through the API by providing:

- Higher quality results than prompting
- Ability to train on more examples than can fit in a prompt
- Token savings due to shorter prompts
- Lower latency requests

OpenAI's text generation models have been pre-trained on a vast amount of text. 
To use the models effectively, we include instructions and sometimes several 
examples in a prompt. Using demonstrations to show how to perform a task 
is often called "few-shot learning."

Fine-tuning improves on few-shot learning by training on many more examples than can fit 
in the prompt, letting you achieve better results on a wide number of tasks. 
Once a model has been fine-tuned, you won't need to provide as many examples in the prompt. 
This saves costs and enables lower-latency requests.
*/

/*
JSONL is a text-based format using the . jsonl file extension that is basically 
the same as JSON format but implemented using newline characters to separate JSON values. 
It is also known as JSON Lines. 

https://community.openai.com/t/fine-tuning-in-a-nutshell-with-a-single-line-jsonl-file-and-n-epochs/60806

Notice that the JSONL line above meets all the OpenAI criteria for a properly formatted JSONL 
key:value line item, namely:

- The prompt ends with a separator, in this tutorial I will use ++++.
- The completion begins with a single white space.
- The completion ends with a stop, in this tutorial I will use ####.

*/
main();