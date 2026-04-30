"use client";

import { Button, Input, Label, Modal, Surface, TextField, toast } from "@heroui/react";
import { MdOutlineBorderColor } from "react-icons/md";
import { useForm } from "react-hook-form"

const BookNowModal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => {
        if(!error){
            alert('Booking Done')
        }
    }

    return (
        <Modal>
            <Button variant="primary">Book Now</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <MdOutlineBorderColor size={20}></MdOutlineBorderColor>
                            </Modal.Icon>
                            <Modal.Heading>Complete Your Qurbani Booking</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill in your details to confirm your booking. We'll ensure a smooth and reliable Qurbani experience.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                    <TextField className="w-full" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name"
                                        {...register("name", { required: 'name is required' })} />
                                    </TextField>
                                    <TextField className="w-full" type="email">
                                        <Label>Email</Label>
                                        <Input placeholder="Enter your email"
                                        {...register("email", { required: 'email is required' })} />
                                    </TextField>
                                    <TextField className="w-full" type="tel">
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number"
                                        {...register("phone", { required: 'phone is required' })} />
                                    </TextField>
                                    <TextField className="w-full" name="address">
                                        <Label>Address</Label>
                                        <Input placeholder="Enter your address"
                                        {...register("address", { required: 'address is required' })} />
                                    </TextField>
                                </form>
                                <Modal.Footer className="mt-4">
                                    <Button slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button type="submit">Confirm Booking</Button>
                                </Modal.Footer>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

export default BookNowModal;