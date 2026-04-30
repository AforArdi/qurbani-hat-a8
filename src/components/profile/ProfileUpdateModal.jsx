'use client'

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useForm } from "react-hook-form"
import { MdOutlineBorderColor } from "react-icons/md";
import { authClient } from "@/lib/auth-client"
import { toast } from "react-toastify";

const ProfileUpdateModal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const {name, photo} = data;

        await authClient.updateUser({
            image: photo,
            name
        })

        if(data){
            toast.success('Profile Info Updated');
        }
    }

    return (
        <Modal>
            <Button variant="primary">Update</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <MdOutlineBorderColor size={20}></MdOutlineBorderColor>
                            </Modal.Icon>
                            <Modal.Heading>Update Profile Info</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                    <TextField className="w-full" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name"
                                            {...register("name", { required: true })} />
                                        {errors.name && <span className="text-red-500">name is required</span>}
                                    </TextField>
                                    <TextField className="w-full" type="url">
                                        <Label>Photo URL</Label>
                                        <Input placeholder="Enter your address"
                                            {...register("photo", { required: true })} />
                                        {errors.photo && <span className="text-red-500">photo url is required</span>}
                                    </TextField>
                                    <Modal.Footer className="mt-4">
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

export default ProfileUpdateModal;