import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import Title from "./Title";
import Label from "components/common/Label";
import TextBox from "components/common/TextBox";
import TextArea from "components/common/TextArea";
import WindowOverlay from "components/common/WindowOverlay";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCheck from "@fortawesome/fontawesome-free-solid/faCheck";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import IconButton from "components/IconButton";
import { Flex, Box } from "grid-styled";
import Form from "components/common/Form";

class AddRecipeForm extends Component {
	constructor(props) {
		super(props);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleDescriptionChange(event) {
		this.props.changeCreatingRecipe(
			Object.assign({}, this.props.recipe, {
				description: event.target.value
			})
		);
	}

	handleNameChange(event) {
		this.props.changeCreatingRecipe(
			Object.assign({}, this.props.recipe, {
				name: event.target.value
			})
		);
	}

	handleSubmit(event) {
		return false;
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<WindowOverlay>
					<Flex
						width={1}
						alignItems="flex-end"
						justifyContent="flex-end"
					>
						<IconButton
							type="button"
							onClick={() =>
								this.props.addRecipe(this.props.recipe)
							}
						>
							<FontAwesomeIcon
								icon={faCheck}
								color="#ffffff"
								size="2x"
							/>
						</IconButton>
						<IconButton
							type="button"
							onClick={() => this.props.cancelAddRecipe()}
						>
							<FontAwesomeIcon
								icon={faTimes}
								color="#ffffff"
								size="2x"
							/>
						</IconButton>
					</Flex>
					<Flex justifyContent="center">
						<Card>
							<Flex flexDirection="column">
								<Title>Add Recipe</Title>
								<Flex flexDirection="column" py="10px">
									<Label for="name">Name:</Label>
									<TextBox
										name="name"
										onChange={this.handleNameChange}
										value={this.props.recipe.name}
									/>
								</Flex>
								<Flex flexDirection="column" py="10px">
									<Label for="description">
										Description:
									</Label>
									<TextArea
										name="description"
										onChange={this.handleDescriptionChange}
										value={this.props.recipe.description}
									/>
								</Flex>
							</Flex>
						</Card>
					</Flex>
				</WindowOverlay>
			</Form>
		);
	}
}

AddRecipeForm.propTypes = {
	addRecipe: PropTypes.func.isRequired,
	cancelAddRecipe: PropTypes.func.isRequired,
	changeCreatingRecipe: PropTypes.func.isRequired,
	recipe: PropTypes.object.isRequired
};

export default AddRecipeForm;
