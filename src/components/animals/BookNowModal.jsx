"use client";

import { Button, Input, Label, Modal, Surface, TextField, toast } from "@heroui/react";
import { MdOutlineBorderColor } from "react-icons/md";

const BookNowModal = () => {
    const handleBookNow = (e) => {
        e.preventDefault(); // stop page reload
        alert('Your Booking is confirmed!');
    };
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
                                <form onSubmit={handleBookNow} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="email" type="email">
                                        <Label>Email</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>
                                    <TextField className="w-full" name="phone" type="tel">
                                        <Label>Phone</Label>
                                        <Input placeholder="Enter your phone number" />
                                    </TextField>
                                    <TextField className="w-full" name="address">
                                        <Label>Address</Label>
                                        <Input placeholder="Enter your address" />
                                    </TextField>
                                </form>
                                <Modal.Footer className="mt-4">
                                    <Button slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button slot="close">Confirm Booking</Button>
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