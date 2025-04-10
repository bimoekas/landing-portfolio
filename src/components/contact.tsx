import { useForm } from 'react-hook-form'

import { ContactForm, ContactFormSchema } from '@/types/form/ContactForm'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'

import SectionTitle from './SectionTitle'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter } from './ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (values: ContactForm) => {
    try {
      setIsLoading(true)

      const templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      toast.success('Message sent successfully!', {
        description:
          'I appreciate your message — I’ll get back to you as soon as I can.',
        duration: 3000,
        classNames: {
          title: 'text-primary',
          description: 'text-primary',
        },
      })
    } catch (error) {
      console.error(error)

      toast.error('Failed to send message', {
        description:
          'Oops! Something went wrong. Please try again or reach out via another method.',
        duration: 3000,
        classNames: {
          title: 'text-primary',
          description: 'text-primary',
        },
      })
    } finally {
      setIsLoading(false)
      form.reset()
    }
  }

  console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID)

  return (
    <section
      id="contact"
      className="mx-4 flex min-h-screen flex-col items-center justify-center">
      <SectionTitle title="Contact Me" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-8 w-full md:max-w-2xl">
          <Card>
            <CardContent className="grid gap-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button type="submit" disabled={isLoading} className="w-36">
                {isLoading && <Loader2 className="animate-spin" />}
                {!isLoading && 'Send Message'}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  )
}

export default Contact
